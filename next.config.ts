// import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
console.log(isProd);
module.exports = {
  output: "export",
  basePath: isProd ? "/tic-tac-toe" : "",
  assetPrefix: isProd ? "/tic-tac-toe/" : "",
  trailingSlash: true,
};
