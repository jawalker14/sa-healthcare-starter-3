"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map path segments to human labels
const LABELS: Record<string, string> = {
  'about': 'About',
  'services': 'Services',
  'departments': 'Departments',
  'practitioners': 'Practitioners',
  'locations': 'Locations',
  'faqs': 'FAQs',
  'posts': 'Blog',
  'media': 'Media & Press',
  'fees': 'Fees & Medical Aids',
  'contact': 'Contact',
  'privacy': 'Privacy & POPIA',
  'terms': 'Terms',
  'bookings': 'Bookings',
  'patient-portal': 'Patient Portal',
};

const Crumb: React.FC<{ href: string; children: React.ReactNode; isCurrent?: boolean }> = ({ href, children, isCurrent }) => {
  const base = 'rounded px-1.5 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400';
  return isCurrent ? (
    <span aria-current="page" className={`text-slate-700 ${base}`}>{children}</span>
  ) : (
    <Link href={href} className={`text-slate-600 hover:text-navy-800 underline-offset-2 hover:underline ${base}`}>{children}</Link>
  );
};

const Breadcrumbs: React.FC<{ rootLabel?: string }> = ({ rootLabel = 'Home' }) => {
  const pathname = usePathname() || '/';
  const segments = pathname.split('/').filter(Boolean);
  const crumbs = [
    { href: '/', label: rootLabel },
    ...segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/');
      const isParam = seg.startsWith('[') && seg.endsWith(']');
      const label = LABELS[seg] || (isParam ? 'Details' : decodeURIComponent(seg).replace(/[-_]/g, ' '));
      return { href, label };
    })
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm" role="navigation">
      <ol className="flex flex-wrap items-center gap-1 text-slate-600">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1">
            <Crumb href={c.href} isCurrent={i === crumbs.length - 1}>{c.label}</Crumb>
            {i < crumbs.length - 1 && <span aria-hidden className="text-slate-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
