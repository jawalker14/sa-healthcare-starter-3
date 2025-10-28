import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'Departments | Your Practice Name',
  description: 'Overview of departments and service areas to help you navigate care options.',
});

export default function DepartmentsPage() {
  return (
    <Section title="Departments" description="Simple, factual summaries of our service areas.">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs />
        <p className="text-slate-700">Examples include Primary Care, Preventative Care, and Chronic Care. Department structure may vary by location.</p>
      </div>
    </Section>
  );
}
