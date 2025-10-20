import React from 'react';
import Layout from '@/components/Layout';
import MediaMdx from '@/content/pages/media.mdx';

export default function MediaPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <MediaMdx />
      </div>
    </Layout>
  );
}
