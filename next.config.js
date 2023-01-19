/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    appDir: true,
  },
}

module.exports = nextConfig
