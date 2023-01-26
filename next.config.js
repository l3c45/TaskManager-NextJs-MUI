/** @type {import('next').NextConfig} */

//const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    appDir: true,
  },
});
module.exports = nextConfig;
