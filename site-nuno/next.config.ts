import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fotos servidas em AVIF/WebP (muito mais leves que PNG/JPEG), no tamanho certo para cada ecrã
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // O CSS vai dentro do HTML: a página aparece sem esperar por um ficheiro CSS à parte
    inlineCss: true,
  },
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
