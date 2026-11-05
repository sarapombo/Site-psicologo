import type { Metadata } from "next";
import "../globals.css";
import { geistSans, geistMono } from "../lib/fonts";
import { SITE_URL } from "../lib/i18n";

// Layout da versão inglesa (/en e /en/intervencoes/...)
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nuno Pires - Clinical Psychologist & Psychotherapist",
    template: "%s | Nuno Pires",
  },
  description: "Clinical Psychologist & Psychotherapist — Emotional Integration and Personal Development",
  icons: {
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
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#d76d2d]/30`}>
        {children}
      </body>
    </html>
  );
}
