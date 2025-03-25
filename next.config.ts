import type { NextConfig } from "next";

const path = require('path');

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/app/_variables.scss";`, 
  },
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
};

export default nextConfig;
