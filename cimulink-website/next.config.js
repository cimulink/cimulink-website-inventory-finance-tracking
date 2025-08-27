/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for proper CSS handling
  images: {
    // Optimize image quality
    quality: 95,
    // Disable automatic format conversion to preserve original quality
    formats: ['image/webp', 'image/png'],
    // Allow larger image sizes for high-resolution displays
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1400],
  },
}

module.exports = nextConfig