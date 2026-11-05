import { homeImage, ogSize } from "../../lib/og";
import { textos } from "../../content/site";

// Imagem de partilha da página principal em inglês
export const alt = textos.meta.title.en;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return homeImage("en");
}
