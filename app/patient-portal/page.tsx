import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section, CTA } from '@/components/ui';

export const generateMetadata = () => ({
  title: 'Patient Portal | Your Practice Name',
  description: 'Information on accessing a secure external patient portal if your provider offers one.',
});

export default function PatientPortalPage() {
  return (
    <Section title="Patient Portal" description="We use a secure external system for any patient portal access.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <p className="text-slate-700">For security and privacy, any patient portal is hosted by a third-party provider. No portal data is stored on this site.</p>
        <div className="mt-4">
          <CTA as="a" href="#" aria-disabled>
            Portal link (to be configured)
          </CTA>
        </div>
      </div>
    </Section>
  );
}
