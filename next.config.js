/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.npedigihouse.tech'],
  },
  httpAgentOptions: {
    keepAlive: false,
  },
};

module.exports = nextConfig;
