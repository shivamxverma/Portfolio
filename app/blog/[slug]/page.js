import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogBySlug } from '@/content/blogs';
import { Clock, ArrowLeft, Calendar } from 'lucide-react';

export async function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} | Shivam Verma`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }) {
  const post = getBlogBySlug(params.slug);
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
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-text-secondary text-sm font-mono">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} read
            </span>
          </div>
        </header>
        <div className="prose prose-invert max-w-none text-text-primary">
          <p className="text-text-secondary text-lg mb-6">{post.summary}</p>
          <div className="border border-border rounded-lg p-6 bg-card text-text-secondary text-sm">
            <p className="mb-0">
              <strong className="text-text-primary">Content placeholder.</strong> Add your full post content here: use MDX, markdown, or a CMS. You can edit this page in <code className="font-mono text-accent">app/blog/[slug]/page.js</code> or pull content from <code className="font-mono text-accent">content/blogs.js</code> / MDX files.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
