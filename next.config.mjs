/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        hostname: 'asia.daughtersofindia.net',
      },
      {
        hostname: 'wallpapers.com',
      },
      {
        hostname: 'www.daughtersofindia.net'
      }
    ],
  },
};

export default nextConfig;
