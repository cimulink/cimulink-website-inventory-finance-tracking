/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1400],
  },
  async rewrites() {
    return [
      // Blog page routes
      {
        source: '/blog',
        destination: 'https://cimulink-blog.vercel.app/',
      },
      // Blog content paths (articles, folders)
      {
        source: '/blog/:path((?!static|assets).*)',
        destination: 'https://cimulink-blog.vercel.app/:path*',
      },
      // Static assets
      {
        source: '/blog/static/:path*',
        destination: 'https://cimulink-blog.vercel.app/static/:path*',
      },
      // RSS Feed
      {
        source: '/blog/index.xml',
        destination: 'https://cimulink-blog.vercel.app/index.xml',
      },
    ]
  },
}

module.exports = nextConfig