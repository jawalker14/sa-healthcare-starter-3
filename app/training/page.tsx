import React from 'react';
import Layout from '@/components/Layout';
import TrainingMdx from '@/content/pages/training.mdx';

export default function TrainingPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <TrainingMdx />
      </div>
    </Layout>
  );
}
