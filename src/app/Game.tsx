'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, Crosshair, Expand, Gauge, Headphones, Keyboard, Maximize, MousePointer2, Shield, Target, Trophy, Users, Volume2, VolumeX, Zap } from 'lucide-react';
import ScorePanel from './ScorePanel';
import OnlinePanel from './OnlinePanel';
import { sendOnline, type OnlineConfig, type OnlineMessage, type OnlineSession, type OnlineSelf } from '@/lib/online';
import { readLocalScores, SCORE_KEY, type Difficulty, type Score } from '@/lib/scores';

type Status = 'ready' | 'playing' | 'paused' | 'gameover';
type Stats = { health: number; ammo: number; kills: number; shots: number; hits: number; time: number; reloading: boolean; medkits: number };
type Bot = { group: THREE.Group; body: THREE.Mesh; limbs: THREE.Mesh[]; health: number; speed: number; phase: number; cooldown: number; dead: boolean; hitFlash: number; deathAt: number };
const initialStats: Stats = { health: 100, ammo: 30, kills: 0, shots: 0, hits: 0, time: 0, reloading: false, medkits: 3 };
const ARENA = 27;
const cover = [
  { x: -9, z: -8, w: 5, d: 3, h: 2.5 }, { x: 9, z: -10, w: 5, d: 3, h: 2.5 },
  { x: -15, z: -1, w: 3, d: 5, h: 2.8 }, { x: 15, z: 1, w: 3, d: 5, h: 2.8 },
  { x: -7, z: 7, w: 4, d: 3, h: 1.5 }, { x: 8, z: 8, w: 4, d: 3, h: 1.5 },
  { x: 0, z: -15, w: 5, d: 3, h: 2 }, { x: 0, z: 18, w: 5, d: 3, h: 1.5 },
];

function formatTime(seconds: number) { return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`; }

export default function Game() {
  const mountRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<{ start: () => void; reload: () => void; fullscreen: () => void; sound: (on: boolean) => void } | null>(null);
  const [status, setStatus] = useState<Status>('ready');
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const difficultyRef = useRef<Difficulty>('normal');
  const [scoresOpen, setScoresOpen] = useState(false);
  const [onlineOpen, setOnlineOpen] = useState(false);
  const [onlineConnected, setOnlineConnected] = useState(false);
  const [onlineConfig, setOnlineConfig] = useState<OnlineConfig | null>(null);
  const onlineRef = useRef<OnlineSession | null>(null);
  const [latestScore, setLatestScore] = useState<Score | null>(null);
  const [stats, setStats] = useState<Stats>(initialStats);
  const [muted, setMuted] = useState(false);
  const [notice, setNotice] = useState('');
  const [fullscreen, setFullscreen] = useState(false);
  const [hit, setHit] = useState(false);
  const [hurt, setHurt] = useState(false);
  const [webglError, setWebglError] = useState(false);
  const hitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hurtTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const saveScore = useCallback((result: Stats) => {
    const score: Score = { name: 'ĐẶC VỤ', kills: result.kills, shots: result.shots, hits: result.hits, time: result.time, difficulty: difficultyRef.current, date: new Date().toISOString() };
    setLatestScore(score);
    try { localStorage.setItem(SCORE_KEY, JSON.stringify([score, ...readLocalScores()].slice(0, 50))); } catch { /* Storage may be unavailable in private mode. */ }
  }, []);

  async function connectOnline(config: OnlineConfig) {
    const socket = new WebSocket(config.url);
    const session: OnlineSession = { socket, config, id: '', joined: false, queue: [] };
    await new Promise<void>((resolve, reject) => {
      const timeout = window.setTimeout(() => { socket.close(); reject(new Error('Kết nối hết thời gian. Kiểm tra địa chỉ máy chủ.')); }, 8000);
      socket.onopen = () => { window.clearTimeout(timeout); resolve(); };
      socket.onerror = () => { window.clearTimeout(timeout); reject(new Error('Không thể kết nối máy chủ. Kiểm tra WSS và trạng thái máy chủ.')); };
      socket.onclose = () => { window.clearTimeout(timeout); reject(new Error('Máy chủ đã đóng kết nối.')); };
    });
    onlineRef.current?.socket.close(); onlineRef.current = session;
    socket.onmessage = event => { try { const message = JSON.parse(event.data) as OnlineMessage; if (session.queue.length < 100) session.queue.push(message); } catch { /* Ignore malformed packets. */ } };
    socket.onclose = () => { if (onlineRef.current === session) { session.queue.push({ type: 'disconnected' }); setOnlineConnected(false); } };
    socket.onerror = () => {};
    setOnlineConfig(config); setOnlineConnected(true); setNotice('');
  }
  function disconnectOnline() { const session = onlineRef.current; if (session) { sendOnline(session, { type: 'leave' }); session.socket.close(); } onlineRef.current = null; setOnlineConnected(false); setNotice(''); }

  const flashHit = useCallback(() => { setHit(true); if (hitTimer.current) clearTimeout(hitTimer.current); hitTimer.current = setTimeout(() => setHit(false), 130); }, []);
  const flashHurt = useCallback(() => { setHurt(true); if (hurtTimer.current) clearTimeout(hurtTimer.current); hurtTimer.current = setTimeout(() => setHurt(false), 250); }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' }); } catch { queueMicrotask(() => setWebglError(true)); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#1a292d');
    scene.fog = new THREE.FogExp2('#243638', 0.024);
    const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.08, 110);
    camera.position.set(0, 1.7, 22);
    scene.add(camera);
    scene.add(new THREE.HemisphereLight('#c4e7de', '#293338', 2.0));
    const sun = new THREE.DirectionalLight('#e0e8d3', 2.8);
    sun.position.set(-15, 35, 15); sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024); sun.shadow.camera.left = -35; sun.shadow.camera.right = 35; sun.shadow.camera.top = 35; sun.shadow.camera.bottom = -35;
    sun.shadow.normalBias = 0.04; scene.add(sun);

    const mat = (color: string, extra: THREE.MeshStandardMaterialParameters = {}) => new THREE.MeshStandardMaterial({ color, roughness: .82, ...extra });
    const groundMat = mat('#404d49'); const wallMat = mat('#354441'); const darkMat = mat('#202d2c');
    const trimMat = mat('#81958a'); const orange = mat('#e0ad63', { emissive: '#9c5a1c', emissiveIntensity: .35 });
    const teal = mat('#8fffe1', { emissive: '#59f6c6', emissiveIntensity: 2 });
    function box(w: number, h: number, d: number, material: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D = scene) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material); mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
    }
    box(58, .4, 58, groundMat, 0, -.25, 0);
    // Architectural seams and hazard lines give the training ground a sense of scale.
    const lineMat = mat('#74847a');
    for (let i = -24; i <= 24; i += 6) {
      box(.025, .012, 54, lineMat, i, -.035, 0); box(54, .012, .025, lineMat, 0, -.034, i);
    }
    for (const x of [-28, 28]) {
      box(1, 9, 58, wallMat, x, 4.5, 0); box(.12, .1, 55, teal, x * .98, 3.1, 0);
      for (let z = -24; z <= 24; z += 8) box(1.5, 10, 1.4, darkMat, x, 5, z);
    }
    for (const z of [-28, 28]) {
      box(58, 9, 1, wallMat, 0, 4.5, z); box(55, .1, .12, teal, 0, 3.1, z * .98);
      for (let x = -24; x <= 24; x += 8) box(1.4, 10, 1.5, darkMat, x, 5, z);
    }
    // Far industrial towers visible over the perimeter.
    for (let i = 0; i < 18; i++) {
      const a = i / 18 * Math.PI * 2; const r = 38 + (i % 3) * 5; const height = 12 + (i % 5) * 4;
      box(5 + i % 3, height, 5, i % 2 ? darkMat : wallMat, Math.sin(a) * r, height / 2 - 1, Math.cos(a) * r);
    }
    cover.forEach(c => {
      box(c.w, c.h, c.d, darkMat, c.x, c.h / 2, c.z);
      box(c.w + .12, .12, c.d + .12, trimMat, c.x, c.h + .02, c.z);
      box(c.w * .55, .09, .04, orange, c.x, c.h * .65, c.z + c.d / 2 + .025);
      for (const side of [-1, 1]) box(.1, c.h * .8, .08, trimMat, c.x + side * (c.w / 2 - .25), c.h / 2, c.z + c.d / 2 + .04);
    });
    // Central landing pad.
    const ring = new THREE.Mesh(new THREE.RingGeometry(4.4, 4.47, 64), new THREE.MeshBasicMaterial({ color: '#97c0a9', side: THREE.DoubleSide })); ring.rotation.x = -Math.PI / 2; ring.position.y = -.02; scene.add(ring);
    const innerRing = ring.clone(); innerRing.scale.setScalar(.75); scene.add(innerRing);
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; const mark = box(.12, .018, .8, orange, Math.sin(a) * 4.1, -.01, Math.cos(a) * 4.1); mark.rotation.y = a; }

    // First-person weapon, fixed to the camera.
    const weapon = new THREE.Group(); weapon.position.set(.42, -.42, -.83); weapon.rotation.set(-.02, -.08, -.02); camera.add(weapon);
    const gunDark = mat('#172321', { metalness: .55, roughness: .4 }); const gunLight = mat('#586c61', { metalness: .5, roughness: .45 });
    const friendly = mat('#9eeac4', { emissive:'#165e42', emissiveIntensity:.5 });
    box(.25, .23, .8, gunDark, 0, 0, 0, weapon); box(.18, .12, .58, gunLight, 0, .15, -.05, weapon);
    box(.13, .13, .5, gunDark, 0, .03, -.58, weapon); box(.19, .16, .14, gunLight, 0, .03, -.84, weapon);
    box(.11, .32, .15, gunDark, 0, -.24, .16, weapon).rotation.x = -.3;
    box(.08, .08, .22, teal, .13, .02, .05, weapon); box(.06, .07, .13, orange, 0, .25, .1, weapon);
    const muzzle = new THREE.PointLight('#ffcf85', 0, 8); muzzle.position.set(0, .04, -.95); weapon.add(muzzle);

    const bots: Bot[] = [];
    const robotDark = mat('#253533', { metalness: .5, roughness: .5 });
    const robotArmor = mat('#879889', { metalness: .45, roughness: .45 });
    const robotGlow = mat('#ff8a59', { emissive: '#ff5633', emissiveIntensity: 2 });
    const botParts: THREE.Object3D[] = [];
    function createBot(x: number, z: number, index: number) {
      const group = new THREE.Group(); group.position.set(x, 0, z); scene.add(group);
      const body = box(.8, .9, .42, robotArmor.clone(), 0, 1.37, 0, group);
      const limbs: THREE.Mesh[] = [];
      box(.55, .5, .4, robotDark, 0, 2.08, 0, group);
      box(.42, .11, .04, robotGlow, 0, 2.08, .22, group);
      box(.22, .19, .05, robotGlow, 0, 1.42, .23, group);
      for (const s of [-1, 1]) {
        limbs.push(box(.22, .77, .25, robotDark, s * .55, 1.32, 0, group));
        box(.3, .26, .34, robotArmor, s * .55, 1.7, 0, group);
        limbs.push(box(.25, .85, .3, robotDark, s * .22, .48, 0, group));
        box(.29, .18, .39, robotArmor, s * .22, .12, .04, group);
      }
      group.traverse(o => { if (o instanceof THREE.Mesh) { o.userData.botIndex = index; botParts.push(o); } });
      bots.push({ group, body, limbs, health: 100, speed: 1.3 + Math.random() * .6, phase: Math.random() * 7, cooldown: 1 + Math.random() * 3, dead: false, hitFlash: 0, deathAt: 0 });
    }
    [[-11,-17], [0,-20], [11,-16], [-18,-12], [17,-4], [-13,2]].forEach(([x,z], i) => createBot(x,z,i));

    let state: Status = 'ready'; let data = { ...initialStats }; let yaw = 0; let pitch = 0;
    let mouseDown = false; let lastShot = 0; let reloadUntil = 0; let elapsed = 0; let lastUi = 0; let soundOn = true;
    let audio: AudioContext | null = null; let recoil = 0; let frame = 0; let disposed = false;
    let onlineMode = false; let lastNetSend = 0;
    const remotePlayers = new Map<string, { group: THREE.Group; x: number; z: number; yaw: number }>();
    const keys = new Set<string>(); const clock = new THREE.Clock(); const raycaster = new THREE.Raycaster();
    const center = new THREE.Vector2(0,0); const direction = new THREE.Vector3();
    const tracers: { line: THREE.Line; life: number }[] = [];
    function tracer(from: THREE.Vector3, to: THREE.Vector3, color: string) {
      const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
      const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: .9, depthWrite: false });
      const line = new THREE.Line(geometry, material); scene.add(line); tracers.push({ line, life: .13 });
    }
    function clearTracer(index: number) { const { line } = tracers[index]; scene.remove(line); line.geometry.dispose(); (line.material as THREE.Material).dispose(); tracers.splice(index, 1); }
    function heal() { if (state !== 'playing' || data.medkits <= 0 || data.health >= 100) return; if (onlineMode) { sendOnline(onlineRef.current, {type:'heal'}); return; } data.health = Math.min(100, data.health + 35); data.medkits--; beep(650, .2, 'sine'); publish(); }

    function beep(freq: number, duration: number, type: OscillatorType = 'square', volume = .025) {
      if (!soundOn) return;
      try {
        audio ??= new AudioContext(); if (audio.state === 'suspended') void audio.resume();
        const osc = audio.createOscillator(); const gain = audio.createGain(); osc.type = type; osc.frequency.setValueAtTime(freq, audio.currentTime); osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * .45), audio.currentTime + duration);
        gain.gain.setValueAtTime(volume, audio.currentTime); gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + duration); osc.connect(gain); gain.connect(audio.destination); osc.start(); osc.stop(audio.currentTime + duration);
      } catch { /* Audio is optional. */ }
    }
    function publish() { setStats({ ...data }); }
    function distToPlayer(bot: Bot) { return Math.hypot(camera.position.x - bot.group.position.x, camera.position.z - bot.group.position.z); }
    function collides(x: number, z: number, radius = .45) {
      if (Math.abs(x) > ARENA || Math.abs(z) > ARENA) return true;
      return cover.some(c => Math.abs(x - c.x) < c.w / 2 + radius && Math.abs(z - c.z) < c.d / 2 + radius);
    }
    function removeRemote(id: string) { const avatar=remotePlayers.get(id); if (!avatar) return; scene.remove(avatar.group); avatar.group.traverse(o => { if (o instanceof THREE.Mesh) o.geometry.dispose(); }); remotePlayers.delete(id); }
    function reset() {
      for (const id of remotePlayers.keys()) removeRemote(id);
      data = { ...initialStats }; elapsed = 0; reloadUntil = 0; lastShot = 0; camera.position.set(0, 1.7, 22); yaw = 0; pitch = 0; camera.rotation.set(0, 0, 0);
      bots.forEach((b, i) => { const p = [[-11,-17], [0,-20], [11,-16], [-18,-12], [17,-4], [-13,2]][i]; b.group.position.set(p[0],0,p[1]); b.health = 100; b.dead = false; b.group.visible = true; b.group.rotation.z = 0; b.hitFlash = 0; b.cooldown = 1 + Math.random() * 3; }); publish();
    }
    function requestLock() {
      if (document.pointerLockElement !== renderer.domElement) {
        const result = renderer.domElement.requestPointerLock();
        if (result && typeof result.catch === 'function') result.catch(() => { if (onlineMode) { sendOnline(onlineRef.current,{type:'leave'}); if (onlineRef.current) { onlineRef.current.joined=false; onlineRef.current.queue.length=0; } onlineMode=false; } setNotice('Không thể khóa chuột. Hãy nhấn vào màn hình để thử lại.'); });
      }
    }
    function start() {
      if (state === 'gameover' || state === 'ready') {
        const session=onlineRef.current;
        if (session && session.socket.readyState !== WebSocket.OPEN) { setNotice('Đã mất kết nối. Mở PHÒNG ONLINE để kết nối lại hoặc chọn chơi offline.'); return; }
        reset(); onlineMode=!!session;
        if (session) { session.joined=false; session.id=''; session.queue.length=0; sendOnline(session,{type:'leave'}); sendOnline(session,{type:'join',room:session.config.room,name:session.config.name}); }
      }
      requestLock();
    }
    function reload() { if (state !== 'playing' || data.reloading || data.ammo === 30) return; if (onlineMode) { sendOnline(onlineRef.current, {type:'reload'}); } data.reloading = true; reloadUntil = elapsed + 1.4; beep(260, .16, 'triangle'); publish(); }
    function shoot(now: number) {
      if (state !== 'playing' || data.reloading || now - lastShot < .14 || (onlineMode && !onlineRef.current?.joined)) return;
      if (data.ammo <= 0) { reload(); return; }
      lastShot = now; data.ammo--; data.shots++; recoil = 1; muzzle.intensity = 7; beep(125, .09, 'sawtooth', .035);
      raycaster.setFromCamera(center, camera);
      const hits = raycaster.intersectObjects(botParts, false);
      const target = hits.find(h => { const b = bots[h.object.userData.botIndex]; return b && !b.dead; });
      const obstacles = scene.children.filter(o => o instanceof THREE.Mesh && o !== ring && o !== innerRing);
      const obstacleHit = raycaster.intersectObjects(obstacles, false)[0];
      const blocked = !!(target && obstacleHit && obstacleHit.distance < target.distance - .05);
      const end = target && !blocked ? target.point : obstacleHit?.point ?? raycaster.ray.at(50, new THREE.Vector3());
      tracer(weapon.localToWorld(new THREE.Vector3(0, .04, -.95)), end, '#bfffe2');
      if (onlineMode) { sendOnline(onlineRef.current, {type:'shoot',yaw,pitch}); if (data.ammo === 0) reload(); publish(); return; }
      if (target) {
        if (!blocked) {
          const bot = bots[target.object.userData.botIndex]; bot.health -= 34; bot.hitFlash = .18; data.hits++; flashHit(); beep(650, .07, 'sine', .025);
          if (bot.health <= 0) { bot.dead = true; bot.deathAt = elapsed; data.kills++; bot.cooldown = elapsed + 3; }
        }
      }
      if (data.ammo === 0) reload(); publish();
    }
    function onLockChange() {
      if (document.pointerLockElement === renderer.domElement) { state = 'playing'; setStatus('playing'); setNotice(''); clock.getDelta(); }
      else if (state === 'playing') { state = 'paused'; setStatus('paused'); mouseDown = false; keys.clear(); }
    }
    function onMouseMove(e: MouseEvent) { if (state !== 'playing') return; yaw -= e.movementX * .0022; pitch = THREE.MathUtils.clamp(pitch - e.movementY * .0022, -1.25, 1.25); camera.rotation.order = 'YXZ'; camera.rotation.set(pitch, yaw, 0); }
    function onDown(e: MouseEvent) { if (e.button === 0 && state === 'playing') { mouseDown = true; shoot(elapsed); } }
    function onUp(e: MouseEvent) { if (e.button === 0) mouseDown = false; }
    function onKeyDown(e: KeyboardEvent) { if (state !== 'playing') return; if (['KeyW','KeyA','KeyS','KeyD','Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)) e.preventDefault(); keys.add(e.code); if (e.code === 'KeyR' && !e.repeat) reload(); if (e.code === 'KeyQ' && !e.repeat) heal(); }
    function onKeyUp(e: KeyboardEvent) { keys.delete(e.code); }
    function onBlur() { keys.clear(); mouseDown = false; }
    function onResize() { if (!mount) return; renderer.setSize(mount.clientWidth, mount.clientHeight); camera.aspect = mount.clientWidth / mount.clientHeight; camera.updateProjectionMatrix(); }
    function onFullscreen() { setFullscreen(!!document.fullscreenElement); onResize(); }
    function fullscreenToggle() { if (document.fullscreenElement) void document.exitFullscreen(); else void document.documentElement.requestFullscreen().catch(() => setNotice('Trình duyệt không hỗ trợ toàn màn hình.')); }
    document.addEventListener('pointerlockchange', onLockChange); document.addEventListener('mousemove', onMouseMove); document.addEventListener('mousedown', onDown); document.addEventListener('mouseup', onUp);
    window.addEventListener('keydown', onKeyDown); window.addEventListener('keyup', onKeyUp); window.addEventListener('blur', onBlur); window.addEventListener('resize', onResize); document.addEventListener('fullscreenchange', onFullscreen);
    gameRef.current = { start, reload, fullscreen: fullscreenToggle, sound: on => { soundOn = on; } };

    function applySelf(self: OnlineSelf) {
      data = { ...data, health:self.health, ammo:self.ammo, medkits:self.medkits, kills:self.kills, shots:self.shots, hits:self.hits, time:self.time, reloading:self.reloading };
      if (Math.hypot(camera.position.x-self.x,camera.position.z-self.z)>1.5) { camera.position.x=self.x; camera.position.z=self.z; }
    }
    function applyNetwork() {
      const session=onlineRef.current; if (!onlineMode || !session) return;
      for (const msg of session.queue.splice(0)) {
        if (msg.type === 'joined') { session.joined=true; session.id=msg.id; camera.position.set(msg.x,1.7,msg.z); }
        else if (msg.type === 'snapshot' && session.joined) {
          applySelf(msg.self);
          for (const remote of msg.bots) { const bot=bots[remote.id]; if (!bot) continue; bot.group.position.set(remote.x,0,remote.z); bot.group.visible=remote.health>0; bot.dead=remote.health<=0; bot.health=remote.health; bot.group.rotation.z=0; bot.group.rotation.y=Math.atan2(camera.position.x-remote.x,camera.position.z-remote.z); bot.limbs.forEach((limb,i)=>{limb.rotation.x=Math.sin(performance.now()*.006+bot.phase+(i%2?Math.PI:0))*.22;}); }
          const seen=new Set<string>();
          for (const remote of msg.players) {
            if (remote.id===session.id) continue; seen.add(remote.id); let avatar=remotePlayers.get(remote.id);
            if (!avatar) { const group=new THREE.Group(); box(.8,.9,.42,friendly,0,1.37,0,group); box(.55,.5,.4,gunDark,0,2.08,0,group); for (const side of [-1,1]) { box(.24,.8,.25,gunDark,side*.55,1.32,0,group); box(.25,.85,.3,gunDark,side*.22,.48,0,group); } scene.add(group); avatar={group,x:remote.x,z:remote.z,yaw:remote.yaw}; group.position.set(remote.x,0,remote.z); remotePlayers.set(remote.id,avatar); }
            avatar.x=remote.x; avatar.z=remote.z; avatar.yaw=remote.yaw; avatar.group.visible=remote.health>0;
          }
          for (const id of remotePlayers.keys()) if (!seen.has(id)) removeRemote(id);
          publish();
        } else if (msg.type === 'hit') { flashHit(); const bot=bots[msg.bot]; if (bot) bot.hitFlash=.18; beep(650,.07,'sine',.025); }
        else if (msg.type === 'damage') { data.health=msg.health; flashHurt(); beep(90,.15,'sawtooth',.025); }
        else if (msg.type === 'defeated' && state !== 'gameover') { applySelf(msg.self); state='gameover'; setStatus('gameover'); saveScore(data); mouseDown=false; session.joined=false; if (document.pointerLockElement) document.exitPointerLock(); publish(); }
        else if (msg.type === 'error') { setNotice(msg.message); state='gameover'; setStatus('gameover'); if (document.pointerLockElement) document.exitPointerLock(); }
        else if (msg.type === 'disconnected' && (state === 'playing' || state === 'paused')) { state='gameover'; setStatus('gameover'); setNotice('Mất kết nối máy chủ. Hãy kết nối lại hoặc chọn chơi offline.'); mouseDown=false; saveScore(data); if (document.pointerLockElement) document.exitPointerLock(); publish(); }
      }
    }
    function animate() {
      if (disposed) return; frame = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), .05);
      applyNetwork();
      if (onlineMode) for (const bot of bots) { bot.hitFlash=Math.max(0,bot.hitFlash-dt); (bot.body.material as THREE.MeshStandardMaterial).emissive.set(bot.hitFlash>0?'#ff6644':'#000000'); }
      for (const avatar of remotePlayers.values()) { avatar.group.position.x=THREE.MathUtils.lerp(avatar.group.position.x,avatar.x,Math.min(1,dt*12)); avatar.group.position.z=THREE.MathUtils.lerp(avatar.group.position.z,avatar.z,Math.min(1,dt*12)); avatar.group.rotation.y=Math.atan2(-Math.sin(avatar.yaw),-Math.cos(avatar.yaw)); }
      for (let i = tracers.length - 1; i >= 0; i--) { tracers[i].life -= dt; (tracers[i].line.material as THREE.LineBasicMaterial).opacity = Math.max(0, tracers[i].life / .13); if (tracers[i].life <= 0) clearTracer(i); }
      if (state === 'playing') {
        elapsed += dt; data.time = elapsed;
        if (!onlineMode && data.reloading && elapsed >= reloadUntil) { data.ammo = 30; data.reloading = false; beep(450, .1, 'triangle'); publish(); }
        if (mouseDown) shoot(elapsed);
        const forward = Number(keys.has('KeyW') || keys.has('ArrowUp')) - Number(keys.has('KeyS') || keys.has('ArrowDown'));
        const strafe = Number(keys.has('KeyD') || keys.has('ArrowRight')) - Number(keys.has('KeyA') || keys.has('ArrowLeft'));
        const length = Math.hypot(forward, strafe) || 1; const speed = (keys.has('ShiftLeft') ? 8 : 5.2) * dt / length;
        const dx = (strafe * Math.cos(yaw) - forward * Math.sin(yaw)) * speed; const dz = (-forward * Math.cos(yaw) - strafe * Math.sin(yaw)) * speed;
        if ((!onlineMode || onlineRef.current?.joined) && !collides(camera.position.x + dx, camera.position.z)) camera.position.x += dx;
        if ((!onlineMode || onlineRef.current?.joined) && !collides(camera.position.x, camera.position.z + dz)) camera.position.z += dz;
        if (onlineMode && onlineRef.current?.joined && performance.now()-lastNetSend>100) { lastNetSend=performance.now(); sendOnline(onlineRef.current,{type:'move',x:camera.position.x,z:camera.position.z,yaw,pitch}); }
        recoil = Math.max(0, recoil - dt * 6); muzzle.intensity = Math.max(0, muzzle.intensity - dt * 65);
        weapon.position.y = -.42 - recoil * .08 + (forward || strafe ? Math.sin(elapsed * 10) * .012 : 0) - (data.reloading ? .12 : 0); weapon.position.z = -.83 + recoil * .12;
        weapon.rotation.z = THREE.MathUtils.lerp(weapon.rotation.z, data.reloading ? -.4 : strafe * -.035 - .02, dt * 6);
        weapon.rotation.x = THREE.MathUtils.lerp(weapon.rotation.x, data.reloading ? -.25 : -.02 + recoil * .08, dt * 6);
        innerRing.rotation.z += dt * .1;
        if (!onlineMode) bots.forEach((bot, i) => {
          if (state !== 'playing') return;
          if (bot.dead) {
            bot.group.rotation.z = Math.min(1.35, (elapsed - bot.deathAt) * 4); if (elapsed - bot.deathAt > .8) bot.group.visible = false;
            if (elapsed >= bot.cooldown) { const spots = [[-20,-20], [20,-18], [-20,10], [20,10], [0,-22], [-10,-20]]; const p = spots[i]; bot.group.position.set(p[0],0,p[1]); bot.health = 100; bot.dead = false; bot.group.visible = true; bot.group.rotation.z = 0; bot.cooldown = 2; }
            return;
          }
          bot.hitFlash = Math.max(0, bot.hitFlash - dt);
          (bot.body.material as THREE.MeshStandardMaterial).emissive.set(bot.hitFlash > 0 ? '#ff6644' : '#000000');
          bot.limbs.forEach((limb, limbIndex) => { limb.rotation.x = Math.sin(elapsed * 7 + bot.phase + (limbIndex % 2 ? Math.PI : 0)) * (distToPlayer(bot) > 9 ? .3 : .03); });
          direction.set(camera.position.x - bot.group.position.x, 0, camera.position.z - bot.group.position.z); const dist = direction.length(); direction.normalize();
          bot.group.rotation.y = Math.atan2(direction.x, direction.z);
          if (dist > 9) {
            const nx = bot.group.position.x + direction.x * bot.speed * (difficultyRef.current === 'easy' ? .7 : difficultyRef.current === 'hard' ? 1.45 : 1) * dt; const nz = bot.group.position.z + direction.z * bot.speed * (difficultyRef.current === 'easy' ? .7 : difficultyRef.current === 'hard' ? 1.45 : 1) * dt;
            if (!collides(nx, bot.group.position.z, .6)) bot.group.position.x = nx;
            if (!collides(bot.group.position.x, nz, .6)) bot.group.position.z = nz;
          } else { bot.group.position.x += Math.cos(elapsed + bot.phase) * dt * .3; }
          bot.cooldown -= dt;
          if (dist < 22 && bot.cooldown <= 0) {
            bot.cooldown = (2.3 + Math.random() * 1.6) * (difficultyRef.current === 'easy' ? 1.4 : difficultyRef.current === 'hard' ? .7 : 1);
            const from = bot.group.position.clone().add(new THREE.Vector3(0,1.5,0)); const to = camera.position.clone().sub(from); const distance = to.length();
            raycaster.set(from, to.normalize());
            const blocked = raycaster.intersectObjects(scene.children.filter(o => o instanceof THREE.Mesh), false).some(h => h.distance < distance - .3);
            if (!blocked) { tracer(from, camera.position.clone(), '#ff956c'); data.health = Math.max(0, data.health - (difficultyRef.current === 'easy' ? 5 : difficultyRef.current === 'hard' ? 12 : 8)); flashHurt(); beep(90, .15, 'sawtooth', .025); publish(); }
            if (data.health <= 0) { state = 'gameover'; setStatus('gameover'); saveScore(data); mouseDown = false; if (document.pointerLockElement) document.exitPointerLock(); publish(); }
          }
        });
        if (elapsed - lastUi > .2) { lastUi = elapsed; publish(); }
      } else if (state === 'ready') { camera.rotation.y = Math.sin(performance.now() * .00015) * .06; }
      renderer.render(scene, camera);
    }
    animate();
    return () => {
      disposed = true; cancelAnimationFrame(frame); gameRef.current = null;
      document.removeEventListener('pointerlockchange', onLockChange); document.removeEventListener('mousemove', onMouseMove); document.removeEventListener('mousedown', onDown); document.removeEventListener('mouseup', onUp);
      window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('blur', onBlur); window.removeEventListener('resize', onResize); document.removeEventListener('fullscreenchange', onFullscreen);
      if (document.pointerLockElement === renderer.domElement) document.exitPointerLock();
      scene.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); const materials = Array.isArray(o.material) ? o.material : [o.material]; materials.forEach(m => m.dispose()); } });
      friendly.dispose();
      while (tracers.length) clearTracer(0);
      onlineRef.current?.socket.close(); onlineRef.current = null;
      renderer.dispose(); renderer.domElement.remove(); if (audio) void audio.close();
      if (hitTimer.current) clearTimeout(hitTimer.current); if (hurtTimer.current) clearTimeout(hurtTimer.current);
    };
  }, [flashHit, flashHurt, saveScore]);

  useEffect(() => { if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') void navigator.serviceWorker.register(new URL('./sw.js', document.baseURI).href); }, []);
  const accuracy = stats.shots ? Math.round(stats.hits / stats.shots * 100) : 0;
  return <main className="app-shell">
    <div className="game-canvas" ref={mountRef} />
    <div className="vignette" />
    <div className={`damage ${hurt ? 'show' : ''}`} />
    <header className="topbar">
      <div className="brand"><div className="brand-mark"><Crosshair size={21}/></div><div><div className="brand-name">AIM<span>FORGE</span><i>®</i></div><div className="brand-sub">TACTICAL TRAINING SYSTEM</div></div></div>
      <div className="top-center"><span className="status-dot"/> HỆ THỐNG SẴN SÀNG <span className="top-divider"/> {onlineConnected ? `ONLINE / ${onlineConfig?.room}` : 'CHẾ ĐỘ NGOẠI TUYẾN'}</div>
      <div className="top-actions"><button title={muted ? 'Bật âm thanh' : 'Tắt âm thanh'} onClick={() => { setMuted(!muted); gameRef.current?.sound(muted); }}>{muted ? <VolumeX size={17}/> : <Volume2 size={17}/>}</button><button title={fullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'} onClick={() => gameRef.current?.fullscreen()}><Expand size={17}/></button><div className="profile"><span>01</span><div><b>ĐẶC VỤ</b><small>NGƯỜI CHƠI</small></div></div></div>
    </header>

    <div className="side-label left-label"><span>AF / TRAINING GROUNDS</span><i/> <span>SECTOR 07</span></div>
    <div className="side-label right-label"><span>SIMULATION ENVIRONMENT</span><i/> <span>V.01</span></div>

    {status === 'playing' && <>
      <div className="play-top"><div><span className="live-dot"/> ĐANG HUẤN LUYỆN <small> / {onlineConnected ? `CO-OP ${onlineConfig?.room}` : 'ĐẤU VỚI BOT'}</small></div><strong>{formatTime(stats.time)}</strong></div>
      <div className={`crosshair ${hit ? 'hit' : ''}`}><span/><span/><span/><span/><i/></div>
      <div className="playing-hud"><div className="hud-health"><div className="hud-label"><Shield size={14}/> SINH LỰC</div><div className="hud-value">{stats.health}<small> / 100</small></div><div className="health-track"><i style={{width: `${stats.health}%`}}/></div></div><div className="hud-score"><div><span className="med-icon">✚</span> [Q] HỒI MÁU <strong>{stats.medkits}</strong></div><div><Target size={14}/> HẠ GỤC <strong>{String(stats.kills).padStart(2,'0')}</strong></div><div><Gauge size={14}/> CHÍNH XÁC <strong>{accuracy}%</strong></div></div><div className="hud-ammo"><div className="hud-label">AEGIS-IX <span> / ĐẠN DƯỢC</span></div><div className="hud-value">{String(stats.ammo).padStart(2,'0')}<small> / ∞</small></div><div className="ammo-caption">{stats.reloading ? 'ĐANG NẠP ĐẠN...' : '[ R ] NẠP ĐẠN'}</div></div></div>
    </>}

    {status !== 'playing' && <div className="overlay">
      <div className="intro">
        <div className="eyebrow"><span className="eyebrow-line"/> PHÒNG HUẤN LUYỆN CHIẾN THUẬT <span className="eyebrow-number"> / 01</span></div>
        <h1>{status === 'gameover' ? <>NHIỆM VỤ<br/><em>KẾT THÚC.</em></> : status === 'paused' ? <>TẠM<br/><em>DỪNG.</em></> : <>SẴN SÀNG<br/><em>CHIẾN ĐẤU.</em></>}</h1>
        <p>{status === 'gameover' ? `Bạn đã hạ ${stats.kills} bot trong ${formatTime(stats.time)}. Hãy quay lại và phá kỷ lục của mình.` : status === 'paused' ? onlineConnected ? 'Trận online vẫn tiếp diễn khi bạn nhả chuột. Quay lại để tiếp tục.' : 'Mô phỏng đang tạm dừng. Tiếp tục khi bạn đã sẵn sàng.' : 'Rèn luyện phản xạ, làm chủ tâm ngắm. Bước vào đấu trường và đối đầu với các mục tiêu AI.'}</p>
        <div className="mode-card"><div className="mode-icon"><Crosshair size={22}/></div><div className="mode-copy"><small>CHẾ ĐỘ ĐÃ CHỌN</small><b>{onlineConnected ? `CO-OP / ${onlineConfig?.room}` : 'ĐẤU VỚI BOT'}</b><span>{onlineConnected ? 'Cùng đồng đội chiến đấu với bot · Online' : 'Góc nhìn thứ nhất · Không giới hạn thời gian'}</span></div><span className="mode-check">✓</span></div>
        {!onlineConnected && <div className="difficulty-selector"><span>ĐỘ KHÓ</span>{([['easy', 'DỄ'], ['normal', 'THƯỜNG'], ['hard', 'KHÓ']] as const).map(([value, label]) => <button key={value} disabled={status === 'paused'} className={difficulty === value ? 'selected' : ''} onClick={() => { difficultyRef.current = value; setDifficulty(value); }}>{label}</button>)}</div>}
        <div className="actions"><button className="start-button" onClick={() => gameRef.current?.start()} disabled={webglError}><span>{status === 'paused' ? 'TIẾP TỤC' : status === 'gameover' ? 'CHƠI LẠI' : 'BẮT ĐẦU HUẤN LUYỆN'}</span><span className="arrow">↗</span></button><button className="fullscreen-button" onClick={() => gameRef.current?.fullscreen()} title="Bật / tắt toàn màn hình"><Maximize size={18}/></button></div>
        <div className="intro-bottom"><div className="offline-note"><span/> CHƠI NGAY · KHÔNG CẦN ĐĂNG NHẬP</div>{status !== 'paused' && <button className="score-open" onClick={() => setOnlineOpen(true)}><Users size={14}/> PHÒNG ONLINE ↗</button>}<button className="score-open" onClick={() => setScoresOpen(true)}><Trophy size={14}/> THÀNH TÍCH ↗</button></div>
        {notice && <div className="notice">{notice}</div>}{webglError && <div className="notice">Không thể khởi tạo WebGL. Hãy bật tăng tốc phần cứng hoặc thử trình duyệt khác.</div>}
      </div>
      <div className="environment-tag"><span className="tag-cross">✳</span><div><small>ĐỊA ĐIỂM HUẤN LUYỆN</small><b>THE PROVING GROUND</b><span>SECTOR 07 — MÔ PHỎNG CHIẾN ĐẤU</span></div></div>
      <div className="coordinates">35° 41&apos; 22.8&quot; N<br/>139° 41&apos; 30.1&quot; E</div>
    </div>}
    {onlineOpen && <OnlinePanel connected={onlineConnected} config={onlineConfig} onConnect={connectOnline} onDisconnect={disconnectOnline} onClose={() => setOnlineOpen(false)}/>}
    {scoresOpen && <ScorePanel latest={status === 'gameover' ? latestScore : null} onlineConfig={onlineConfig} onClose={() => setScoresOpen(false)}/>}
    <footer className="bottom-bar"><div className="controls"><div><Keyboard size={17}/><span><b>W A S D</b><small>DI CHUYỂN</small></span></div><div><MousePointer2 size={16}/><span><b>CHUỘT</b><small>NGẮM & BẮN</small></span></div><div><span className="key-icon">R</span><span><b>PHÍM R</b><small>NẠP ĐẠN</small></span></div><div><span className="key-icon">ESC</span><span><b>ESC</b><small>TẠM DỪNG</small></span></div></div><div className="bottom-right"><Headphones size={16}/><span>ĐEO TAI NGHE ĐỂ CÓ TRẢI NGHIỆM TỐT NHẤT</span><i/> <b><Zap size={13}/> AIMFORGE ENGINE</b></div></footer>
    <div className="mobile-warning"><Activity size={20}/><b>CẦN BÀN PHÍM & CHUỘT</b><span>Vui lòng mở trò chơi trên máy tính để trải nghiệm đầy đủ.</span></div>
  </main>;
}
