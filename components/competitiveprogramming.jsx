'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/mahavir99',
    handle: 'mahavir99',
    stats: 'Max Rating: 1681 · 3★ · 25+ contests',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Shivamv_99',
    handle: 'Shivamv_99',
    stats: 'Pupil · Max 1261 · 40+ contests',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/MahavirCoder/',
    handle: 'MahavirCoder',
    stats: '280+ problems solved 1700 Rating',
  },
  {
    name: 'AtCoder',
    url: 'https://atcoder.jp/users/MahavirCoder',
    handle: 'MahavirCoder',
    stats: '8 Kyu · Rating 440 · 12 rated matches',
  },
  {
    name: 'CSES',
    url: 'https://cses.fi/user/335315',
    handle: 'MahavirCoder',
    stats: '305 submissions · 100% C++',
  },
];

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2 flex items-center gap-2"
        >
          <Trophy size={28} />
          Competitive Programming
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-12"
        >
          Algorithm practice and contest journey across platforms.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-card border border-border rounded-lg p-5 shadow-soft hover:shadow-soft-md hover:border-accent/30 transition-all group"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {platform.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-text-secondary group-hover:text-accent flex-shrink-0 mt-0.5"
                  />
                </div>
                <p className="text-text-secondary text-xs font-mono mt-1">{platform.handle}</p>
                <p className="text-text-secondary text-sm mt-3">{platform.stats}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-4 rounded-lg bg-surface/50 border border-border"
        >
          <p className="text-text-secondary text-sm">
            <span className="text-accent font-medium">Problem-solving focus:</span> Data structures, algorithms, dynamic programming, and contest participation. Track record of 700+ problems across platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
