/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io", "cdn.sanity.io"],
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
