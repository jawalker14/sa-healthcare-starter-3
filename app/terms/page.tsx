import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'Terms of Use | Your Practice Name',
  description: 'Website terms of use and disclaimers. No medical advice; information is educational only.',
});

export default function TermsPage() {
  return (
    <Section title="Terms of Use" description="Please read these terms carefully.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <p className="text-slate-700">Information on this website is general and does not replace consultation with a healthcare professional.</p>
      </div>
    </Section>
  );
}
