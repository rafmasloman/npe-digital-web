/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.npedigihouse.tech'],
    // domains: ['localhost'],
  },
  httpAgentOptions: {
    keepAlive: false,
  },
};

module.exports = nextConfig;
