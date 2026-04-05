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
      // Quartz root assets (Handles relative path requests when /blog has no trailing slash)
      {
        source: '/index.css',
        destination: 'https://cimulink-blog.vercel.app/index.css',
      },
      {
        source: '/prescript.js',
        destination: 'https://cimulink-blog.vercel.app/prescript.js',
      },
      {
        source: '/postscript.js',
        destination: 'https://cimulink-blog.vercel.app/postscript.js',
      },
      {
        source: '/spa.js',
        destination: 'https://cimulink-blog.vercel.app/spa.js',
      },
      // Root static folder fallback for Quartz icons, fonts, etc.
      {
        source: '/static/:path*',
        destination: 'https://cimulink-blog.vercel.app/static/:path*',
      },
      // Blog content paths (articles, folders)
      {
        source: '/blog/:path((?!static|assets).*)',
        destination: 'https://cimulink-blog.vercel.app/:path*',
      },
      // Static assets under /blog/
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