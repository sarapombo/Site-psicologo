import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InterventionPage } from "../../../components/InterventionPage";
import { contentMap, interventionIds, interventionDescription } from "../../../content/intervencoes";
import { alternates } from "../../../lib/i18n";

// Página de cada intervenção em português: /intervencoes/[id]
type Props = { params: Promise<{ id: string }> };

// Gera todas as páginas no build; endereços que não existem dão 404
export const dynamicParams = false;
export function generateStaticParams() {
  return interventionIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = contentMap[id];
  if (!item) return {};
  return {
    title: item.title.pt,
    description: interventionDescription(item, "pt"),
    alternates: alternates("pt", `/intervencoes/${id}`),
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  if (!contentMap[id]) notFound();
  return <InterventionPage id={id} lang="pt" />;
}
