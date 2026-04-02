'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Trash2, Pencil, Plus, Loader2 } from 'lucide-react';

function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const emptyForm = {
  slug: '',
  title: '',
  summary: '',
  content: '',
  readTime: '5 min',
  date: new Date().toISOString().slice(0, 10),
  published: true,
};

export default function AdminBlogsPage() {
  const [secret, setSecret] = useState('');
  const [connected, setConnected] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [editingSlug, setEditingSlug] = useState(null);

  const authHeader = useCallback(() => {
    return { Authorization: `Bearer ${secret}` };
  }, [secret]);

  async function loadPosts() {
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch('/api/blogs', { headers: authHeader() });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage({ type: 'error', text: data.error || `Failed (${res.status})` });
        setConnected(false);
        return;
      }
      setPosts(Array.isArray(data.posts) ? data.posts : []);
      setConnected(true);
    } catch {
      setMessage({ type: 'error', text: 'Network error.' });
      setConnected(false);
    } finally {
      setLoading(false);
    }
  }

  function startNew() {
    setEditingSlug(null);
    setForm({ ...emptyForm, date: new Date().toISOString().slice(0, 10) });
  }

  function startEdit(post) {
    setEditingSlug(post.slug);
    setForm({
      slug: post.slug,
      title: post.title,
      summary: post.summary,
      content: post.content || '',
      readTime: post.readTime || '5 min',
      date: post.date || new Date().toISOString().slice(0, 10),
      published: post.published !== false,
    });
  }

  async function savePost(e) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authHeader(),
        },
        body: JSON.stringify({ post: form }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage({ type: 'error', text: data.error || `Save failed (${res.status})` });
        return;
      }
      setMessage({ type: 'success', text: 'Post saved.' });
      await loadPosts();
      if (!editingSlug) startNew();
    } catch {
      setMessage({ type: 'error', text: 'Network error.' });
    } finally {
      setLoading(false);
    }
  }

  async function removePost(slug) {
    if (!confirm(`Delete “${slug}”? This cannot be undone.`)) return;
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${encodeURIComponent(slug)}`, {
        method: 'DELETE',
        headers: authHeader(),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage({ type: 'error', text: data.error || `Delete failed (${res.status})` });
        return;
      }
      setMessage({ type: 'success', text: 'Post deleted.' });
      if (editingSlug === slug) startNew();
      await loadPosts();
    } catch {
      setMessage({ type: 'error', text: 'Network error.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-text-primary px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-text-secondary mb-2">
          <Link href="/" className="text-accent hover:underline">
            ← Back to site
          </Link>
          {' · '}
          <Link href="/admin/resume" className="text-accent hover:underline">
            Resume link
          </Link>
        </p>
        <h1 className="text-2xl font-semibold mb-2">Blog posts</h1>
        <p className="text-sm text-text-secondary mb-8">
          Use the same secret as your resume admin:{' '}
          <code className="font-mono text-xs text-accent">PORTFOLIO_ADMIN_SECRET</code> or{' '}
          <code className="font-mono text-xs text-accent">RESUME_UPDATE_SECRET</code>. Content supports{' '}
          <strong className="text-text-primary">Markdown</strong> (headings, lists, code fences, tables).
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Input
            type="password"
            autoComplete="off"
            placeholder="Admin secret"
            value={secret}
            onChange={(e) => {
              setSecret(e.target.value);
              setConnected(false);
            }}
            className="bg-card border-border sm:max-w-md"
          />
          <Button
            type="button"
            onClick={loadPosts}
            disabled={loading || !secret}
            className="bg-accent hover:bg-hover text-white"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Loading…
              </>
            ) : (
              'Load posts'
            )}
          </Button>
        </div>

        {connected && (
          <>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Button type="button" variant="outline" onClick={startNew} className="border-border">
                <Plus className="h-4 w-4 mr-1" />
                New post
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-sm font-medium text-text-secondary mb-3">Published & drafts</h2>
                <ul className="space-y-2 border border-border rounded-lg bg-card divide-y divide-border">
                  {posts.length === 0 ? (
                    <li className="p-4 text-sm text-text-secondary">No posts yet.</li>
                  ) : (
                    posts.map((p) => (
                      <li
                        key={p.slug}
                        className="p-3 flex items-start justify-between gap-2 text-sm"
                      >
                        <div className="min-w-0">
                          <div className="font-medium text-text-primary truncate">{p.title}</div>
                          <div className="font-mono text-xs text-text-secondary truncate">{p.slug}</div>
                          {p.published === false && (
                            <span className="text-xs text-amber-500/90">Draft</span>
                          )}
                        </div>
                        <div className="flex shrink-0 gap-1">
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={() => startEdit(p)}
                            aria-label="Edit"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-400"
                            onClick={() => removePost(p.slug)}
                            aria-label="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>

              <form onSubmit={savePost} className="space-y-4 border border-border rounded-lg p-6 bg-card">
                <h2 className="text-sm font-medium text-text-secondary mb-2">
                  {editingSlug ? `Edit: ${editingSlug}` : 'New post'}
                </h2>
                <div>
                  <label className="block text-xs font-medium mb-1" htmlFor="title">
                    Title
                  </label>
                  <Input
                    id="title"
                    required
                    value={form.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setForm((f) => ({
                        ...f,
                        title,
                        slug: editingSlug ? f.slug : slugify(title) || f.slug,
                      }));
                    }}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" htmlFor="slug">
                    Slug (URL)
                  </label>
                  <Input
                    id="slug"
                    required
                    pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
                    title="Lowercase letters, numbers, hyphens"
                    value={form.slug}
                    onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                    className="bg-background border-border font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" htmlFor="summary">
                    Summary
                  </label>
                  <Input
                    id="summary"
                    required
                    value={form.summary}
                    onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))}
                    className="bg-background border-border"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1" htmlFor="date">
                      Date
                    </label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" htmlFor="readTime">
                      Read time
                    </label>
                    <Input
                      id="readTime"
                      value={form.readTime}
                      onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))}
                      className="bg-background border-border"
                      placeholder="5 min"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" htmlFor="content">
                    Body (Markdown)
                  </label>
                  <Textarea
                    id="content"
                    rows={14}
                    value={form.content}
                    onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                    className="bg-background border-border font-mono text-sm min-h-[200px]"
                    placeholder={'## Intro\n\nWrite in **Markdown**...'}
                  />
                </div>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
                    className="rounded border-border"
                  />
                  Published (visible on site)
                </label>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-accent hover:bg-hover text-white w-full sm:w-auto"
                >
                  {loading ? 'Saving…' : 'Save post'}
                </Button>
              </form>
            </div>
          </>
        )}

        {message && (
          <p
            className={`mt-6 text-sm ${
              message.type === 'error'
                ? 'text-red-600 dark:text-red-400'
                : 'text-green-600 dark:text-green-400'
            }`}
            role="status"
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}
