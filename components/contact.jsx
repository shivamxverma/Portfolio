'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const links = [
  { label: 'Email', href: 'mailto:shivam0xverma@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/shivamxverma', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivamv99/', icon: Linkedin },
  { label: 'Twitter', href: 'https://x.com/Shivam_v99', icon: Twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-10"
        >
          Open to backend engineering roles and collaboration. Reach out via any channel below.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-text-primary hover:border-accent hover:text-accent shadow-soft hover:shadow-soft-md transition-all"
            >
              <Icon size={20} />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
