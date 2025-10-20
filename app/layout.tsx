import React from 'react';
import './globals.css';
import Layout from '@/components/Layout';
import ConsentNotice from '@/components/ConsentNotice';
import { LocalBusiness } from '@/components/Schema';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Layout>
          <LocalBusiness />
          {children}
          <ConsentNotice />
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;