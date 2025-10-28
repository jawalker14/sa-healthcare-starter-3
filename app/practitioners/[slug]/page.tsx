import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';
import type { Metadata } from 'next';

export function generateMetadata({ params }: any): Metadata {
  const name = decodeURIComponent(params.slug).replace(/-/g, ' ');
  return {
    title: `${name} | Practitioner Profile`,
    description: `Registration details, scope of practice, and contact information for ${name}. No endorsements or testimonials.`,
  };
}

export default function PractitionerProfile({ params }: any) {
  const name = decodeURIComponent(params.slug).replace(/-/g, ' ');
  return (
    <Section title={name} description="Factual profile details.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <dl className="grid grid-cols-1 gap-4 text-slate-700 sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Registration</dt>
            <dd>HPCSA: 0000000 (Example)</dd>
          </div>
          <div>
            <dt className="font-semibold">Scope of practice</dt>
            <dd>General medical practice within applicable regulations.</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
