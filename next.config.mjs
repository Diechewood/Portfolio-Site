/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/docs/:project',
          destination: '/docs/:project',
        },
      ]
    },
  };
  
  export default nextConfig;