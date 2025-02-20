/** @type {import('next').NextConfig} */

import createMDXPlugin from "@next/mdx";
import { rehypePlugins, remarkPlugins } from "renoun/mdx";

const withMDX = createMDXPlugin({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
  },
});

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack(config) {
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js"],
    };
    return config;
  },
};

export default withMDX(nextConfig);
