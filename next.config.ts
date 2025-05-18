// import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/<repo>" : "",
  assetPrefix: isProd ? "/<repo>/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
