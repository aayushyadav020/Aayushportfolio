// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,      // Enforces strict mode for React
  swcMinify: true,           // Enables SWC-based minification
  images: {
    domains: ['example.com'],  // Replace with your allowed image domains
  },
  experimental: {
    outputStandalone: true,    // Enables output as standalone bundle
  },
};

module.exports = nextConfig;
