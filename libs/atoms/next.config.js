/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.monday.com',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
