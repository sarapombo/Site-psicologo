import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Links antigos com ?lang=en passam para os novos endereços em /en
  async redirects() {
    const toEnglish = [{ type: "query" as const, key: "lang", value: "en" }];
    return [
      { source: "/", has: toEnglish, destination: "/en", permanent: true },
      { source: "/intervencoes/:id", has: toEnglish, destination: "/en/intervencoes/:id", permanent: true },
    ];
  },
};

export default nextConfig;
