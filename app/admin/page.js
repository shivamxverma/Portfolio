import Link from 'next/link';

export const metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export default function AdminIndexPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary px-4 py-16">
      <div className="max-w-md mx-auto">
        <p className="text-sm text-text-secondary mb-4">
          <Link href="/" className="text-accent hover:underline">
            ← Back to site
          </Link>
        </p>
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        <ul className="space-y-3 text-accent">
          <li>
            <Link href="/admin/resume" className="hover:underline">
              Update resume link
            </Link>
          </li>
          <li>
            <Link href="/admin/blogs" className="hover:underline">
              Manage blog posts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
