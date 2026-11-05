import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "../components/HomePage";
import { InterventionPage } from "../components/InterventionPage";
import { contentMap, interventionIds, interventionDescription } from "../content/intervencoes";
import { pageMetadata } from "./metadata";
import { businessJsonLd } from "./structuredData";
import type { Language } from "./i18n";

// Código partilhado pelas páginas PT e EN, para não o repetir em cada page.tsx

// --- Página principal (/ e /en) ---

export function homeMetadata(lang: Language): Metadata {
  return pageMetadata({ lang });
}

export function HomeRoute({ lang }: { lang: Language }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(lang)) }}
      />
      <HomePage lang={lang} />
    </>
  );
}

// --- Páginas das intervenções (/intervencoes/[id] e /en/intervencoes/[id]) ---

export type InterventionProps = { params: Promise<{ id: string }> };

// Gera todas as páginas no build
export function interventionStaticParams() {
  return interventionIds.map((id) => ({ id }));
}

export async function interventionMetadata({ params }: InterventionProps, lang: Language): Promise<Metadata> {
  const { id } = await params;
  const item = contentMap[id];
  if (!item) return {};
  return pageMetadata({
    lang,
    path: `/intervencoes/${id}`,
    title: item.title[lang],
    description: interventionDescription(item, lang),
  });
}

export async function InterventionRoute({ params, lang }: InterventionProps & { lang: Language }) {
  const { id } = await params;
  if (!contentMap[id]) notFound();
  return <InterventionPage id={id} lang={lang} />;
}
