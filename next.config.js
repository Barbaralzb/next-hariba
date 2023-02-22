/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
        },
        // {
        //   protocol: 'https',
        //   hostname: 'localhost',
        //   port: '1337',

        // },
        
    ],
  },
}

module.exports = nextConfig
