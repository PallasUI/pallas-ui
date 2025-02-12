/** @type {import('next').NextConfig} */

import createMDXPlugin from "@next/mdx";

const withMDX = createMDXPlugin();

const nextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Configure path aliases to match tsconfig
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": "./src",
    };
    return config;
  },

  // Experimental features
  transpilePackages: ["renoun"],
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
