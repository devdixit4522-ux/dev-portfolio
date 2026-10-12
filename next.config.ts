import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Case studies are static pages from the Case Study System (public/work/<slug>/index.html)
  async rewrites() {
    return [{ source: "/work/:slug", destination: "/work/:slug/index.html" }];
  },
};

export default nextConfig;
