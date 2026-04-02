import React from 'react';
import HomeClient from '@/app/HomeClient';
import { getPublishedBlogs } from '@/lib/blog-store';
import { getResumeUrl } from '@/lib/resume-store';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [resumeUrl, blogPosts] = await Promise.all([
    getResumeUrl(),
    getPublishedBlogs(),
  ]);
  return <HomeClient resumeUrl={resumeUrl} blogPosts={blogPosts} />;
}
