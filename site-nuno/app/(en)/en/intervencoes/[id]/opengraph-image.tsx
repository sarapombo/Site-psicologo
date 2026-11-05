import { interventionImage, ogSize } from "../../../../lib/og";
import { interventionStaticParams } from "../../../../lib/routes";
import { textos } from "../../../../content/site";

// Imagem de partilha de cada intervenção em inglês
export const alt = textos.meta.title.en;
export const size = ogSize;
export const contentType = "image/png";
export const dynamicParams = false;
export const generateStaticParams = interventionStaticParams;

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return interventionImage(id, "en");
}
