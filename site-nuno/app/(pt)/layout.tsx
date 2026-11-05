import type { Metadata } from "next";
import "../globals.css";
import { geistSans, geistMono } from "../lib/fonts";
import { SITE_URL } from "../lib/i18n";

// Layout da versão portuguesa (/ e /intervencoes/...)
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nuno Pires - Psicólogo Clínico & Psicoterapeuta",
    template: "%s | Nuno Pires",
  },
  description: "Psicólogo Clínico & Psicoterapeuta — Integração Emocional e Desenvolvimento Pessoal",
  icons: {
    // O ?v=2 força o browser a ler o ficheiro de novo e ignorar o antigo que está em cache
    icon: "/logo-nuno-pires-simbolo.svg?v=2",
    shortcut: "/logo-nuno-pires-simbolo.svg?v=2",
    apple: "/logo-nuno-pires-simbolo.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#d76d2d]/30`}>
        {children}
      </body>
    </html>
  );
}
