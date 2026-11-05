import type { MetadataRoute } from "next";
import { interventionIds } from "./content/intervencoes";
import { SITE_URL, localePath } from "./lib/i18n";

// sitemap.xml: lista todas as páginas (PT e EN) para o Google
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...interventionIds.map((id) => `/intervencoes/${id}`)];

  return paths.flatMap((path) =>
    (["pt", "en"] as const).map((lang) => ({
      url: SITE_URL + localePath(lang, path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          "pt-PT": SITE_URL + localePath("pt", path),
          en: SITE_URL + localePath("en", path),
        },
      },
    }))
  );
}
