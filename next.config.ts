import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Canonical URL form: always with trailing slash
  trailingSlash: true,

  // Images: unoptimized required for static export
  images: {
    unoptimized: true,
  },
}

export default nextConfig
