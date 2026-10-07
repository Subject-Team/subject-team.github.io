/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'SubjectTeamWebsite';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? `/${repoName}` : ''),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
