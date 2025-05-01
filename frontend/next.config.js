/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/specialties/general-physician-internal-medicine',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['example.com'],
  },
};

module.exports = nextConfig;