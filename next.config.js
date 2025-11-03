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
    // Modern image formats (WebP, AVIF)
    formats: ['image/webp', 'image/avif'],
    // Image optimization settings
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 60 seconds
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
        source: '/iletisim',
        destination: '/contact',
      },
    ];
  },
};

module.exports = nextConfig;

