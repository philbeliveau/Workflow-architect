import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://newcode.ai'),
  title: "NEWCODE - Développement IA Accéléré",
  description: "NEWCODE vous aide à construire et déployer vos solutions IA. Tout le monde mérite l'accès aux capacités logicielles modernes.",
};

// This page only renders when `notFound()` is called from a
// deeper page. It renders the global not found page.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}