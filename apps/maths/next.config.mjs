const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProduction ? { basePath: '/maths' } : {}),
  // Compress responses for faster transfer
  compress: true,

  // Optimize images
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 86400,
  },

  // Reduce JS bundle size — tree shake unused code
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        // Security headers for all routes
        source: '/(.*)',
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
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
      {
        // Cache headers for static assets
        source: '/:all*(svg|jpg|png|webp|woff2|woff|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
