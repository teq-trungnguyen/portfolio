import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/nextjs-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/nextjs-portfolio/" : "",
};

export default nextConfig;
