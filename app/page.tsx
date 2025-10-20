import React from 'react';
import Layout from '@/components/Layout';
import HomeMdx from '@/content/pages/index.mdx';

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <HomeMdx />
      </div>
    </Layout>
  );
};

export default HomePage;