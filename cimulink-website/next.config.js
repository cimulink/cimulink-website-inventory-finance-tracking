/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Forces all Next.js routes to end with a /
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1400],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.cimulink.com/',
        permanent: true, // 308 permanent redirect
      },
      {
        source: '/blog/',
        destination: 'https://blog.cimulink.com/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
