/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'fr'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
