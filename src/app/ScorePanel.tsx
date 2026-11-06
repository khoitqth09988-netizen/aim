'use client';
import { useState } from 'react';
import { X, Trophy, Cloud, HardDrive } from 'lucide-react';
import { readLocalScores, sortScores, type Score } from '@/lib/scores';

const staticPages = process.env.NEXT_PUBLIC_STATIC_PAGES === 'true';
const labels = { easy: 'DỄ', normal: 'THƯỜNG', hard: 'KHÓ' };
export default function ScorePanel({ latest, onClose }: { latest: Score | null; onClose: () => void }) {
  const [scores, setScores] = useState<Score[]>(() => sortScores(readLocalScores()));
  const [tab, setTab] = useState<'local' | 'server'>('local');
  const [name, setName] = useState('ĐẶC VỤ');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  async function showServer() {
    setTab('server'); setMessage(''); setBusy(true); setScores([]);
    try { const response = await fetch('/api/scores', { cache: 'no-store' }); if (!response.ok) throw new Error(); const data = await response.json(); if (!Array.isArray(data)) throw new Error(); setScores(data); }
    catch { setMessage('Không kết nối được máy chủ. Điểm trên máy vẫn được giữ lại.'); }
    finally { setBusy(false); }
  }
  async function submit() {
    if (!latest || !name.trim()) { setMessage('Hãy nhập tên của bạn.'); return; }
    setBusy(true); setMessage('');
    try {
      const response = await fetch('/api/scores', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...latest, name: name.trim() }) });
      if (!response.ok) throw new Error();
      setSubmitted(true); await showServer(); setMessage('Đã gửi điểm lên máy chủ.');
    } catch { setMessage('Không thể gửi điểm. Hãy thử lại khi có kết nối.'); }
    finally { setBusy(false); }
  }
  return <div className="scores-backdrop" onClick={onClose}><section className="scores-panel" role="dialog" aria-modal="true" aria-label="Bảng thành tích" onClick={event => event.stopPropagation()}>
    <div className="scores-heading"><div><span className="panel-eyebrow">HỒ SƠ CHIẾN ĐẤU / 01</span><h2><Trophy size={22}/> BẢNG THÀNH TÍCH</h2></div><button className="close-panel" onClick={onClose} aria-label="Đóng"><X size={20}/></button></div>
    <p>Thành tích được lưu trên thiết bị. {staticPages ? 'Bản GitHub Pages chơi hoàn toàn ngoại tuyến.' : 'Có thể tự gửi kết quả lên máy chủ.'}</p>
    <div className="score-tabs"><button className={tab === 'local' ? 'active' : ''} onClick={() => { setTab('local'); setScores(sortScores(readLocalScores())); setMessage(''); }}><HardDrive size={15}/> THIẾT BỊ</button>{!staticPages && <button className={tab === 'server' ? 'active' : ''} onClick={() => void showServer()}><Cloud size={15}/> MÁY CHỦ</button>}</div>
    <div className="score-table"><div className="score-row score-header"><span>#</span><span>ĐẶC VỤ</span><span>ĐỘ KHÓ</span><span>CHÍNH XÁC</span><span>HẠ GỤC</span></div>
      {scores.length === 0 ? <div className="score-empty">{busy ? 'ĐANG TẢI...' : 'CHƯA CÓ THÀNH TÍCH NÀO'}</div> : scores.slice(0, 10).map((score, i) => <div className="score-row" key={`${score.date}-${i}`}><span>{String(i + 1).padStart(2, '0')}</span><span>{score.name}</span><span>{labels[score.difficulty]}</span><span>{score.shots ? Math.round(score.hits / score.shots * 100) : 0}%</span><strong>{score.kills}</strong></div>)}
    </div>
    {!staticPages && latest && <div className="score-submit"><label htmlFor="agent-name">GỬI LƯỢT VỪA CHƠI LÊN MÁY CHỦ</label><div><input id="agent-name" maxLength={16} value={name} onChange={event => setName(event.target.value)} placeholder="Tên đặc vụ"/><button disabled={busy || submitted} onClick={() => void submit()}>{submitted ? 'ĐÃ GỬI' : 'GỬI ĐIỂM ↗'}</button></div><small>Điểm do người chơi gửi, không được xác minh chống gian lận.</small></div>}
    {message && <div className="score-message">{message}</div>}
  </section></div>;
}
