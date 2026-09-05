import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
  images: {
    unoptimized: true, // Required for static exports when using <Image /> without a custom loader
  },
};

export default nextConfig;