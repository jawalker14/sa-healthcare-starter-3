import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'Preventative Care | Your Practice Name',
  description: 'Vaccinations and health screenings guided by clinical best practice.',
});

export default function PreventativeCarePage() {
  return (
    <Section title="Preventative Care" description="Vaccinations and screenings to support long-term health.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <ul className="list-disc pl-5 text-slate-700">
          <li>Age- and risk-appropriate screenings</li>
          <li>Vaccination guidance per national schedules</li>
          <li>Referral pathways where indicated</li>
        </ul>
      </div>
    </Section>
  );
}
