module.exports = {
  reactStrictMode: false,
  // image
  images: {
    domains: ["pincock.store", "newdok.store", "oh-lolly-day.com"],
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
