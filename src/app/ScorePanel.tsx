'use client';
import { useRef, useState } from 'react';
import { X, Trophy, Cloud, HardDrive, Users } from 'lucide-react';
import { readLocalScores, sortScores, type Score } from '@/lib/scores';
import { scoreServer, type OnlineConfig } from '@/lib/online';

const staticPages = process.env.NEXT_PUBLIC_STATIC_PAGES === 'true';
const labels = { easy: 'DỄ', normal: 'THƯỜNG', hard: 'KHÓ' };
type OnlineScore = { name: string; room: string; kills: number; shots: number; hits: number; time: number; date: string };
type Entry = Score | OnlineScore;
type Tab = 'local' | 'server' | 'online';
type Order = 'top' | 'recent';
function ordered(scores: Score[], order: Order) { return order === 'top' ? sortScores(scores) : [...scores].sort((a,b) => Date.parse(b.date)-Date.parse(a.date)); }
export default function ScorePanel({ latest, onlineConfig, onClose }: { latest: Score | null; onlineConfig: OnlineConfig | null; onClose: () => void }) {
  const [scores, setScores] = useState<Entry[]>(() => ordered(readLocalScores(), 'top'));
  const [tab, setTab] = useState<Tab>('local'); const [order, setOrder] = useState<Order>('top');
  const [name, setName] = useState('ĐẶC VỤ'); const [onlyMine, setOnlyMine] = useState(false);
  const [message, setMessage] = useState(''); const [busy, setBusy] = useState(false); const [submitted, setSubmitted] = useState(false);
  const sequence = useRef(0);
  async function load(nextTab: Tab, nextOrder: Order, mine = onlyMine) {
    const request = ++sequence.current; setTab(nextTab); setOrder(nextOrder); setMessage('');
    if (nextTab === 'local') { setBusy(false); setScores(ordered(readLocalScores(), nextOrder)); return; }
    setBusy(true); setScores([]);
    try {
      const url = nextTab === 'online' && onlineConfig ? new URL(scoreServer(onlineConfig.url)) : new URL('/api/scores', window.location.origin);
      url.searchParams.set('sort', nextOrder);
      if (nextTab === 'online' && mine && onlineConfig) url.searchParams.set('name', onlineConfig.name);
      const response = await fetch(url, { cache: 'no-store' }); if (!response.ok) throw new Error(); const result: unknown = await response.json(); if (!Array.isArray(result)) throw new Error();
      if (request === sequence.current) setScores(result as Entry[]);
    } catch { if (request === sequence.current) setMessage('Không kết nối được máy chủ. Lịch sử trên thiết bị vẫn được giữ lại.'); }
    finally { if (request === sequence.current) setBusy(false); }
  }
  async function submit() {
    if (!latest || !name.trim()) { setMessage('Hãy nhập tên của bạn.'); return; }
    setBusy(true); setMessage('');
    try {
      const response = await fetch('/api/scores', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...latest, name: name.trim() }) });
      if (!response.ok) throw new Error(); setSubmitted(true); await load('server', order); setMessage('Đã gửi điểm lên máy chủ.');
    } catch { setMessage('Không thể gửi điểm. Hãy thử lại khi có kết nối.'); }
    finally { setBusy(false); }
  }
  return <div className="scores-backdrop" onClick={onClose}><section className="scores-panel" role="dialog" aria-modal="true" aria-label="Bảng thành tích" onClick={event => event.stopPropagation()}>
    <div className="scores-heading"><div><span className="panel-eyebrow">HỒ SƠ CHIẾN ĐẤU / 01</span><h2><Trophy size={22}/> BẢNG THÀNH TÍCH</h2></div><button className="close-panel" onClick={onClose} aria-label="Đóng"><X size={20}/></button></div>
    <p>Thành tích offline lưu trên thiết bị. Lượt co-op được máy chủ lưu khi kết thúc hoặc rời phòng.</p>
    <div className="score-tabs"><button className={tab === 'local' ? 'active' : ''} onClick={() => void load('local', order)}><HardDrive size={15}/> THIẾT BỊ</button>{!staticPages && <button className={tab === 'server' ? 'active' : ''} onClick={() => void load('server', order)}><Cloud size={15}/> MÁY CHỦ</button>}{onlineConfig && <button className={tab === 'online' ? 'active' : ''} onClick={() => void load('online', order)}><Users size={15}/> CO-OP</button>}</div>
    <div className="score-filters"><button className={order==='top'?'active':''} onClick={() => void load(tab,'top')}>XẾP HẠNG</button><button className={order==='recent'?'active':''} onClick={() => void load(tab,'recent')}>LỊCH SỬ GẦN ĐÂY</button>{tab === 'online' && <label><input type="checkbox" checked={onlyMine} onChange={e=>{setOnlyMine(e.target.checked); void load(tab,order,e.target.checked);}}/> CHỈ TÊN CỦA TÔI</label>}</div>
    <div className="score-table"><div className="score-row score-header"><span>#</span><span>ĐẶC VỤ</span><span>{tab === 'online' ? 'PHÒNG' : 'ĐỘ KHÓ'}</span><span>CHÍNH XÁC</span><span>HẠ GỤC</span></div>
      {scores.length === 0 ? <div className="score-empty">{busy ? 'ĐANG TẢI...' : 'CHƯA CÓ THÀNH TÍCH NÀO'}</div> : scores.slice(0, 20).map((score, i) => <div className="score-row" key={`${score.date}-${i}`} title={new Date(score.date).toLocaleString('vi-VN')}><span>{String(i + 1).padStart(2, '0')}</span><span>{score.name}{order === 'recent' && <small className="score-date">{new Date(score.date).toLocaleString('vi-VN')} · {Math.floor(score.time / 60)}:{String(Math.floor(score.time % 60)).padStart(2, '0')}</small>}</span><span>{'room' in score ? score.room : labels[score.difficulty]}</span><span>{score.shots ? Math.round(score.hits / score.shots * 100) : 0}%</span><strong>{score.kills}</strong></div>)}
    </div>
    {!staticPages && latest && <div className="score-submit"><label htmlFor="agent-name">GỬI LƯỢT VỪA CHƠI LÊN MÁY CHỦ NEXT.JS</label><div><input id="agent-name" maxLength={16} value={name} onChange={event => setName(event.target.value)} placeholder="Tên đặc vụ"/><button disabled={busy || submitted} onClick={() => void submit()}>{submitted ? 'ĐÃ GỬI' : 'GỬI ĐIỂM ↗'}</button></div><small>Điểm gửi thủ công không được xác minh chống gian lận.</small></div>}
    {message && <div className="score-message">{message}</div>}
  </section></div>;
}
