import withMDX from '@next/mdx';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMdx = withMDX({ extension: /\.mdx?$/ });

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  outputFileTracingRoot: __dirname,
  experimental: {
    // keep default settings; placeholder to ensure stable options
  },
};

export default withMdx(nextConfig);