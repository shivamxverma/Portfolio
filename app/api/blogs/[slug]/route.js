import { NextResponse } from 'next/server';
import {
  deleteBlog,
  getAdminSecret,
  isBlogAdminConfigured,
  isValidSlug,
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

export async function DELETE(request, context) {
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

  const params = await context.params;
  const slug = params?.slug;
  if (!isValidSlug(slug)) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
  }

  try {
    await deleteBlog(slug);
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Delete failed';
    const status = message === 'Post not found' ? 404 : 400;
    return NextResponse.json({ error: message }, { status });
  }

  return NextResponse.json({ ok: true });
}
