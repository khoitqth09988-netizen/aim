import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { WebSocket } from 'ws';
import { createGameServer } from '../server/game-server.mjs';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function client(url, room, name) {
  const socket = new WebSocket(url); const messages = [];
  socket.on('message', data => messages.push(JSON.parse(data.toString())));
  await once(socket, 'open'); socket.send(JSON.stringify({type:'join', room, name}));
  async function next(predicate, timeout=3000) {
    const end = Date.now()+timeout;
    while(Date.now()<end) { const i=messages.findIndex(predicate); if(i>=0) return messages.splice(i,1)[0]; await wait(20); }
    throw new Error(`Timed out waiting for message; received: ${JSON.stringify(messages.slice(-4))}`);
  }
  return { socket, messages, next };
}

test('co-op shares bots and players, isolates rooms, and persists authoritative history', async () => {
  const dataDir = await mkdtemp(path.join(tmpdir(), 'aimforge-test-'));
  const app = createGameServer({dataDir}); await app.ready; await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  const port = app.server.address().port, ws = `ws://127.0.0.1:${port}/multiplayer`, http = `http://127.0.0.1:${port}`;
  let a, b, c;
  try {
    a=await client(ws,'TEAM','Alpha'); const joinedA=await a.next(m=>m.type==='joined');
    b=await client(ws,'TEAM','Bravo'); const joinedB=await b.next(m=>m.type==='joined');
    c=await client(ws,'OTHER','Charlie'); await c.next(m=>m.type==='joined');
    const both=await a.next(m=>m.type==='snapshot' && m.players.length===2);
    assert.deepEqual(new Set(both.players.map(p=>p.name)),new Set(['Alpha','Bravo']));
    const isolated=await c.next(m=>m.type==='snapshot'); assert.equal(isolated.players.length,1);
    assert.equal(joinedA.x,0); assert.equal(joinedB.x,-4);
    // Teleport requests are ignored by the server.
    b.socket.send(JSON.stringify({type:'move',x:26,z:-26,yaw:0,pitch:0}));
    const safe=await b.next(m=>m.type==='snapshot'); assert.ok(Math.hypot(safe.self.x-joinedB.x,safe.self.z-joinedB.z)<1);
    // Bravo has a clear line of sight to bot 5. Aim from server snapshots.
    for (let i=0;i<3;i++) {
      b.messages.length=0; const snap=await b.next(m=>m.type==='snapshot'); const bot=snap.bots[5];
      const dx=bot.x-snap.self.x,dz=bot.z-snap.self.z;
      b.socket.send(JSON.stringify({type:'shoot',yaw:Math.atan2(-dx,-dz),pitch:Math.atan2(-.35,Math.hypot(dx,dz))}));
      const hit=await b.next(m=>m.type==='hit'); assert.equal(hit.bot,5); if(i===2) assert.equal(hit.killed,true);
      await wait(170);
    }
    const shared=await a.next(m=>m.type==='snapshot' && m.bots[5].health===0); assert.equal(shared.bots[5].health,0);
    b.socket.send(JSON.stringify({type:'leave'}));
    await wait(120); await app.flush();
    const records=await (await fetch(`${http}/api/online-scores?sort=recent&name=Bravo`)).json();
    assert.equal(records.length,1); assert.equal(records[0].kills,1); assert.equal(records[0].hits,3); assert.equal(records[0].room,'TEAM');
    // The same connection can join another round without duplicating the old score.
    b.socket.send(JSON.stringify({type:'join',room:'TEAM',name:'Bravo'})); await b.next(m=>m.type==='joined');
    assert.equal((await fetch(`${http}/health`)).status,200);
  } finally {
    for (const x of [a,b,c]) x?.socket.terminate(); await wait(30); await app.flush(); await new Promise(resolve=>app.server.close(resolve)); await rm(dataDir,{recursive:true,force:true});
  }
});

test('history survives a restart and CORS rejects unapproved origins', async () => {
  const dataDir = await mkdtemp(path.join(tmpdir(), 'aimforge-persist-'));
  let app = createGameServer({dataDir, allowedOrigins:'https://allowed.example'});
  try {
    await app.ready; await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
    let port=app.server.address().port;
    const blocked=await fetch(`http://127.0.0.1:${port}/health`, {headers:{Origin:'https://other.example'}});
    assert.equal(blocked.status,403);
    const allowed=await fetch(`http://127.0.0.1:${port}/health`, {headers:{Origin:'https://allowed.example'}});
    assert.equal(allowed.headers.get('access-control-allow-origin'),'https://allowed.example');
    const socket=new WebSocket(`ws://127.0.0.1:${port}/multiplayer`, {origin:'https://allowed.example'});
    await once(socket,'open');
    const joined=new Promise(resolve=>socket.on('message',data=>{const msg=JSON.parse(data.toString()); if (msg.type==='joined') resolve();}));
    socket.send(JSON.stringify({type:'join',name:'Persist',room:'TEAM'})); await joined;
    socket.send(JSON.stringify({type:'leave'})); await wait(80); await app.flush(); socket.terminate();
    await new Promise(resolve=>app.server.close(resolve));
    app=createGameServer({dataDir}); await app.ready; await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve)); port=app.server.address().port;
    const scores=await (await fetch(`http://127.0.0.1:${port}/api/online-scores?name=Persist`)).json();
    assert.equal(scores.length,1); assert.equal(scores[0].result,'left');
  } finally { await new Promise(resolve=>app.server.close(resolve)); await rm(dataDir,{recursive:true,force:true}); }
});

test('frontend and multiplayer can share one HTTP origin', async () => {
  const dataDir = await mkdtemp(path.join(tmpdir(), 'aimforge-origin-'));
  let upgraded = false;
  const app = createGameServer({
    dataDir,
    requestHandler: (req,res) => { res.writeHead(200, {'Content-Type':'text/plain'}); res.end(`frontend:${req.url}`); },
    upgradeHandler: (_req,socket) => { upgraded = true; socket.destroy(); },
  });
  try {
    await app.ready; await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    const port = app.server.address().port;
    assert.equal(await (await fetch(`http://127.0.0.1:${port}/`)).text(), 'frontend:/');
    assert.equal((await (await fetch(`http://127.0.0.1:${port}/health`)).json()).ok, true);
    const socket = new WebSocket(`ws://127.0.0.1:${port}/multiplayer`);
    const hello = new Promise(resolve => socket.once('message', data => resolve(JSON.parse(data.toString()))));
    assert.deepEqual(await hello, {type:'hello',protocol:1});
    socket.close(); await once(socket,'close');
    const other = new WebSocket(`ws://127.0.0.1:${port}/_next/webpack-hmr`);
    await new Promise(resolve => { other.on('error',()=>{}); other.on('close',resolve); });
    assert.equal(upgraded,true);
  } finally { await new Promise(resolve=>app.server.close(resolve)); await rm(dataDir,{recursive:true,force:true}); }
});
