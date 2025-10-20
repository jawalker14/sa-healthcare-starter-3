import withMDX from '@next/mdx';

const withMdx = withMDX({ extension: /\.mdx?$/ });

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMdx(nextConfig);