import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'FAQs | Your Practice Name',
  description: 'Answers to commonly asked questions about appointments, fees, and services. No medical advice provided.',
});

export default function FAQsPage() {
  return (
    <Section title="Frequently Asked Questions" description="General information to help you plan your visit.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <details className="rounded-md border border-slate-200 p-4">
          <summary className="cursor-pointer font-medium">Do I need a referral?</summary>
          <p className="mt-2 text-slate-700">Some services require referrals under certain medical aids. We&apos;ll advise what&apos;s needed when you contact us.</p>
        </details>
      </div>
    </Section>
  );
}
