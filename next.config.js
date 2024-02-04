/** @type {import('next').NextConfig} */

module.exports = {
  async headers() {
    return [
      /* {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      }, */
      {
        source: '/api/auth/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
      /* {
        source: "/:path*{/fonts}?",
        headers: [
          {
            key: "Cache-Control",
            value: "public,max-age=31536000,immutable",
          },
        ],
      },
      {
        source: "/:path*{/img}?",
        headers: [
          {
            key: "Cache-Control",
            value: "public,max-age=31536000,immutable",
          },
        ],
      }, */
    ];
  },
  generateEtags: false,
  pageExtensions: ['ts', 'tsx'],
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  images: {
    minimumCacheTTL: 86400,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

