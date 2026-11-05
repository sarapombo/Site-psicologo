import type { Metadata } from "next";
import { HomePage } from "../../components/HomePage";
import { alternates } from "../../lib/i18n";

// Página principal em inglês: /en
export const metadata: Metadata = {
  alternates: alternates("en"),
};

export default function Page() {
  return <HomePage lang="en" />;
}
