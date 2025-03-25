import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables `next export`
  basePath: '/my-next-app', // Change to your repo name
  assetPrefix: '/my-next-app/', // Important for GitHub Pages
};

export default nextConfig;
