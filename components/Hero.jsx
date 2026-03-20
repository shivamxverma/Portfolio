'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Image
              src="/profile.jpeg"
              alt="Shivam Verma"
              width={180}
              height={180}
              className="rounded-2xl border border-border shadow-soft-lg object-cover ring-2 ring-surface"
              priority
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-accent font-mono text-sm mb-2"
            >
              Backend Engineer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight"
            >
              Shivam Kumar Verma
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-text-secondary mb-2"
            >
              API Architecture · Distributed Systems
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary max-w-xl mb-8"
            >
              I design and build scalable backend systems, REST & event-driven APIs, and data pipelines. 
              Focused on performance, observability, and clean architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-3"
            >
              <Button asChild className="bg-accent hover:bg-hover text-white rounded-lg shadow-soft">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" className="border-border text-text-primary hover:bg-surface rounded-lg">
                <a href="https://drive.google.com/drive/folders/12LEzkK2j_0fj42Up8phtYt2qxnKp7ceN">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-text-secondary hover:text-accent hover:bg-surface rounded-lg">
                <Link href="https://github.com/shivamxverma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-text-secondary hover:text-accent hover:bg-surface rounded-lg">
                <Link href="https://www.linkedin.com/in/shivamv99/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-text-secondary hover:text-accent hover:bg-surface rounded-lg">
                <Link href="https://x.com/Shivam_v99" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
