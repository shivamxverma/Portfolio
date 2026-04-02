'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/styles/atom-one-dark';

/** Map common fence labels to highlight.js / lowlight names used by react-syntax-highlighter v5 */
const LANG_ALIASES = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  sh: 'bash',
  shell: 'bash',
  yml: 'yaml',
  md: 'markdown',
};

function resolveLanguage(id) {
  if (!id) return 'text';
  const lower = id.toLowerCase();
  return LANG_ALIASES[lower] || lower;
}

export default function BlogMarkdown({ children }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ children }) {
            return <>{children}</>;
          },
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');
            if (match) {
              const language = resolveLanguage(match[1]);
              return (
                <SyntaxHighlighter
                  language={language}
                  style={atomOneDark}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    border: '1px solid #30363D',
                    fontSize: '0.875rem',
                  }}
                  {...props}
                >
                  {codeString}
                </SyntaxHighlighter>
              );
            }
            return (
              <code
                className="font-mono text-accent bg-surface px-1.5 py-0.5 rounded text-[0.9em]"
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
