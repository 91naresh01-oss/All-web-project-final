import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/english/:path*',
        destination: 'http://localhost:3001/english/:path*',
      },
      {
        source: '/gujarati/:path*',
        destination: 'http://localhost:3002/gujarati/:path*',
      },
      {
        source: '/maths/:path*',
        destination: 'http://localhost:3003/maths/:path*',
      },
    ];
  },
};

export default nextConfig;
