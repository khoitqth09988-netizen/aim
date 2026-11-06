'use client';
import { useState } from 'react';
import { X, Users } from 'lucide-react';
import { normalizeServer, type OnlineConfig } from '@/lib/online';

export default function OnlinePanel({ connected, config, onConnect, onDisconnect, onClose }: { connected: boolean; config: OnlineConfig | null; onConnect: (config: OnlineConfig) => Promise<void>; onDisconnect: () => void; onClose: () => void }) {
  const [url, setUrl] = useState(config?.url || '');
  const [name, setName] = useState(config?.name || 'ĐẶC VỤ');
  const [room, setRoom] = useState(config?.room || 'ARENA');
  const [busy, setBusy] = useState(false); const [error, setError] = useState('');
  async function connect() {
    try {
      const address = normalizeServer(url); const cleanRoom = room.trim().toUpperCase(); const cleanName = name.trim();
      if (!cleanName || !/^[A-Z0-9_-]{1,16}$/.test(cleanRoom)) throw new Error('Nhập tên và mã phòng (A–Z, 0–9, _ hoặc -, tối đa 16 ký tự).');
      setError(''); setBusy(true); await onConnect({ url: address, name: cleanName, room: cleanRoom }); onClose();
    } catch (e) { setError(e instanceof Error ? e.message : 'Không thể kết nối máy chủ.'); }
    finally { setBusy(false); }
  }
  return <div className="scores-backdrop" onClick={onClose}><section className="scores-panel online-panel" role="dialog" aria-modal="true" aria-label="Phòng trực tuyến" onClick={e => e.stopPropagation()}>
    <div className="scores-heading"><div><span className="panel-eyebrow">CO-OP / TỐI ĐA 8 NGƯỜI</span><h2><Users size={22}/> PHÒNG TRỰC TUYẾN</h2></div><button className="close-panel" onClick={onClose} aria-label="Đóng"><X size={20}/></button></div>
    <p>Cùng người chơi trong phòng tiêu diệt bot chung. Không cần tài khoản. Bạn bè cần nhập cùng địa chỉ máy chủ và mã phòng.</p>
    {connected ? <><div className="online-connected"><span className="status-dot"/> ĐÃ KẾT NỐI · PHÒNG {config?.room}</div><p>Nhấn đóng rồi bắt đầu để vào trận. Trận trực tuyến vẫn diễn ra khi nhấn Esc.</p><button className="online-action secondary" onClick={() => { onDisconnect(); onClose(); }}>NGẮT KẾT NỐI / CHƠI OFFLINE</button></> : <>
      <label>ĐỊA CHỈ MÁY CHỦ<input value={url} onChange={e=>setUrl(e.target.value)} placeholder="wss://ten-may-chu-cua-ban" autoComplete="url"/></label>
      <label>TÊN ĐẶC VỤ<input value={name} onChange={e=>setName(e.target.value)} maxLength={16}/></label>
      <label>MÃ PHÒNG<input value={room} onChange={e=>setRoom(e.target.value.toUpperCase())} maxLength={16}/></label>
      <p className="online-hint">Máy chủ cần chạy riêng. Trang HTTPS như GitHub Pages yêu cầu máy chủ WSS có chứng chỉ TLS.</p>
      {error && <div className="score-message error">{error}</div>}
      <button className="online-action" disabled={busy} onClick={() => void connect()}>{busy ? 'ĐANG KẾT NỐI...' : 'KẾT NỐI PHÒNG ↗'}</button>
    </>}
  </section></div>;
}
