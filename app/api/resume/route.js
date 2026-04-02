import { NextResponse } from 'next/server';
import {
  getResumeUrl,
  setResumeUrl,
  isValidResumeUrl,
  isResumeUpdateConfigured,
} from '@/lib/resume-store';

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

function getBearerToken(request) {
  const auth = request.headers.get('authorization');
  if (!auth?.startsWith('Bearer ')) return null;
  return auth.slice(7).trim();
}

export async function GET() {
  const url = await getResumeUrl();
  return NextResponse.json({ url });
}

export async function POST(request) {
  if (!isResumeUpdateConfigured()) {
    return NextResponse.json(
      { error: 'Resume updates are not configured. Set RESUME_UPDATE_SECRET in the environment.' },
      { status: 503 }
    );
  }

  const token = getBearerToken(request);
  if (!token || token !== process.env.RESUME_UPDATE_SECRET) {
    return unauthorized();
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { url } = body;
  if (typeof url !== 'string' || !isValidResumeUrl(url)) {
    return NextResponse.json(
      { error: 'Provide a valid http(s) URL in the "url" field.' },
      { status: 400 }
    );
  }

  try {
    await setResumeUrl(url);
  } catch (e) {
    console.error('[api/resume] set failed', e);
    return NextResponse.json({ error: 'Could not save resume URL.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, url: url.trim() });
}
