/**
 * Add all your blog posts here.
 * Each post needs: slug, title, summary, readTime, date.
 * Optional: excerpt (defaults to summary), published (default true).
 *
 * Later you can add full content here or switch to MDX files and keep
 * only metadata in this file.
 */
export const blogs = [
  {
    slug: 'debugging-slow-api',
    title: 'How I Debugged a Slow API',
    summary: 'Tracing latency from client to database, identifying N+1 queries and missing indexes.',
    readTime: '6 min',
    date: '2025-01-15',
  },
  {
    slug: 'designing-scalable-apis',
    title: 'Designing Scalable APIs',
    summary: 'REST conventions, versioning, pagination, and rate limiting for long-term scalability.',
    readTime: '8 min',
    date: '2025-01-10',
  },
  {
    slug: 'understanding-vector-databases',
    title: 'Understanding Vector Databases',
    summary: 'Embeddings, similarity search, and when to choose a vector store over traditional DBs.',
    readTime: '10 min',
    date: '2025-01-05',
  },
  {
    slug: 'how-rag-works',
    title: 'How a RAG System Works',
    summary: 'Chunking, retrieval, and generation in retrieval-augmented pipelines.',
    readTime: '7 min',
    date: '2024-12-20',
  },
];

/** Get a single post by slug (for the blog post page). */
export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug) ?? null;
}
