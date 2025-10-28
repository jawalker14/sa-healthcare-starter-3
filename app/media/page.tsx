import React from 'react';
import MediaMdx from '@/content/pages/media.mdx';
import { Section } from '@/components/ui';
import Breadcrumbs from '@/components/Breadcrumbs';

export const generateMetadata = () => ({
  title: 'Media & Press | Your Practice Name',
  description: 'Updates and media information. Educational and factual content only.',
});

export default function MediaPage() {
  return (
    <Section title="Media & Press" description="Announcements and media mentions.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <MediaMdx />
      </div>
    </Section>
  );
}
