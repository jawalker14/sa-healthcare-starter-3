import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section, Card } from '@/components/ui';
import Link from 'next/link';

export const generateMetadata = () => ({
  title: 'Services | Your Practice Name',
  description: 'Explore our healthcare services with clear, factual descriptions to help you understand available care options.',
});

export default function ServicesHub() {
  const services = [
    { slug: 'general-practice', title: 'General Practice', blurb: 'Comprehensive primary care and routine check-ups.' },
  { slug: 'womens-health', title: "Women's Health", blurb: 'Preventative screenings and respectful, holistic care.' },
    { slug: 'chronic-care', title: 'Chronic Care', blurb: 'Support for long-term conditions like diabetes and hypertension.' },
    { slug: 'preventative-care', title: 'Preventative Care', blurb: 'Vaccinations and health screenings based on clinical guidance.' },
  ];

  return (
    <Section title="Services" description="Clear, educational summaries. No endorsements, guarantees, or comparative claims.">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <Card key={s.slug} title={s.title} subtitle={s.blurb}>
              <Link className="text-navy-700 underline-offset-2 hover:underline" href={`/services/${s.slug}`}>
                Learn more
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
