'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#hero"
            className="font-semibold text-text-primary hover:text-accent transition-colors"
          >
            Shivam Verma
          </Link>
          <Link
            href="/blog"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            Blog
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
