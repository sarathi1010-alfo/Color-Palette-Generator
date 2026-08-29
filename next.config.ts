import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Disabled to allow dynamic OG image generation via @vercel/og
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/palettes/analogous-blue', destination: '/palettes/theory/analogous-blue' },
      { source: '/palettes/triadic-red', destination: '/palettes/theory/triadic-red' },
      { source: '/palettes/complementary-green', destination: '/palettes/theory/complementary-green' },
      { source: '/palettes/monochromatic-purple', destination: '/palettes/theory/monochromatic-purple' },
      { source: '/palettes/neutral-warm', destination: '/palettes/theory/neutral-warm' }
    ];
  }
};

export default nextConfig;
