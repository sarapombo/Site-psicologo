import type { Metadata } from "next";
import { HomeRoute, homeMetadata } from "../lib/routes";

// Página principal em português: /
export const metadata: Metadata = homeMetadata("pt");

export default function Page() {
  return <HomeRoute lang="pt" />;
}
