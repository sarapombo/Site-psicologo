/* eslint-disable @next/next/no-img-element -- o next/og (ImageResponse) só aceita <img> */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { textos } from "../content/site";
import { contentMap } from "../content/intervencoes";
import type { Language } from "./i18n";

// Imagens que aparecem ao partilhar o link (WhatsApp, Facebook, LinkedIn...).
// São geradas no build a partir dos textos do site, com as cores e o logo.

export const ogSize = { width: 1200, height: 630 };

const GREEN = "#4f5e38";
const ORANGE = "#d76d2d";
const CREAM = "#F8F7F2";

const root = process.cwd();
const asset = (path: string) => readFile(join(root, path));

async function fonts() {
  const [loraMedium, loraItalic, geistRegular, geistSemiBold] = await Promise.all([
    asset("assets/fonts/Lora-Medium.ttf"),
    asset("assets/fonts/Lora-Italic.ttf"),
    asset("assets/fonts/Geist-Regular.ttf"),
    asset("assets/fonts/Geist-SemiBold.ttf"),
  ]);
  return [
    { name: "Lora", data: loraMedium, weight: 500 as const, style: "normal" as const },
    { name: "Lora", data: loraItalic, weight: 400 as const, style: "italic" as const },
    { name: "Geist", data: geistRegular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: geistSemiBold, weight: 600 as const, style: "normal" as const },
  ];
}

// SVG de public/ como imagem embutida; opcionalmente todo a branco
async function svgDataUri(file: string, white = false) {
  let svg = (await asset(`public/${file}`)).toString("utf8");
  if (white) svg = svg.replace(/fill="(?!none)[^"]*"/g, 'fill="#FFFFFF"');
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

// Proporção do logo horizontal (viewBox 1665 x 306)
const LOGO_RATIO = 306 / 1665;

// --- Página principal: fundo verde, logo branco e slogan ---
export async function homeImage(lang: Language) {
  const logo = await svgDataUri("logo-nuno-pires-branco.svg");
  const logoWidth = 760;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${GREEN} 0%, #5f7046 100%)`,
          position: "relative",
        }}
      >
        <img src={logo} width={logoWidth} height={Math.round(logoWidth * LOGO_RATIO)} alt="" />
        <div style={{ width: 72, height: 4, background: ORANGE, marginTop: 56, marginBottom: 40 }} />
        <div style={{ fontFamily: "Lora", fontStyle: "italic", fontSize: 46, color: "rgba(255,255,255,0.88)" }}>
          {textos.footer.slogan[lang]}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontFamily: "Geist",
            fontWeight: 600,
            fontSize: 20,
            letterSpacing: 6,
            color: ORANGE,
          }}
        >
          WWW.NUNO-PIRES.COM
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() }
  );
}

// --- Intervenção: título, etiquetas e faixa verde com o símbolo NP ---
export async function interventionImage(id: string, lang: Language) {
  const item = contentMap[id];
  const [logo, symbol] = await Promise.all([
    svgDataUri("logo-nuno-pires.svg"),
    svgDataUri("logo-nuno-pires-simbolo.svg", true),
  ]);
  const title = item.title[lang];
  const titleSize = title.length > 40 ? 58 : title.length > 22 ? 70 : 92;
  const logoWidth = 330;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: CREAM }}>
        {/* Conteúdo */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          <img src={logo} width={logoWidth} height={Math.round(logoWidth * LOGO_RATIO)} alt="" />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Lora", fontWeight: 500, fontSize: titleSize, lineHeight: 1.1, color: GREEN }}>
              {title}
            </div>
            <div style={{ width: 72, height: 4, background: ORANGE, marginTop: 32, marginBottom: 32 }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {item.highlights[lang].map((h) => (
                <div
                  key={h}
                  style={{
                    fontFamily: "Geist",
                    fontWeight: 600,
                    fontSize: 16,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: GREEN,
                    background: "#FFFFFF",
                    border: "2px solid #E5E2D9",
                    borderRadius: 999,
                    padding: "10px 20px",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontFamily: "Geist", fontWeight: 600, fontSize: 18, letterSpacing: 5, color: ORANGE }}>
            WWW.NUNO-PIRES.COM
          </div>
        </div>

        {/* Faixa verde com o símbolo */}
        <div
          style={{
            width: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(180deg, ${GREEN} 0%, #5f7046 100%)`,
          }}
        >
          <img src={symbol} width={200} height={200} alt="" style={{ opacity: 0.95 }} />
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() }
  );
}
