/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enable React Strict Mode for development
  swcMinify: true,        // Use the SWC compiler for minification
  images: {
    domains: ['example.com'],  // Add any external image domains you need to allow
  },
  experimental: {
    outputStandalone: true,  // Netlify requires the output to be standalone
  },
};

export default nextConfig;

