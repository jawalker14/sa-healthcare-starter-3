import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'Chronic Care | Your Practice Name',
  description: 'Support for long-term conditions such as diabetes and hypertension, focused on education and monitoring.',
});

export default function ChronicCarePage() {
  return (
    <Section title="Chronic Care" description="Education, monitoring, and care coordination for long-term conditions.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <ul className="list-disc pl-5 text-slate-700">
          <li>Personalised care plans aligned to clinical guidance</li>
          <li>Medication reviews and monitoring</li>
          <li>Lifestyle advice and referrals when indicated</li>
        </ul>
      </div>
    </Section>
  );
}
