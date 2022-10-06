/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
      return [
        {
          source: "/:path*{/fonts}?",
          headers: [
            {
              key: "Cache-Control",
              value: "public,max-age=86400,immutable",
            },
          ],
        },
        {
          source: "/:path*{/img}?",
          headers: [
            {
              key: "Cache-Control",
              value: "public,max-age=86400,immutable",
            },
          ],
        },
      ];
    },
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
    /* i18n: {
      locales: ['es', 'en'],
      defaultLocale: 'en',
      localeDetection: true,
    }, */
    trailingSlash: true,
    reactStrictMode: true,
  };
