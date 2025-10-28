import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Section } from '@/components/ui';
import Breadcrumbs from '@/components/Breadcrumbs';

type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  category?: string;
};

function parseFrontMatter(raw: string): { meta: Partial<PostMeta>; body: string } {
  // Very small YAML-like parser for simple key: value pairs in the first frontmatter block
  if (!raw.startsWith('---')) return { meta: {}, body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { meta: {}, body: raw };
  const fmBlock = raw.slice(3, end + 1); // include trailing newline
  const body = raw.slice(end + 4); // skip "\n---"
  const meta: Record<string, string> = {};
  for (const line of fmBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colon = trimmed.indexOf(':');
    if (colon === -1) continue;
    const key = trimmed.slice(0, colon).trim();
    let value = trimmed.slice(colon + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return { meta, body };
}

function getExcerpt(body: string, maxLen = 180): string | undefined {
  // Strip MDX headings and take the first paragraph
  const text = body
    .replace(/<[^>]+>/g, '')
    .replace(/^#.*$/gm, '')
    .replace(/^\s+|\s+$/g, '')
    .split(/\n\s*\n/)
    .find(Boolean);
  if (!text) return undefined;
  const clean = text.replace(/[`*_>#-]/g, '').replace(/\s+/g, ' ').trim();
  return clean.length > maxLen ? clean.slice(0, maxLen).trimEnd() + '…' : clean;
}

async function loadPosts(): Promise<PostMeta[]> {
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  let files: string[] = [];
  try {
    files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
  } catch {
    return [];
  }

  const posts: PostMeta[] = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { meta, body } = parseFrontMatter(raw);
    const slug = filename.replace(/\.mdx?$/, '');
    const title = (meta.title as string) || slug;
    const description = (meta.description as string) || getExcerpt(body);
    const date = (meta.date as string) || undefined;
    const category = (meta.category as string) || undefined;
    return { slug, title, description, date, category };
  });

  // Sort by date desc if available, otherwise by title
  posts.sort((a, b) => {
    if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (a.date) return -1;
    if (b.date) return 1;
    return a.title.localeCompare(b.title);
  });

  return posts;
}

export const generateMetadata = () => ({
  title: 'Blog | Your Practice Name',
  description: 'Educational articles. No medical advice or testimonials.',
});

export default async function PostsPage() {
  const posts = await loadPosts();

  return (
    <Section title="Blog" description="Educational articles without testimonials or guarantees.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet. Add MDX files to content/posts.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gray-200 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      <Link href={`/posts/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    {post.description && (
                      <p className="mt-1 text-gray-700">{post.description}</p>
                    )}
                    {(post.category || post.date) && (
                      <p className="mt-2 text-sm text-gray-500">
                        {post.category && <span>{post.category}</span>}
                        {post.category && post.date && <span aria-hidden> • </span>}
                        {post.date && (
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-ZA', {
                              year: 'numeric',
                              month: 'short',
                              day: '2-digit',
                            })}
                          </time>
                        )}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-navy-700 hover:text-navy-800 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
