/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
    images: {
        remotePatterns: [
          {
            hostname: 'images.unsplash.com',
          },
        ],
      },
};

export default nextConfig;
