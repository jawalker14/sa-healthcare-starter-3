import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'Fees & Medical Aids | Your Practice Name',
  description: 'Transparent information about consultation fees and medical aid billing. No guarantees or inducements.',
});

export default function FeesPage() {
  return (
    <Section title="Fees & Medical Aids" description="Overview of billing practices and estimates.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <p className="text-slate-700">We can provide estimates before your visit. Final costs depend on clinical assessment and benefits.</p>
      </div>
    </Section>
  );
}
