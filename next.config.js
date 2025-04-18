/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kye-website',
  assetPrefix: '/kye-website/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 