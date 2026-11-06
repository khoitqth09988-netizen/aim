import { mkdir, readFile, writeFile, rename } from 'node:fs/promises';
import path from 'node:path';
import { isScore, sortScores, type Score } from '@/lib/scores';

// Local single-process storage for a self-hosted server; GitHub Pages uses localStorage instead.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const directory = path.join(process.cwd(), '.data');
const file = path.join(directory, 'scores.json');
let pending = Promise.resolve();
async function load(): Promise<Score[]> {
  try { const value: unknown = JSON.parse(await readFile(file, 'utf8')); return Array.isArray(value) ? value.filter(isScore) : []; }
  catch (error) { if ((error as NodeJS.ErrnoException).code === 'ENOENT') return []; throw error; }
}
export async function GET(request: Request) {
  try { await pending; const scores = await load(); const recent = new URL(request.url).searchParams.get('sort') === 'recent'; return Response.json((recent ? scores.sort((a,b) => Date.parse(b.date)-Date.parse(a.date)) : sortScores(scores)).slice(0, 50), { headers: { 'Cache-Control': 'no-store' } }); }
  catch { return Response.json({ error: 'Không thể đọc bảng điểm.' }, { status: 500 }); }
}
export async function POST(request: Request) {
  // Reject oversized or malformed input before storing anything.
  if (Number(request.headers.get('content-length') || 0) > 4096) return Response.json({ error: 'Dữ liệu quá lớn.' }, { status: 413 });
  let body: unknown;
  try {
    const reader = request.body?.getReader();
    const decoder = new TextDecoder();
    let text = ''; let bytes = 0;
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > 4096) { await reader.cancel(); return Response.json({ error: 'Dữ liệu quá lớn.' }, { status: 413 }); }
        text += decoder.decode(value, { stream: true });
      }
      text += decoder.decode();
    }
    body = JSON.parse(text);
  }
  catch { return Response.json({ error: 'Dữ liệu không hợp lệ.' }, { status: 400 }); }
  if (!isScore(body)) return Response.json({ error: 'Điểm không hợp lệ.' }, { status: 400 });
  const score: Score = { name: body.name.trim().slice(0, 16), kills: body.kills, shots: body.shots, hits: body.hits, time: body.time, difficulty: body.difficulty, date: body.date };
  if (!score.name) return Response.json({ error: 'Tên không hợp lệ.' }, { status: 400 });
  const save = pending.then(async () => {
    const scores = [...(await load()), score].slice(-100);
    await mkdir(directory, { recursive: true });
    const temp = `${file}.tmp`;
    await writeFile(temp, JSON.stringify(scores), 'utf8');
    await rename(temp, file);
  });
  pending = save.catch(() => {});
  try { await save; return Response.json({ ok: true }, { status: 201 }); }
  catch { return Response.json({ error: 'Không thể lưu điểm.' }, { status: 500 }); }
}
