/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bjaf.se", "tinybuddy.se"],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;
