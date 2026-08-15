/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Skip type checking during build (types are checked in IDE)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Performance optimizations
  compress: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize client-side bundle
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk for react/react-dom
          react: {
            name: 'react-vendors',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Framer Motion
          motion: {
            name: 'framer-motion',
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            priority: 30,
            enforce: true,
          },
          // React Icons
          icons: {
            name: 'react-icons',
            test: /[\\/]node_modules[\\/]react-icons[\\/]/,
            priority: 25,
            enforce: true,
          },
          // Other libraries
          lib: {
            name: 'lib-vendors',
            test: /[\\/]node_modules[\\/](react-scroll|react-type-animation)[\\/]/,
            priority: 20,
            enforce: true,
          },
          // Common modules
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 10,
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
