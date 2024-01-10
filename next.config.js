/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  // basePath:"/agap2"

  // exportPathMap: async function (defaultPathMap) {
  //   return {
  //     'index.html': { page: '/index' },
  //     'agap2.html': { page: '/agap2' },
  //   };
  // },
  // trailingSlash: true,
};

module.exports = nextConfig;

// export default nextConfig
