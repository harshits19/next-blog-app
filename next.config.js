/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/harshits19/next-blog-posts/main/images/**',
          },
        ],
      },
}

module.exports = nextConfig
