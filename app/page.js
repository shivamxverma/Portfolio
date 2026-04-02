import React from 'react';
import HomeClient from '@/app/HomeClient';
import { getResumeUrl } from '@/lib/resume-store';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const resumeUrl = await getResumeUrl();
  return <HomeClient resumeUrl={resumeUrl} />;
}
