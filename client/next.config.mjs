/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['st1.latestly.com'], // Allow images from this domain
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default nextConfig
