import React from 'react';
import Compliance from '@/components/Compliance';
import { Hero, Section, Card, CTA } from '@/components/ui';

const HomePage = () => {
  return (
    <>
      <Hero
        kicker="Trusted, Compassionate Care"
        title={<>
          Modern healthcare with a human touch
        </>}
        subtitle="Quality care, clear communication, and accessible services for every patient."
        cta={<>
          <CTA>Book an appointment</CTA>
          <CTA variant="secondary" as="a" href="#services">Explore services</CTA>
        </>}
      />
      <Section id="services" title="Our Services" description="Evidence-based care across key specialties.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="General Practice" subtitle="Comprehensive primary care.">
            Routine check-ups, minor procedures, and family care.
          </Card>
          <Card title="Women's Health" subtitle="Respectful, holistic care.">
            Preventative screenings, contraception, and counseling.
          </Card>
          <Card title="Chronic Care" subtitle="Long-term condition support.">
            Diabetes, hypertension, and lifestyle management.
          </Card>
        </div>
      </Section>
      <div className="mx-auto max-w-6xl px-6 py-18">
        <Compliance />
      </div>
    </>
  );
};

export default HomePage;