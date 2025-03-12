/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Enable static exports
  output: 'export',
  // Configure environment variables that should be available on the client
  env: {
    ADSENSE_CLIENT: process.env.ADSENSE_CLIENT,
  },
}

module.exports = nextConfig 