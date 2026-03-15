'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Lightbulb } from 'lucide-react';

const categories = [
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Python', 'FastAPI', 'Express', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector Databases', 'SQLAlchemy'],
  },
  {
    title: 'Infrastructure',
    icon: Cloud,
    items: ['Docker', 'Linux', 'Git', 'CI/CD', 'AWS', 'Render'],
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    items: [
      'System Design',
      'Caching',
      'Authentication',
      'Database Indexing',
      'API Rate Limiting',
      'Event-driven Architecture',
    ],
  },
];

function StackCard({ category, index }) {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-soft-md hover:border-border/80 transition-all"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-surface text-accent">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-text-primary">{category.title}</h3>
      </div>
      <ul className="space-y-2">
        {category.items.map((item) => (
          <li
            key={item}
            className="text-text-secondary text-sm font-mono flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function TechnicalStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2"
        >
          Technical Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-12"
        >
          Backend, data, infrastructure, and core concepts.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <StackCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
