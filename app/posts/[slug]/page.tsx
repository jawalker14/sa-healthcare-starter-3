import fs from 'fs';
import path from 'path';
import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';
import type { Metadata } from 'next';

function parseFrontMatter(raw: string): { meta: Record<string, string>; body: string } {
  if (!raw.startsWith('---')) return { meta: {}, body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { meta: {}, body: raw };
  const fmBlock = raw.slice(3, end + 1);
  const body = raw.slice(end + 4);
  const meta: Record<string, string> = {};
  for (const line of fmBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colon = trimmed.indexOf(':');
    if (colon === -1) continue;
    const key = trimmed.slice(0, colon).trim();
    let value = trimmed.slice(colon + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return { meta, body };
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const filePath = path.join(process.cwd(), 'content', 'posts', `${params.slug}.mdx`);
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { meta } = parseFrontMatter(raw);
    return {
      title: (meta.title as string) || `${params.slug} | Blog`,
      description: (meta.description as string) || 'Educational article. No medical advice.',
    };
  } catch {
    return { title: 'Article | Blog', description: 'Educational article. No medical advice.' };
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default function BlogPostPage({ params }: Params) {
  const filePath = path.join(process.cwd(), 'content', 'posts', `${params.slug}.mdx`);
  let meta: Record<string, string> = {};
  let body = '';
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = parseFrontMatter(raw);
    meta = parsed.meta;
    body = parsed.body;
  } catch {
    body = '# Not found\n\nThe requested article could not be found.';
  }

  const paragraphs = body
    .replace(/^---[\s\S]*?---\s*/m, '')
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <Section title={(meta.title as string) || 'Article'} description={(meta.description as string) || 'Educational information only.'}>
      <div className="mx-auto max-w-3xl prose prose-slate">
        <Breadcrumbs />
        <article>
          {paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: escapeHtml(p).replace(/\n/g, '<br/>') }} />
          ))}
        </article>
      </div>
    </Section>
  );
}
