import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
};

export default nextConfig;
