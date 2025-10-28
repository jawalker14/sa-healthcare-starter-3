import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: "Women's Health | Your Practice Name",
  description: 'Respectful, holistic care including preventative screenings and counselling.',
});

export default function WomensHealthPage() {
  return (
    <Section title="Women’s Health" description="Care aligned with clinical guidance and patient preferences.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <ul className="list-disc pl-5 text-slate-700">
          <li>Preventative screenings</li>
          <li>Contraceptive counselling</li>
          <li>Referrals when specialised care is indicated</li>
        </ul>
      </div>
    </Section>
  );
}
