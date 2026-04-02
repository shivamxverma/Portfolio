import { NextResponse } from 'next/server';
import {
  getBlogs,
  getAdminSecret,
  isBlogAdminConfigured,
  setBlogs,
  upsertBlog,
  validatePostArray,
} from '@/lib/blog-store';

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

function getBearerToken(request) {
  const auth = request.headers.get('authorization');
  if (!auth?.startsWith('Bearer ')) return null;
  return auth.slice(7).trim();
}

function isAdmin(request) {
  const token = getBearerToken(request);
  const secret = getAdminSecret();
  return Boolean(secret && token === secret);
}

/** Public: published only. With valid admin Bearer: all posts (including drafts). */
export async function GET(request) {
  try {
    const posts = await getBlogs();
    if (isAdmin(request)) {
      return NextResponse.json({
        posts: [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)),
      });
    }
    const published = posts
      .filter((p) => p.published !== false)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    return NextResponse.json({ posts: published });
  } catch (e) {
    console.error('[api/blogs] GET failed', e);
    return NextResponse.json({ error: 'Could not load posts.' }, { status: 500 });
  }
}

/** Upsert a single post (admin). */
export async function POST(request) {
  if (!isBlogAdminConfigured()) {
    return NextResponse.json(
      {
        error:
          'Blog updates are not configured. Set PORTFOLIO_ADMIN_SECRET or RESUME_UPDATE_SECRET.',
      },
      { status: 503 }
    );
  }

  if (!isAdmin(request)) return unauthorized();

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const post = body?.post ?? body;
  try {
    await upsertBlog(post);
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Invalid post';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}

/** Replace all posts (admin) — useful for import/sync. */
export async function PUT(request) {
  if (!isBlogAdminConfigured()) {
    return NextResponse.json(
      {
        error:
          'Blog updates are not configured. Set PORTFOLIO_ADMIN_SECRET or RESUME_UPDATE_SECRET.',
      },
      { status: 503 }
    );
  }

  if (!isAdmin(request)) return unauthorized();

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const posts = body?.posts;
  const v = validatePostArray(posts);
  if (!v.ok) {
    return NextResponse.json({ error: v.error }, { status: 400 });
  }

  try {
    await setBlogs(v.posts);
  } catch (e) {
    console.error('[api/blogs] PUT failed', e);
    return NextResponse.json({ error: 'Could not save posts.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
