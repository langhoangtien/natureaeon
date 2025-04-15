import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.shopify.com", "img.thesitebase.net", "localhost"], // 👈 Thêm Shopify CDN vào đây
  },
  output: "standalone",
};

export default nextConfig;
