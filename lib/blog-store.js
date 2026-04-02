import fs from 'fs/promises';
import path from 'path';
import { Redis } from '@upstash/redis';

const DATA_PATH = path.join(process.cwd(), 'data', 'blogs.json');
const REDIS_KEY = 'portfolio:blogs:posts';

function getRedis() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export function getAdminSecret() {
  return (
    process.env.PORTFOLIO_ADMIN_SECRET ||
    process.env.RESUME_UPDATE_SECRET ||
    ''
  );
}

export function isBlogAdminConfigured() {
  return Boolean(getAdminSecret().length);
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isValidSlug(slug) {
  return typeof slug === 'string' && slug.length >= 1 && slug.length <= 128 && SLUG_RE.test(slug);
}

function normalizePost(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const slug = typeof raw.slug === 'string' ? raw.slug.trim() : '';
  const title = typeof raw.title === 'string' ? raw.title.trim() : '';
  const summary = typeof raw.summary === 'string' ? raw.summary.trim() : '';
  const content = typeof raw.content === 'string' ? raw.content : '';
  const readTime =
    typeof raw.readTime === 'string' && raw.readTime.trim()
      ? raw.readTime.trim()
      : '5 min';
  let date = typeof raw.date === 'string' ? raw.date.trim() : '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    date = new Date().toISOString().slice(0, 10);
  }
  const published = raw.published !== false;

  if (!isValidSlug(slug) || !title || !summary) return null;

  return { slug, title, summary, content, readTime, date, published };
}

export function validatePostArray(posts) {
  if (!Array.isArray(posts)) return { ok: false, error: 'Expected an array of posts' };
  const seen = new Set();
  const normalized = [];
  for (const p of posts) {
    const n = normalizePost(p);
    if (!n) {
      return {
        ok: false,
        error:
          'Each post needs slug (lowercase-hyphenated), title, summary, and optional content, date, readTime, published.',
      };
    }
    if (seen.has(n.slug)) {
      return { ok: false, error: `Duplicate slug: ${n.slug}` };
    }
    seen.add(n.slug);
    normalized.push(n);
  }
  return { ok: true, posts: normalized };
}

async function readFromFile() {
  const raw = await fs.readFile(DATA_PATH, 'utf8');
  const data = JSON.parse(raw);
  const posts = Array.isArray(data.posts) ? data.posts : [];
  const v = validatePostArray(posts);
  return v.ok ? v.posts : [];
}

export async function getBlogs() {
  const redis = getRedis();
  if (redis) {
    try {
      const fromRedis = await redis.get(REDIS_KEY);
      if (fromRedis != null) {
        const parsed =
          typeof fromRedis === 'string' ? JSON.parse(fromRedis) : fromRedis;
        const posts = Array.isArray(parsed) ? parsed : [];
        const v = validatePostArray(posts);
        if (v.ok && v.posts.length) return v.posts;
      }
    } catch (e) {
      console.error('[blog-store] Redis read failed', e);
    }
  }

  try {
    return await readFromFile();
  } catch {
    return [];
  }
}

export async function getPublishedBlogs() {
  const all = await getBlogs();
  return all
    .filter((p) => p.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getBlogBySlug(slug) {
  if (!isValidSlug(slug)) return null;
  const posts = await getBlogs();
  const post = posts.find((p) => p.slug === slug) ?? null;
  if (!post || post.published === false) return null;
  return post;
}

export async function getBlogBySlugAdmin(slug) {
  if (!isValidSlug(slug)) return null;
  const posts = await getBlogs();
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function setBlogs(posts) {
  const v = validatePostArray(posts);
  if (!v.ok) throw new Error(v.error);

  const redis = getRedis();
  if (redis) {
    await redis.set(REDIS_KEY, JSON.stringify(v.posts));
    return;
  }

  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(
    DATA_PATH,
    JSON.stringify({ posts: v.posts }, null, 2),
    'utf8'
  );
}

export async function upsertBlog(post) {
  const n = normalizePost(post);
  if (!n) throw new Error('Invalid post');
  const posts = await getBlogs();
  const idx = posts.findIndex((p) => p.slug === n.slug);
  if (idx >= 0) posts[idx] = n;
  else posts.push(n);
  await setBlogs(posts);
}

export async function deleteBlog(slug) {
  if (!isValidSlug(slug)) throw new Error('Invalid slug');
  const posts = await getBlogs();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) throw new Error('Post not found');
  await setBlogs(next);
}
