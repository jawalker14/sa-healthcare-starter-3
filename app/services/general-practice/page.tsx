import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'General Practice | Your Practice Name',
  description: 'Comprehensive primary care focused on prevention, early diagnosis, and coordinated management.',
});

export default function GeneralPracticePage() {
  return (
    <Section title="General Practice" description="Overview of services provided by our primary care team.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <ul className="list-disc pl-5 text-slate-700">
          <li>Routine health assessments and advice</li>
          <li>Management of common illnesses and injuries</li>
          <li>Referrals to appropriate specialists when needed</li>
        </ul>
      </div>
    </Section>
  );
}
