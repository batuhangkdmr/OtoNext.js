/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudinary için domain izni
    domains: ['res.cloudinary.com'],
    // Modern remotePatterns (Next.js 14+)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    // Local images için format ayarları
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;

