import withMDX from '@next/mdx';

const withMdx = withMDX({ extension: /\.mdx?$/ });

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    // keep default settings; placeholder to ensure stable options
  },
};

export default withMdx(nextConfig);