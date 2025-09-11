import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
        port: "",
        pathname: "/video/**",
      },
      {
        protocol: "https",
        hostname: "vimeocdn.com",
        port: "",
        pathname: "/video/**",
      },
      {
        protocol: "https",
        hostname: "player.vimeo.com",
        port: "",
        pathname: "/video/**",
      },
      {
        protocol: "https",
        hostname: "**.vimeo.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
