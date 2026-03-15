'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'VerlyAI',
    url: 'https://verlyai.xyz',
    role: 'Contributing',
    subtitle: 'Contributing to the VerlyAI project',
    period: 'Jan 2026 – Present',
    bullets: [
      'Solely architected the end-to-end AI chatbot flow, building a robust data ingestion pipeline with a custom web crawler to scrape, process, and index website content from raw URLs.',
      'Developed the core AI response service from the ground up, optimizing the backend architecture for ultra-low latency and highly accurate customer query resolution.',
      'Designed and implemented a seamless human-escalation system for routing unresolved queries to live agents, alongside an automated lead-generation module to drive customer acquisition.',
      'Built a comprehensive WhatsApp integration from scratch enabling true omnichannel support, and integrated a secure end-to-end payment processing system for user subscriptions.',
    ],
    techStack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Golang'],
  },
  {
    company: 'Klimb',
    url: 'https://klimb.io',
    role: 'Full Stack Developer Intern',
    location: 'Remote',
    period: 'Oct 2025 – Jan 2026',
    bullets: [
      'Migrated 1,000+ legacy subscriptions to a modular credit-based architecture, ensuring 100% data integrity through pre-migration impact analysis with zero downtime.',
      'Engineered a metered billing system with real-time quota enforcement, resolving financial leaks and improving cost-tracking accuracy by 80% for AI and email services.',
      'Developed an AI resume parsing pipeline to automate metadata extraction, processing 1000+ resumes daily and reducing manual screening bottlenecks by 100%.',
      'Automated sourcing workflows by synchronizing application-phase metadata, saving an estimated 40 hours per week by eliminating redundant data entry across all modules.',
      'Built a centralized Super Admin module to manage 1000+ global tiers and credit allocations, streamlining operational control and reducing administrative overhead by 90%.',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Redis'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2 flex items-center gap-2"
        >
          <Briefcase size={28} />
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-12"
        >
          Internships and professional roles.
        </motion.p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-soft-md transition-shadow"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-text-secondary">·</span>
                    <Link
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:text-hover font-medium transition-colors"
                    >
                      {exp.company}
                      <ExternalLink size={14} />
                    </Link>
                    {exp.location && (
                      <>
                        <span className="text-text-secondary">·</span>
                        <span className="text-text-secondary text-sm">({exp.location})</span>
                      </>
                    )}
                  </div>
                  {exp.subtitle && (
                    <p className="text-text-secondary text-sm mt-1">{exp.subtitle}</p>
                  )}
                  <p className="text-text-secondary text-sm font-mono mt-1">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-4">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-text-secondary text-sm flex gap-2"
                  >
                    <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-surface text-text-secondary text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
