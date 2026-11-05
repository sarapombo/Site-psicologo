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
    icons: {
      // O ?v=2 força o browser a ler o ficheiro de novo e ignorar o antigo que está em cache
      icon: "/logo-nuno-pires-simbolo.svg?v=2",
      shortcut: "/logo-nuno-pires-simbolo.svg?v=2",
      apple: "/logo-nuno-pires-simbolo.svg?v=2",
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
