'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch } from 'lucide-react';

const pinnedRepos = [
  { name: 'CodeSM', url: 'https://github.com/shivamxverma/codesm', desc: 'Role-based coding platform', live: 'https://code-sm.vercel.app/' },
  { name: 'DeepDoc', url: 'https://github.com/shivamxverma/DeepDoc', desc: 'RAG document chat', live: 'https://deep-ds8tbjhrc-shivam-vermas-projects-e9224dea.vercel.app/' },
  { name: 'Chatterly', url: 'https://github.com/shivamxverma/Chatterly', desc: 'Real-time chat', live: 'https://chatterly-olive.vercel.app/' },
  { name: 'Trading-n8n', url: 'https://github.com/shivamxverma/Trading-n8n', desc: 'n8n trading workflows', live: null },
  { name: 'Email-rag', url: 'https://github.com/shivamxverma/Email-rag', desc: 'Email thread RAG with FastAPI', live: null },
];

const topLanguages = [
  { name: 'JavaScript', percent: 45 },
  { name: 'Python', percent: 25 },
  { name: 'TypeScript', percent: 20 },
  { name: 'Other', percent: 10 },
];

export default function GitHubActivity() {
  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2 flex items-center gap-2"
        >
          <Github size={28} />
          GitHub Activity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-12"
        >
          Contribution graph, pinned repos, and top languages.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-card border border-border rounded-lg p-6 shadow-soft"
          >
            <h3 className="text-sm font-mono text-accent mb-4">Contribution graph</h3>
            <div className="aspect-[2/1] bg-surface rounded-lg flex items-center justify-center border border-border">
              <p className="text-text-secondary text-sm">
                Embed your GitHub contribution graph here (e.g. via{' '}
                <a
                  href="https://github.com/Ashutosh00710/github-readme-activity-graph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  activity graph
                </a>{' '}
                or image API).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6 shadow-soft"
          >
            <h3 className="text-sm font-mono text-accent mb-4 flex items-center gap-2">
              <Star size={14} /> Top languages
            </h3>
            <div className="space-y-3">
              {topLanguages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text-primary font-mono">{lang.name}</span>
                    <span className="text-text-secondary">{lang.percent}%</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <h3 className="text-sm font-mono text-accent mb-4 flex items-center gap-2">
            <GitBranch size={14} /> Pinned repositories
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pinnedRepos.map((repo) => (
              <Link
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-lg p-4 shadow-soft hover:shadow-soft-md hover:border-accent/30 transition-all group"
              >
                <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors font-mono">
                  {repo.name}
                </h4>
                <p className="text-text-secondary text-sm mt-1 line-clamp-2">{repo.desc}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <Link
            href="https://github.com/shivamxverma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-hover font-medium transition-colors"
          >
            <Github size={18} />
            View full profile on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
