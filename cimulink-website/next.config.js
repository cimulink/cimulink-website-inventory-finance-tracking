/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Forces all Next.js routes to end with a /
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1400],
  },
  async rewrites() {
    return [
      // 1. Blog root without trailing slash
      {
        source: '/blog',
        destination: 'https://cimulink-blog.vercel.app/',
      },
      // 2. Blog root with trailing slash
      {
        source: '/blog/',
        destination: 'https://cimulink-blog.vercel.app/',
      },
      // 3. All deep-linked blog paths and assets (CSS, JS, images, etc.)
      {
        source: '/blog/:path*',
        destination: 'https://cimulink-blog.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig