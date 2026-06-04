import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enabled after migrating OG images to file-based metadata
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
