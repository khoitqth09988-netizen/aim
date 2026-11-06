export type Difficulty = 'easy' | 'normal' | 'hard';
export type Score = { name: string; kills: number; shots: number; hits: number; time: number; difficulty: Difficulty; date: string };
export const SCORE_KEY = 'aimforge-scores-v1';

export function readLocalScores(): Score[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(SCORE_KEY) || '[]');
    return Array.isArray(value) ? value.filter(isScore).slice(0, 20) : [];
  } catch { return []; }
}
export function isScore(value: unknown): value is Score {
  if (!value || typeof value !== 'object') return false;
  const score = value as Record<string, unknown>;
  return typeof score.name === 'string' && score.name.length >= 1 && score.name.length <= 16 &&
    ['easy', 'normal', 'hard'].includes(String(score.difficulty)) && typeof score.date === 'string' && !Number.isNaN(Date.parse(score.date)) &&
    Number.isInteger(score.kills) && Number(score.kills) >= 0 && Number(score.kills) <= 10000 &&
    Number.isInteger(score.shots) && Number(score.shots) >= 0 && Number(score.shots) <= 100000 &&
    Number.isInteger(score.hits) && Number(score.hits) >= 0 && Number(score.hits) <= Number(score.shots) && Number(score.kills) * 3 <= Number(score.hits) &&
    typeof score.time === 'number' && Number.isFinite(score.time) && score.time >= 0 && score.time <= 86400 && Number(score.shots) <= (score.time + 1) * 8;
}
export function sortScores(scores: Score[]) { return [...scores].sort((a, b) => b.kills - a.kills || b.hits / Math.max(1, b.shots) - a.hits / Math.max(1, a.shots) || a.time - b.time); }
