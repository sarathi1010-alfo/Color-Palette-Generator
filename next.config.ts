import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Disabled to allow dynamic OG image generation via @vercel/og
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
