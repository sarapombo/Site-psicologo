import type { Metadata } from "next";
import { textos } from "../content/site";
import { type Language, SITE_URL, alternates, localePath } from "./i18n";

// Metadados comuns aos layouts PT e EN (favicon, endereço base, título por defeito)
export function layoutMetadata(lang: Language): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: textos.meta.title[lang],
      template: "%s | Nuno Pires",
    },
    description: textos.meta.description[lang],
    // Ícones: o favicon.ico (48x48, em app/) é adicionado automaticamente pelo Next.js.
    // O PNG de 192px é o que o Google prefere para os resultados de pesquisa;
    // o apple-icon.png é o ícone do iPhone ao adicionar o site ao ecrã principal.
    icons: {
      icon: [
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/logo-nuno-pires-simbolo.svg?v=2", type: "image/svg+xml" },
      ],
      apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    },
  };
}

// Metadados de cada página: Google (título, descrição, hreflang) e partilha do link
// (Open Graph: WhatsApp, Facebook, LinkedIn...). A imagem de partilha vem dos
// ficheiros opengraph-image.tsx.
export function pageMetadata({
  lang,
  path = "/",
  title,
  description = textos.meta.description[lang],
}: {
  lang: Language;
  path?: string;
  title?: string;
  description?: string;
}): Metadata {
  const fullTitle = title ? `${title} | Nuno Pires` : textos.meta.title[lang];

  return {
    ...(title && { title }),
    description,
    alternates: alternates(lang, path),
    openGraph: {
      type: "website",
      siteName: "Nuno Pires",
      url: localePath(lang, path),
      title: fullTitle,
      description,
      locale: lang === "pt" ? "pt_PT" : "en_US",
      alternateLocale: lang === "pt" ? ["en_US"] : ["pt_PT"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
