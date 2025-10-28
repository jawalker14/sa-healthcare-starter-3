import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'Privacy & POPIA | Your Practice Name',
  description: 'How we collect and process personal information in compliance with POPIA and HPCSA guidelines.',
});

export default function PrivacyPage() {
  return (
    <Section title="Privacy & POPIA" description="We collect the minimum necessary information with explicit consent.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <ul className="list-disc pl-5 text-slate-700">
          <li>No medical history or sensitive health information is collected on this site.</li>
          <li>Contact forms require consent and are used only to respond to your enquiry.</li>
          <li>You may request correction or deletion of your information.</li>
        </ul>
      </div>
    </Section>
  );
}
