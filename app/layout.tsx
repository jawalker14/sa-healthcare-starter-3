import './globals.css';
import Layout from '@/components/Layout';
import ConsentNotice from '@/components/ConsentNotice';
import { LocalBusiness } from '@/components/Schema';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
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