import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section, Card } from '@/components/ui';
import Link from 'next/link';

export const generateMetadata = () => ({
  title: 'Practitioners | Your Practice Name',
  description: 'Meet our registered practitioners. Profiles provide credentials and scope of practice without promotional claims.',
});

export default function PractitionersHub() {
  const practitioners = [
    { slug: 'dr-samantha-khoza', name: 'Dr Samantha Khoza', role: 'General Practitioner', reg: 'HPCSA: 1234567' },
    { slug: 'dr-john-van-der-merwe', name: 'Dr John van der Merwe', role: 'General Practitioner', reg: 'HPCSA: 2345678' },
  ];
  return (
    <Section title="Practitioners" description="Registered practitioners providing patient-centered care.">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practitioners.map(p => (
            <Card key={p.slug} title={p.name} subtitle={`${p.role} · ${p.reg}`}>
              <Link className="text-navy-700 underline-offset-2 hover:underline" href={`/practitioners/${p.slug}`}>View profile</Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
