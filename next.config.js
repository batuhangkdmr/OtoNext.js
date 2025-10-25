/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR (Server-Side Rendering) - Next.js 14 ile otomatik aktif
  reactStrictMode: true,
  
  // Production optimizasyonları
  swcMinify: true,
  
  // SSL ve Güvenlik Başlıkları
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ]
  },
  
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
  
  // Performans optimizasyonları
  compress: true,
  
  // Power by başlığını kaldır
  poweredByHeader: false,
  
  // SEO için Türkçe URL rewrites
  async rewrites() {
    return [
      {
        source: '/hakkimizda',
        destination: '/about',
      },
      {
        source: '/urunler',
        destination: '/products',
      },
      {
        source: '/urunler/:slug',
        destination: '/products/:slug',
      },
      {
        source: '/iletisim',
        destination: '/contact',
      },
    ];
  },
};

module.exports = nextConfig;

