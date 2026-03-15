'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    verifyUrl: '#',
  },
  {
    name: 'MongoDB Basics',
    issuer: 'MongoDB University',
    verifyUrl: '#',
  },
  {
    name: 'Node.js Backend Development',
    issuer: 'Coursera / Similar',
    verifyUrl: '#',
  },
  {
    name: 'System Design Fundamentals',
    issuer: 'Educative / Similar',
    verifyUrl: '#',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-primary mb-2 flex items-center gap-2"
        >
          <Award size={28} />
          Certificates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-12"
        >
          Credentials with verification links. Replace verifyUrl with your actual links.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col bg-card border border-border rounded-lg p-5 shadow-soft hover:shadow-soft-md hover:border-accent/30 transition-all group"
            >
              <Award className="text-accent mb-3" size={24} />
              <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                {cert.name}
              </h3>
              <p className="text-text-secondary text-sm mt-1">{cert.issuer}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-accent text-xs font-mono">
                Verify <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
