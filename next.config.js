module.exports = {
  reactStrictMode: false,
  // image
  images: {
    domains: ["pincock.shop", "newdok.shop", "oh-lolly-day.com"],
  },
  // svgr
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
