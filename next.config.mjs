/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
    images: {
        remotePatterns: [

          {
            hostname: 'asia.daughtersofindia.net',
          },
    
        ],
      },
};

export default nextConfig;
