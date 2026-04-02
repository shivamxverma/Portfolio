import React from 'react';
import Link from 'next/link';
import { Clock, BookOpen, ArrowLeft } from 'lucide-react';
import { getPublishedBlogs } from '@/lib/blog-store';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog | Shivam Verma',
  description: 'Technical articles on backend systems, APIs, and engineering.',
};

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
        <h1 className="text-3xl font-bold text-text-primary mb-2 flex items-center gap-2">
          <BookOpen size={32} />
          Engineering Blog
        </h1>
        <p className="text-text-secondary mb-12">
          Technical articles on backend systems and APIs.
        </p>

        {blogs.length === 0 ? (
          <p className="text-text-secondary border border-border rounded-lg p-8 bg-card text-center">
            No posts yet. Check back soon.
          </p>
        ) : (
          <ul className="space-y-6">
            {blogs.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-soft-md hover:border-accent/30 transition-all group"
                >
                  <h2 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm mb-4">{post.summary}</p>
                  <div className="flex items-center gap-4 text-text-secondary text-xs font-mono">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
