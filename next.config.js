/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for lower memory usage
  experimental: {},
  turbopack: {},

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Webpack configuration for memory optimization
  webpack: (config, { isServer }) => {
    // Reduce memory usage during development
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
            },
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
