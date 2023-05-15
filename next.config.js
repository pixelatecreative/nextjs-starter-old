const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
