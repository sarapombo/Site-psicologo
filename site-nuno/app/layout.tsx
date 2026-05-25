import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuno Pires - Psicólogo Clínico & Psicoterapeuta",
  description: "Psicólogo Clínico & Psicoterapeuta — Integração Emocional e Desenvolvimento Pessoal",
  icons: {
    // O ?v=1 força o browser a ler o ficheiro de novo e ignorar o antigo que está em cache
    icon: "/logo-simbolo.svg?v=1",
    shortcut: "/logo-simbolo.svg?v=1",
    apple: "/logo-simbolo.svg?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#d76d2d]/30`}>
        {children}
      </body>
    </html>
  );
}