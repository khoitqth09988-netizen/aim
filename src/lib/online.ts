export type OnlineConfig = { url: string; room: string; name: string };
export type RemotePlayer = { id: string; name: string; x: number; z: number; yaw: number; health: number };
export type RemoteBot = { id: number; x: number; z: number; health: number };
export type OnlineSelf = { x: number; z: number; health: number; ammo: number; medkits: number; kills: number; shots: number; hits: number; time: number; reloading: boolean };
export type OnlineMessage =
  | { type: 'joined'; id: string; x: number; z: number; room: string }
  | { type: 'snapshot'; bots: RemoteBot[]; players: RemotePlayer[]; self: OnlineSelf }
  | { type: 'hit'; bot: number; killed: boolean }
  | { type: 'damage'; health: number }
  | { type: 'defeated'; self: OnlineSelf }
  | { type: 'error'; message: string }
  | { type: 'disconnected' };
export type OnlineSession = { socket: WebSocket; config: OnlineConfig; id: string; joined: boolean; queue: OnlineMessage[] };
export function normalizeServer(input: string) {
  const url = new URL(input.trim());
  if (url.protocol === 'https:') url.protocol = 'wss:';
  if (url.protocol === 'http:') url.protocol = 'ws:';
  if (!['ws:', 'wss:'].includes(url.protocol) || url.username || url.password || url.search || url.hash || (url.pathname !== '/' && url.pathname !== '/multiplayer')) throw new Error('Địa chỉ máy chủ không hợp lệ.');
  if (typeof window !== 'undefined' && window.location.protocol === 'https:' && url.protocol !== 'wss:') throw new Error('Trang HTTPS cần máy chủ có WSS (TLS).');
  url.pathname = '/multiplayer'; return url.toString();
}
export function scoreServer(url: string) { const parsed = new URL(url); parsed.protocol = parsed.protocol === 'wss:' ? 'https:' : 'http:'; parsed.pathname = '/api/online-scores'; return parsed.toString(); }
export function sendOnline(session: OnlineSession | null, message: object) { if (session?.socket.readyState === WebSocket.OPEN) session.socket.send(JSON.stringify(message)); }
