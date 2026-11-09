import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow development assets and HMR through Arena's preview proxy.
  allowedDevOrigins: ['*.e2b.app'],
};

export default nextConfig;
