import type { Metadata } from "next";
import { HomeRoute, homeMetadata } from "../../lib/routes";

// Página principal em inglês: /en
export const metadata: Metadata = homeMetadata("en");

export default function Page() {
  return <HomeRoute lang="en" />;
}
