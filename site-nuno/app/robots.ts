import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/i18n";

// robots.txt: permite indexar todo o site e indica onde está o sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
