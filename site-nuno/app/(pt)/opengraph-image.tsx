import { homeImage, ogSize } from "../lib/og";
import { textos } from "../content/site";

// Imagem de partilha da página principal em português
export const alt = textos.meta.title.pt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return homeImage("pt");
}
