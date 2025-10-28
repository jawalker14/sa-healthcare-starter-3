import React from 'react';
import { Section } from '@/components/ui';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';

export const generateMetadata = () => ({
  title: 'Contact | Your Practice Name',
  description: 'Get in touch for general enquiries. Do not submit sensitive medical information via this form.',
});

export default function ContactPage() {
  return (
    <Section title="Contact Us" description="Have a question or need assistance? We’ll respond to your enquiry.">
      <Breadcrumbs />
      <ContactForm />
    </Section>
  );
}
