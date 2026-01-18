/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return []
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
