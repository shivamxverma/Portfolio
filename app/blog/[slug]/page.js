import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, Calendar } from 'lucide-react';
import { getBlogBySlug } from '@/lib/blog-store';
import BlogMarkdown from '@/components/BlogMarkdown';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} | Shivam Verma`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          All posts
        </Link>
        <header className="mb-10 border-b border-border pb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            {post.title}
          </h1>
          <p className="text-lg text-text-secondary mb-6">{post.summary}</p>
          <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm font-mono">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} read
            </span>
          </div>
        </header>
        <BlogMarkdown>{post.content || ''}</BlogMarkdown>
      </article>
    </div>
  );
}
