import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/nextjs-portfolio" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/nextjs-portfolio/" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === "production" ? "/nextjs-portfolio" : "",
  },
};

export default nextConfig;
