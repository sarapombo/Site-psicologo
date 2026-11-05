import type { Metadata } from "next";
import "../globals.css";
import { geistSans, geistMono } from "../lib/fonts";
import { layoutMetadata } from "../lib/metadata";

// Layout da versão portuguesa (/ e /intervencoes/...)
export const metadata: Metadata = layoutMetadata("pt");

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
