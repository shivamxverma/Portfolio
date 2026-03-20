'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2025',
    title: 'CodeSM – Role-based Coding Platform',
    description: 'Built a coding platform with problem storage on AWS and isolated Docker execution.',
    tech: ['Node.js', 'React', 'MongoDB', 'AWS', 'Docker'],
    lessons: 'Rate limiting and container isolation are critical for secure code execution.',
  },
  {
    year: '2025',
    title: 'DeepDoc – RAG Document Chat',
    description: 'AI-powered document Q&A using embeddings and vector search with Gemini.',
    tech: ['Next.js', 'LangChain', 'Gemini', 'Pinecone'],
    lessons: 'Chunking strategy and embedding model choice directly impact retrieval quality.',
  },
  {
    year: '2025',
    title: 'Chatterly – Real-time Chat',
    description: 'Group chat with WebSockets, Redis caching, and PostgreSQL persistence.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'WebSockets'],
    lessons: 'Redis for session/cache and PostgreSQL for source of truth keeps latency low.',
  },
  {
    year: '2026',
    title: 'Trading-n8n – Workflow Automation',
    description: 'n8n-based workflows for trading logic and integrations with TypeScript/JavaScript.',
    tech: ['TypeScript', 'n8n', 'JavaScript'],
    lessons: 'Workflow automation enables repeatable pipelines and clear step separation.',
  },
  {
    year: '2026',
    title: 'Email-rag – Email Thread RAG',
    description: 'Chat over email threads with FastAPI, BM25 retrieval, and Gemini with message-level citations.',
    tech: ['Python', 'FastAPI', 'React', 'Gemini', 'Docker'],
    lessons: 'RAG over structured threads with citations improves trust and debuggability.',
  },
];

export default function EngineeringTimeline() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2"
        >
          Engineering Timeline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-12"
        >
          Journey through key projects and milestones.
        </motion.p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" />
          {timeline.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex gap-8 mb-12 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 md:flex-[0_0_calc(50%-2rem)] pl-12 md:pl-0">
                <div className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-soft-md transition-shadow">
                  <span className="font-mono text-sm text-accent">{entry.year}</span>
                  <h3 className="text-lg font-semibold text-text-primary mt-1 mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">{entry.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {entry.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-surface text-text-secondary text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-text-secondary text-xs italic border-l-2 border-accent pl-3">
                    {entry.lessons}
                  </p>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2 top-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
