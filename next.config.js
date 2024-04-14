/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@kitware/vtk.js"]);
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: 'empty'
      };
    }

    // config.resolve.alias['@components']= path.join(__dirname, 'components');
    // console.log(config)

    // config.resolve = {
    //   "extensions": [".web.js", ".js"]
    // }

    return config;
  },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//         config.node = {
//             net: 'empty'
//         };
//     }

//     return config;
// }
  // basePath:"/agap2"

  // exportPathMap: async function (defaultPathMap) {
  //   return {
  //     'index.html': { page: '/index' },
  //     'agap2.html': { page: '/agap2' },
  //   };
  // },
  // trailingSlash: true,
};

module.exports = withTM(nextConfig);

// export default nextConfig
