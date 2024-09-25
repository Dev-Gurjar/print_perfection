/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
    images: {
        remotePatterns: [

          {
            hostname: 'asia.daughtersofindia.net', 
            // hostname:'readymadeui.com',
          },
    
        ],
      },
};

export default nextConfig;
