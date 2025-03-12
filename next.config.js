/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/trendiz',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  assetPrefix: '/trendiz/'
}

module.exports = nextConfig 