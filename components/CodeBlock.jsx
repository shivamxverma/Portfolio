'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export default function CodeBlock({ children, className, language }) {
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden shadow-soft">
      {language && (
        <div className="px-4 py-2 border-b border-border bg-surface">
          <span className="font-mono text-xs text-text-secondary">{language}</span>
        </div>
      )}
      <pre
        className={cn(
          'p-4 overflow-x-auto text-sm font-mono text-text-primary',
          className
        )}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
