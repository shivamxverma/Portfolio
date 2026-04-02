import fs from 'fs/promises';
import path from 'path';
import { Redis } from '@upstash/redis';

const DATA_PATH = path.join(process.cwd(), 'data', 'resume.json');
const REDIS_KEY = 'portfolio:resume:url';

const DEFAULT_URL =
  'https://drive.google.com/drive/folders/12LEzkK2j_0fj42Up8phtYt2qxnKp7ceN';

function getRedis() {
  // Vercel Upstash integration uses KV_*; Upstash dashboard uses UPSTASH_REDIS_*.
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export function isValidResumeUrl(value) {
  if (typeof value !== 'string' || value.length > 2048) return false;
  try {
    const u = new URL(value.trim());
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

export async function getResumeUrl() {
  const redis = getRedis();
  if (redis) {
    try {
      const fromRedis = await redis.get(REDIS_KEY);
      if (typeof fromRedis === 'string' && isValidResumeUrl(fromRedis)) {
        return fromRedis.trim();
      }
    } catch (e) {
      console.error('[resume-store] Redis read failed', e);
    }
  }

  try {
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    const { url } = JSON.parse(raw);
    if (typeof url === 'string' && isValidResumeUrl(url)) return url.trim();
  } catch {
    // missing file or invalid JSON — fall through
  }

  return DEFAULT_URL;
}

export async function setResumeUrl(url) {
  const trimmed = url.trim();
  if (!isValidResumeUrl(trimmed)) {
    throw new Error('Invalid URL');
  }

  const redis = getRedis();
  if (redis) {
    await redis.set(REDIS_KEY, trimmed);
    return;
  }

  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify({ url: trimmed }, null, 2), 'utf8');
}

export function isResumeUpdateConfigured() {
  return Boolean(process.env.RESUME_UPDATE_SECRET?.length);
}
