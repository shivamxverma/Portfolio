'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Database, Cpu, Zap } from 'lucide-react';

const projects = [
  {
    id: 'codesm',
    name: 'CodeSM',
    problem: 'Need a secure, scalable platform for storing coding problems and running user code in isolation.',
    architecture: 'Frontend (React) → API (Node.js) → Problem storage (AWS S3) → Code execution (Docker containers). Rate limiting at API layer.',
    techStack: ['Node.js', 'React', 'MongoDB', 'AWS', 'Docker'],
    endpoints: ['POST /submit – run code', 'GET /problems – list problems', 'GET /problems/:id – problem detail', 'POST /auth/* – auth flows'],
    database: 'MongoDB: users, submissions, problem metadata. AWS S3: test cases and problem assets.',
    debugging: 'Tuned Docker timeouts and memory limits to avoid OOM on heavy solutions while keeping isolation.',
    performance: 'Rate limiting reduced abuse and failed requests; structured S3 folders improved problem load times.',
    lessons: 'Isolation and rate limits are non-negotiable for code execution platforms.',
    github: 'https://github.com/shivamxverma/codesm',
    live: 'https://code-sm.vercel.app/',
  },
  {
    id: 'deepdoc',
    name: 'DeepDoc',
    problem: 'Users need to query large PDFs via natural language without reading entire documents.',
    architecture: 'Upload → Chunking (LangChain) → Embeddings (Gemini) → Pinecone. Chat API uses retrieval + LLM to answer.',
    techStack: ['Next.js', 'LangChain', 'Gemini', 'Pinecone', 'Vercel Blob'],
    endpoints: ['POST /upload – store PDF', 'POST /chat – RAG conversation', 'GET /documents – list docs'],
    database: 'Pinecone vector index for embeddings; Vercel Blob for raw PDFs.',
    debugging: 'Adjusted chunk size and overlap to balance context quality and retrieval recall.',
    performance: 'Optimized embedding batch size and index configuration for faster ingestion.',
    lessons: 'Chunking and embedding strategy drive RAG quality more than model size alone.',
    github: 'https://github.com/shivamxverma/DeepDoc',
    live: 'https://deep-ds8tbjhrc-shivam-vermas-projects-e9224dea.vercel.app/',
  },
  {
    id: 'chatterly',
    name: 'Chatterly',
    problem: 'Real-time group chat with persistence and low latency at scale.',
    architecture: 'React client ↔ WebSocket server (Node) ↔ Redis (cache/session) + PostgreSQL (persistence).',
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'WebSockets'],
    endpoints: ['WS / – real-time messages', 'GET /messages – history (paginated)', 'POST /auth/* – auth'],
    database: 'PostgreSQL: users, rooms, messages. Redis: online presence, recent message cache.',
    debugging: 'Resolved message ordering and duplicate delivery by enforcing server-side sequence and idempotency.',
    performance: 'Redis cache cut message retrieval latency; connection pooling improved DB throughput.',
    lessons: 'Use Redis for hot path and PostgreSQL as source of truth for consistency.',
    github: 'https://github.com/shivamxverma/Chatterly',
    live: 'https://chatterly-olive.vercel.app/',
  },
  {
    id: 'trading-n8n',
    name: 'Trading-n8n',
    problem: 'Automate trading and workflow pipelines using n8n with custom logic and integrations.',
    architecture: 'n8n workflows with TypeScript/JavaScript nodes for trading logic and external API integrations.',
    techStack: ['TypeScript', 'n8n', 'JavaScript', 'CSS'],
    endpoints: ['Workflow-triggered executions', 'Custom nodes and integrations'],
    database: 'n8n internal state; optional external DB for persistence.',
    debugging: 'Structured workflow debugging and error handling in node chains.',
    performance: 'Efficient workflow design and trigger configuration for reliable execution.',
    lessons: 'Workflow automation with n8n enables repeatable pipelines and clear separation of steps.',
    github: 'https://github.com/shivamxverma/Trading-n8n',
    live: null,
  },
  {
    id: 'email-rag',
    name: 'Email-rag',
    problem: 'Chat over email threads with answers grounded in the actual messages and citations.',
    architecture: 'React UI + FastAPI backend. BM25 retrieval (thread-scoped or global), Gemini for answers with message-level citations.',
    techStack: ['Python', 'FastAPI', 'React', 'Gemini', 'Docker', 'BM25'],
    endpoints: ['POST /start_session', 'POST /ask', 'POST /switch_thread', 'GET /threads'],
    database: 'Threaded emails as JSON; one chunk per message with doc_id, thread_id, message_id.',
    debugging: 'Query rewrite and retrieval trace inspection (runs/<timestamp>/trace.jsonl) for citation accuracy.',
    performance: 'Thread-scoped retrieval and optional attachment chunking for focused, fast answers.',
    lessons: 'RAG over structured threads with citations improves trust and debuggability.',
    github: 'https://github.com/shivamxverma/Email-rag',
    live: null,
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-lg overflow-hidden shadow-soft hover:shadow-soft-md transition-shadow"
    >
      <div className="p-5 border-b border-border bg-surface/50 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-text-primary">{project.name}</h3>
        <div className="flex gap-2">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border text-text-secondary hover:text-accent hover:border-accent/50 text-sm font-medium transition-colors"
          >
            <Github size={16} />
            Repo
          </Link>
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border text-text-secondary hover:text-accent hover:border-accent/50 text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              Live
            </Link>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xs font-mono text-accent mb-1">Problem</h4>
          <p className="text-text-secondary text-sm">{project.problem}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xs font-mono text-accent mb-1 flex items-center gap-1">
            <Cpu size={12} /> Architecture
          </h4>
          <p className="text-text-secondary text-sm">{project.architecture}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-surface text-text-secondary text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-accent hover:text-hover text-sm font-medium transition-colors"
        >
          {expanded ? 'Show less' : 'Show full case study'}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4 border-t border-border mt-4">
                <div>
                  <h4 className="text-xs font-mono text-accent mb-1">API Endpoints</h4>
                  <ul className="text-text-secondary text-sm list-disc list-inside space-y-0.5">
                    {project.endpoints.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-accent mb-1 flex items-center gap-1">
                    <Database size={12} /> Database
                  </h4>
                  <p className="text-text-secondary text-sm">{project.database}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-accent mb-1">Debugging</h4>
                  <p className="text-text-secondary text-sm">{project.debugging}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-accent mb-1 flex items-center gap-1">
                    <Zap size={12} /> Performance
                  </h4>
                  <p className="text-text-secondary text-sm">{project.performance}</p>
                </div>
                <p className="text-text-secondary text-sm italic border-l-2 border-success pl-3">
                  {project.lessons}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2"
        >
          Featured Backend Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-12"
        >
          Engineering case studies: problem, architecture, and learnings.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
