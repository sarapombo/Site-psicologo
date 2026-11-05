import {
  InterventionRoute,
  interventionMetadata,
  interventionStaticParams,
  type InterventionProps,
} from "../../../lib/routes";

// Página de cada intervenção em português: /intervencoes/[id]
// Endereços que não estão em content/intervencoes.ts dão 404
export const dynamicParams = false;
export const generateStaticParams = interventionStaticParams;

export function generateMetadata(props: InterventionProps) {
  return interventionMetadata(props, "pt");
}

export default function Page(props: InterventionProps) {
  return <InterventionRoute {...props} lang="pt" />;
}
