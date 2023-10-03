/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/sign-in',
        destination: 'https://moxo-quill.vercel.app/api/auth/login',
        permanent: true,
      },
      {
        source: '/sign-up',
        destination: 'https://moxo-quill.vercel.app/api/auth/register',
        permanent: true,
      },
    ]
  },

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack }
  ) => {
    config.resolve.alias.canvas = false
    config.resolve.alias.encoding = false
    return config
  },
}

module.exports = nextConfig
