'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { blogs } from '@/content/blogs';

export default function EngineeringBlog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2 flex items-center gap-2"
        >
          <BookOpen size={28} />
          Engineering Blog
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-12"
        >
          Technical articles on backend systems and APIs.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-soft-md hover:border-accent/30 transition-all group"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-text-secondary text-xs font-mono">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                  <span className="text-accent text-xs font-medium group-hover:underline">
                    Read more
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-hover font-medium transition-colors"
          >
            View all posts
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
