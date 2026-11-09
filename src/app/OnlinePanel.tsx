'use client';
import { useState } from 'react';
import { X, Users } from 'lucide-react';
import { normalizeServer, type OnlineConfig } from '@/lib/online';

const staticPages = process.env.NEXT_PUBLIC_STATIC_PAGES === 'true';
const configuredServer = process.env.NEXT_PUBLIC_ONLINE_SERVER || '';
function defaults(config: OnlineConfig | null) {
  const query = new URLSearchParams(window.location.search);
  return {
    url: config?.url || query.get('server') || configuredServer || (staticPages ? '' : window.location.origin),
    room: config?.room || query.get('room') || 'ARENA',
    name: config?.name || 'ĐẶC VỤ',
  };
}
export default function OnlinePanel({ connected, config, onConnect, onDisconnect, onClose }: { connected: boolean; config: OnlineConfig | null; onConnect: (config: OnlineConfig) => Promise<void>; onDisconnect: () => void; onClose: () => void }) {
  const [initial] = useState(() => defaults(config));
  const [url, setUrl] = useState(initial.url);
  const [name, setName] = useState(initial.name);
  const [room, setRoom] = useState(initial.room);
  const [busy, setBusy] = useState(false); const [error, setError] = useState(''); const [copied, setCopied] = useState(false);
  async function connect() {
    try {
      if (!url.trim()) throw new Error('Hãy nhập địa chỉ máy chủ online. GitHub Pages không tự chạy máy chủ.');
      let address: string;
      try { address = normalizeServer(url); } catch (e) { if (e instanceof Error && e.message.includes('WSS')) throw e; throw new Error('Địa chỉ không hợp lệ. Nhập địa chỉ đầy đủ bắt đầu bằng https:// hoặc wss://.'); }
      const cleanRoom = room.trim().toUpperCase(); const cleanName = name.trim();
      if (!cleanName || !/^[A-Z0-9_-]{1,16}$/.test(cleanRoom)) throw new Error('Nhập tên và mã phòng (A–Z, 0–9, _ hoặc -, tối đa 16 ký tự).');
      setError(''); setBusy(true); await onConnect({ url: address, name: cleanName, room: cleanRoom }); onClose();
    } catch (e) { setError(e instanceof Error ? e.message : 'Không thể kết nối máy chủ.'); }
    finally { setBusy(false); }
  }
  function invitation() {
    const link = new URL(window.location.href); link.search = ''; link.hash = '';
    if (config) { link.searchParams.set('server', config.url); link.searchParams.set('room', config.room); }
    return link.toString();
  }
  return <div className="scores-backdrop" onClick={onClose}><section className="scores-panel online-panel" role="dialog" aria-modal="true" aria-label="Phòng trực tuyến" onClick={e => e.stopPropagation()}>
    <div className="scores-heading"><div><span className="panel-eyebrow">CO-OP / TỐI ĐA 8 NGƯỜI</span><h2><Users size={22}/> PHÒNG TRỰC TUYẾN</h2></div><button className="close-panel" onClick={onClose} aria-label="Đóng"><X size={20}/></button></div>
    <p>Cùng người chơi trong phòng tiêu diệt bot chung. Không cần tài khoản. Bạn bè cần cùng máy chủ và mã phòng.</p>
    {connected ? <><div className="online-connected"><span className="status-dot"/> ĐÃ KẾT NỐI MÁY CHỦ · PHÒNG {config?.room}</div><p>Nhấn đóng rồi bắt đầu để vào trận. Trận trực tuyến vẫn diễn ra khi nhấn Esc.</p><label>LINK MỜI BẠN BÈ<input readOnly value={invitation()} onFocus={e=>e.currentTarget.select()}/></label><button className="online-action" onClick={() => { if (!navigator.clipboard) { setError('Không thể sao chép tự động. Hãy chọn và sao chép link bên trên.'); return; } void navigator.clipboard.writeText(invitation()).then(() => setCopied(true)).catch(() => setError('Không thể sao chép tự động. Hãy chọn và sao chép link bên trên.')); }}>{copied ? 'ĐÃ SAO CHÉP' : 'SAO CHÉP LINK MỜI'}</button>{error && <div className="score-message error">{error}</div>}<button className="online-action secondary" onClick={() => { onDisconnect(); onClose(); }}>NGẮT KẾT NỐI / CHƠI OFFLINE</button></> : <>
      <label>ĐỊA CHỈ MÁY CHỦ<input value={url} onChange={e=>setUrl(e.target.value)} placeholder="wss://ten-may-chu-cua-ban" autoComplete="url"/></label>
      <label>TÊN ĐẶC VỤ<input value={name} onChange={e=>setName(e.target.value)} maxLength={16}/></label>
      <label>MÃ PHÒNG<input value={room} onChange={e=>setRoom(e.target.value.toUpperCase())} maxLength={16}/></label>
      <p className="online-hint">{staticPages ? 'GitHub Pages chỉ chứa game tĩnh: cần máy chủ online riêng có WSS/TLS. Điền địa chỉ máy chủ đó ở trên.' : 'Mặc định dùng máy chủ của trang này. Bạn cũng có thể nhập máy chủ khác; trang HTTPS yêu cầu WSS/TLS.'}</p>
      {error && <div className="score-message error" role="alert">{error}</div>}
      <button className="online-action" disabled={busy} onClick={() => void connect()}>{busy ? 'ĐANG KẾT NỐI...' : 'KẾT NỐI MÁY CHỦ ↗'}</button>
    </>}
  </section></div>;
}
