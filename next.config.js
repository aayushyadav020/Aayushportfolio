// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],  // Replace with your image domains
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
