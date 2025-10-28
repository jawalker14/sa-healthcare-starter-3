import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'About | Your Practice Name',
  description: 'Learn about our healthcare practice, our approach to care, and our commitment to ethical, patient-centered services.',
});

export default function AboutPage() {
  return (
    <Section title="About" description="Factual information about our practice and how we provide care.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <p className="text-slate-700">
          We provide evidence-based, patient-centered healthcare. Information on this site is general and not a substitute for a
          consultation with a qualified healthcare professional.
        </p>
      </div>
    </Section>
  );
}
