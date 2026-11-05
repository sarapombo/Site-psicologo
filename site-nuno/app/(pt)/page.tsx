import type { Metadata } from "next";
import { HomePage } from "../components/HomePage";
import { alternates } from "../lib/i18n";

// Página principal em português: /
export const metadata: Metadata = {
  alternates: alternates("pt"),
};

export default function Page() {
  return <HomePage lang="pt" />;
}
