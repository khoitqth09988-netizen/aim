import http from 'node:http';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { WebSocketServer, WebSocket } from 'ws';

const cover = [
  { x: -9, z: -8, w: 5, d: 3, h: 2.5 }, { x: 9, z: -10, w: 5, d: 3, h: 2.5 },
  { x: -15, z: -1, w: 3, d: 5, h: 2.8 }, { x: 15, z: 1, w: 3, d: 5, h: 2.8 },
  { x: -7, z: 7, w: 4, d: 3, h: 1.5 }, { x: 8, z: 8, w: 4, d: 3, h: 1.5 },
  { x: 0, z: -15, w: 5, d: 3, h: 2 }, { x: 0, z: 18, w: 5, d: 3, h: 1.5 },
];
const botSpawns = [[-11,-17], [0,-20], [11,-16], [-18,-12], [17,-4], [-13,2]];
const playerSpawns = [[0,22], [-4,22], [4,22], [-8,22], [8,22], [-12,22], [12,22], [0,25]];
const collides = (x,z,r=.45) => Math.abs(x)>27 || Math.abs(z)>27 || cover.some(c=>Math.abs(x-c.x)<c.w/2+r && Math.abs(z-c.z)<c.d/2+r);
const finite = n => typeof n === 'number' && Number.isFinite(n);
const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
const send = (socket, data) => { if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(data)); };
// Ray against rectangular cover. All bot/player shots are blocked by the arena's solid cover.
function blocked(from, dir, max) {
  return cover.some(c => {
    let lo = 0, hi = max;
    const bounds = [[c.x-c.w/2,c.x+c.w/2], [0,c.h], [c.z-c.d/2,c.z+c.d/2]];
    for (let i=0;i<3;i++) {
      if (Math.abs(dir[i]) < 1e-8) { if (from[i]<bounds[i][0] || from[i]>bounds[i][1]) return false; continue; }
      let a=(bounds[i][0]-from[i])/dir[i], b=(bounds[i][1]-from[i])/dir[i];
      if (a>b) [a,b]=[b,a]; lo=Math.max(lo,a); hi=Math.min(hi,b); if (lo>hi) return false;
    }
    return true;
  });
}
function makeBots() { return botSpawns.map(([x,z], id)=>({ id, x, z, health:100, respawn:0, cooldown:1+Math.random()*3, phase:Math.random()*10 })); }
export function createGameServer({ dataDir = process.env.DATA_DIR || '.data', allowedOrigins = process.env.ALLOWED_ORIGINS || '*', requestHandler = null, upgradeHandler = null } = {}) {
  const rooms = new Map(); const clients = new Set();
  const file = path.resolve(dataDir, 'online-history.json');
  const allow = origin => allowedOrigins === '*' || (origin && allowedOrigins.split(',').map(x=>x.trim()).includes(origin));
  let history = []; let loaded = false; let writes = Promise.resolve();
  const ready = (async () => { try { const value=JSON.parse(await readFile(file,'utf8')); if (Array.isArray(value)) history=value.slice(-500); } catch (e) { if (e.code !== 'ENOENT') console.error('Không thể đọc lịch sử:',e.message); } loaded=true; })();
  function saveRound(p) {
    if (p.saved || !p.started || !loaded) return; p.saved = true;
    const record = { name:p.name, room:p.room, kills:p.kills, shots:p.shots, hits:p.hits, time:Math.round((Date.now()-p.started)/1000), date:new Date().toISOString(), result:p.health<=0?'defeated':'left' };
    history.push(record); if (history.length>500) history=history.slice(-500);
    const snapshot=JSON.stringify(history);
    writes = writes.then(async()=>{ await mkdir(path.dirname(file),{recursive:true}); await writeFile(file+'.tmp',snapshot); await rename(file+'.tmp',file); }).catch(e=>console.error('Không thể lưu lịch sử:', e.message));
  }
  const server = http.createServer(async (req,res) => {
    const url = new URL(req.url,'http://game.local');
    if (requestHandler && url.pathname !== '/health' && url.pathname !== '/api/online-scores') {
      try { await requestHandler(req,res); } catch (error) { console.error('Application request failed:', error); if (!res.headersSent) res.writeHead(500); res.end(); }
      return;
    }
    const origin=req.headers.origin;
    if (origin && !allow(origin)) { res.writeHead(403); return res.end('Origin not allowed'); }
    res.setHeader('Access-Control-Allow-Origin', allowedOrigins === '*' ? '*' : (origin || allowedOrigins.split(',')[0].trim()));
    res.setHeader('Vary','Origin'); res.setHeader('Cache-Control','no-store');
    if (req.method==='OPTIONS') { res.writeHead(204,{'Access-Control-Allow-Methods':'GET, OPTIONS'}); return res.end(); }
    if (req.method!=='GET') { res.writeHead(405); return res.end(); }
    if (url.pathname==='/') { res.writeHead(200,{'Content-Type':'application/json'}); return res.end(JSON.stringify({service:'AimForge co-op', websocket:'/multiplayer', health:'/health', scores:'/api/online-scores'})); }
    if (url.pathname==='/health') { res.writeHead(200,{'Content-Type':'application/json'}); return res.end(JSON.stringify({ok:true, rooms:rooms.size})); }
    if (url.pathname==='/api/online-scores') {
      await ready;
      const name=(url.searchParams.get('name')||'').trim().slice(0,16).toLowerCase();
      const matching=name ? history.filter(item=>item.name.toLowerCase()===name) : history;
      const scores=url.searchParams.get('sort')==='recent' ? [...matching].reverse() : [...matching].sort((a,b)=>b.kills-a.kills || b.hits/Math.max(1,b.shots)-a.hits/Math.max(1,a.shots));
      res.writeHead(200,{'Content-Type':'application/json'}); return res.end(JSON.stringify(scores.slice(0,50)));
    }
    res.writeHead(404); res.end();
  });
  const wss = new WebSocketServer({ noServer:true, maxPayload:2048 });
  server.on('upgrade',(req,socket,head)=>{
    if (new URL(req.url,'http://game.local').pathname!=='/multiplayer') {
      if (upgradeHandler) { Promise.resolve(upgradeHandler(req,socket,head)).catch(() => socket.destroy()); }
      else socket.destroy();
      return;
    }
    if (!allow(req.headers.origin) || clients.size>=200) { socket.write('HTTP/1.1 403 Forbidden\r\n\r\n'); socket.destroy(); return; }
    wss.handleUpgrade(req,socket,head,ws=>wss.emit('connection',ws,req));
  });
  wss.on('connection', ws=>{
    clients.add(ws); send(ws,{type:'hello',protocol:1}); let player=null; let messages=0; let windowStart=Date.now(); ws.alive=true;
    ws.on('pong',()=>{ws.alive=true;});
    ws.on('message', raw=>{
      const now=Date.now(); if (now-windowStart>1000) { messages=0; windowStart=now; } if (++messages>40) return ws.close(1008,'Rate limit');
      let msg; try { msg=JSON.parse(raw.toString()); } catch { return; }
      if (!msg || typeof msg !== 'object') return;
      if (msg.type==='join' && !player) {
        const room=typeof msg.room==='string' ? msg.room.trim().toUpperCase() : '';
        const name=typeof msg.name==='string' ? msg.name.trim().slice(0,16) : '';
        if (!/^[A-Z0-9_-]{1,16}$/.test(room) || !name || !loaded) return send(ws,{type:'error',message:'Tên hoặc mã phòng không hợp lệ, hoặc máy chủ đang khởi động.'});
        if (!rooms.has(room)) { if (rooms.size>=100) return send(ws,{type:'error',message:'Máy chủ đã đầy.'}); rooms.set(room,{players:new Map(),bots:makeBots()}); }
        const roomState=rooms.get(room); if (roomState.players.size>=8) return send(ws,{type:'error',message:'Phòng đã đầy (8 người).'});
        const used=new Set([...roomState.players.values()].map(p=>p.spawn)); const spawn=playerSpawns.findIndex((_,i)=>!used.has(i));
        const [x,z]=playerSpawns[spawn];
        player={id:randomUUID(),ws,name,room,spawn,x,z,yaw:0,pitch:0,health:100,ammo:30,medkits:3,kills:0,shots:0,hits:0,started:now,lastMove:now,lastShot:0,reloadAt:0,saved:false};
        roomState.players.set(player.id,player); send(ws,{type:'joined',id:player.id,x,z,room});
      } else if (msg.type==='leave' && player) {
        saveRound(player); const room=rooms.get(player.room); room?.players.delete(player.id); if (room && room.players.size===0) rooms.delete(player.room); player=null;
      } else if (player && player.health>0) {
        const room=rooms.get(player.room); if (!room) return;
        if (msg.type==='move' && [msg.x,msg.z,msg.yaw,msg.pitch].every(finite)) {
          const dt=clamp((now-player.lastMove)/1000,0,.25); player.lastMove=now;
          const dx=msg.x-player.x,dz=msg.z-player.z, length=Math.hypot(dx,dz), limit=9*dt+.2;
          if (length<=limit && !collides(msg.x,msg.z)) { player.x=msg.x; player.z=msg.z; }
          player.yaw=clamp(msg.yaw,-100000,100000); player.pitch=clamp(msg.pitch,-1.25,1.25);
        } else if (msg.type==='reload' && !player.reloadAt && player.ammo<30) player.reloadAt=now+1400;
        else if (msg.type==='heal' && player.medkits>0 && player.health<100) { player.medkits--; player.health=Math.min(100,player.health+35); }
        else if (msg.type==='shoot' && [msg.yaw,msg.pitch].every(finite) && now-player.lastShot>=140 && !player.reloadAt && player.ammo>0) {
          player.lastShot=now; player.shots++; player.ammo--; if (!player.ammo) player.reloadAt=now+1400;
          const yaw=clamp(msg.yaw,-100000,100000), pitch=clamp(msg.pitch,-1.25,1.25);
          const dir=[-Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch)], from=[player.x,1.7,player.z];
          let closest=null, best=100;
          for (const bot of room.bots) {
            if (bot.health<=0) continue;
            const v=[bot.x-from[0],1.35-from[1],bot.z-from[2]], t=v[0]*dir[0]+v[1]*dir[1]+v[2]*dir[2];
            if (t<0 || t>best) continue;
            const d=Math.hypot(v[0]-dir[0]*t,v[1]-dir[1]*t,v[2]-dir[2]*t);
            if (d<.75 && !blocked(from,dir,t)) { closest=bot; best=t; }
          }
          if (closest) { closest.health-=34; player.hits++; if (closest.health<=0) { closest.health=0; closest.respawn=now+3000; player.kills++; } send(ws,{type:'hit',bot:closest.id,killed:closest.health===0}); }
        }
      }
    });
    ws.on('close',()=>{ clients.delete(ws); if (!player) return; saveRound(player); const room=rooms.get(player.room); room?.players.delete(player.id); if (room && room.players.size===0) rooms.delete(player.room); });
    ws.on('error',()=>{});
  });
  let previous=Date.now(), snapshotAt=0;
  const tick=setInterval(()=>{
    const now=Date.now(),dt=clamp((now-previous)/1000,0,.1); previous=now;
    for (const room of rooms.values()) {
      for (const p of room.players.values()) if (p.reloadAt && now>=p.reloadAt) { p.reloadAt=0;p.ammo=30; }
      const living=[...room.players.values()].filter(p=>p.health>0);
      for (const bot of room.bots) {
        if (bot.health<=0) { if (now>=bot.respawn) { [bot.x,bot.z]=botSpawns[bot.id]; bot.health=100; bot.cooldown=2; } continue; }
        const available=living.filter(p=>p.health>0); if (!available.length) continue;
        const target=available.reduce((a,b)=>Math.hypot(a.x-bot.x,a.z-bot.z)<Math.hypot(b.x-bot.x,b.z-bot.z)?a:b);
        const dx=target.x-bot.x,dz=target.z-bot.z,dist=Math.hypot(dx,dz)||1;
        if (dist>9) { const nx=bot.x+dx/dist*1.5*dt,nz=bot.z+dz/dist*1.5*dt; if (!collides(nx,bot.z,.6)) bot.x=nx; if (!collides(bot.x,nz,.6)) bot.z=nz; }
        bot.cooldown-=dt;
        if (dist<22 && bot.cooldown<=0) {
          bot.cooldown=2.3+Math.random()*1.6;
          const dir=[dx/dist, .2/dist, dz/dist];
          if (!blocked([bot.x,1.5,bot.z],dir,dist)) { target.health=Math.max(0,target.health-8); send(target.ws,{type:'damage',health:target.health}); if (!target.health) { saveRound(target); send(target.ws,{type:'defeated',self:{health:target.health,ammo:target.ammo,medkits:target.medkits,kills:target.kills,shots:target.shots,hits:target.hits,time:Math.floor((now-target.started)/1000),reloading:!!target.reloadAt,x:target.x,z:target.z}}); } }
        }
      }
      if (now-snapshotAt>=100) {
        const bots=room.bots.map(b=>({id:b.id,x:b.x,z:b.z,health:b.health}));
        const players=[...room.players.values()].map(p=>({id:p.id,name:p.name,x:p.x,z:p.z,yaw:p.yaw,health:p.health}));
        for (const p of room.players.values()) send(p.ws,{type:'snapshot',bots,players,self:{health:p.health,ammo:p.ammo,medkits:p.medkits,kills:p.kills,shots:p.shots,hits:p.hits,time:Math.floor((now-p.started)/1000),reloading:!!p.reloadAt,x:p.x,z:p.z}});
      }
    }
    if (now-snapshotAt>=100) snapshotAt=now;
  },50);
  const heartbeat=setInterval(()=>{ for (const ws of clients) { if (!ws.alive) { ws.terminate(); continue; } ws.alive=false; ws.ping(); } },30000);
  server.on('close',()=>{ clearInterval(tick); clearInterval(heartbeat); for (const ws of clients) ws.terminate(); wss.close(); });
  return { server, ready, flush:()=>writes };
}
if (process.argv[1] && import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  const {server,ready}=createGameServer(); const port=Number(process.env.PORT || 4000);
  await ready; server.listen(port,'0.0.0.0',()=>console.log(`AimForge multiplayer listening on 0.0.0.0:${port}`));
}
