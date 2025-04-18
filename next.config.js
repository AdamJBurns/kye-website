/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kye-website',
  assetPrefix: '/kye-website/',
  images: {
    unoptimized: true,
  },
  // Disable prefetching for static export
  experimental: {
    optimizeCss: true,
  },
  // Disable prefetching
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 