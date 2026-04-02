'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminResumePage() {
  const [url, setUrl] = useState('');
  const [secret, setSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch('/api/resume')
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.url === 'string') setUrl(data.url);
      })
      .catch(() => {});
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch('/api/resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${secret}`,
        },
        body: JSON.stringify({ url }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage({ type: 'error', text: data.error || `Request failed (${res.status})` });
        return;
      }
      setMessage({ type: 'success', text: 'Resume link updated. Visitors will see the new URL after the next page load.' });
      setSecret('');
    } catch {
      setMessage({ type: 'error', text: 'Network error. Try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-text-primary px-4 py-16">
      <div className="max-w-md mx-auto">
        <p className="text-sm text-text-secondary mb-2">
          <Link href="/" className="text-accent hover:underline">
            ← Back to site
          </Link>
          {' · '}
          <Link href="/admin/blogs" className="text-accent hover:underline">
            Blog posts
          </Link>
        </p>
        <h1 className="text-2xl font-semibold mb-2">Update resume link</h1>
        <p className="text-sm text-text-secondary mb-8">
          Only someone with your update secret can change this. The URL is not listed in the navigation — bookmark this page if you need it again.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="resume-url" className="block text-sm font-medium mb-1.5">
              Resume URL
            </label>
            <Input
              id="resume-url"
              type="url"
              required
              placeholder="https://..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-card border-border"
            />
          </div>
          <div>
            <label htmlFor="resume-secret" className="block text-sm font-medium mb-1.5">
              Update secret
            </label>
            <Input
              id="resume-secret"
              type="password"
              required
              autoComplete="off"
              placeholder="From RESUME_UPDATE_SECRET"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              className="bg-card border-border"
            />
          </div>
          <Button type="submit" disabled={loading} className="bg-accent hover:bg-hover text-white w-full sm:w-auto">
            {loading ? 'Saving…' : 'Save'}
          </Button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${message.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}
            role="status"
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}
