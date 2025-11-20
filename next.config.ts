import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Next.js prefers the first one supported by the browser
  },
};

export default nextConfig;