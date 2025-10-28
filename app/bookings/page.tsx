import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section, CTA } from '@/components/ui';
import settings from '@/content/data/settings.json';

export const generateMetadata = () => ({
  title: 'Bookings | Your Practice Name',
  description: 'Book an appointment through our approved third-party system. We do not collect medical information on this site.',
});

export default function BookingsPage() {
  const bookingUrl = (settings as any).booking?.url || '#';
  return (
    <Section title="Bookings" description="You will be redirected to a secure booking provider.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <p className="text-slate-700">For your privacy, bookings are handled via a secure third-party platform.</p>
        <div className="mt-4">
          <CTA as="a" href={bookingUrl}>Go to booking portal</CTA>
        </div>
      </div>
    </Section>
  );
}
