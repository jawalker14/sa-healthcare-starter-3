import React from 'react';
import Layout from '@/components/Layout';
import CareersMdx from '@/content/pages/careers.mdx';

export default function CareersPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <CareersMdx />
      </div>
    </Layout>
  );
}
