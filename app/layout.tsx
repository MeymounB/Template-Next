// Ce fichier permet de gérer le layout de la page principale

import { Providers } from "@/providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import "@/styles/_index.scss";

import { Canonical } from "@/components/Canonical";
import { getPageMetadata } from "@/utils/meta/metadata";
import { JsonLdScript } from "@/components/JsonLd";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "/";
  const pageMetadata = getPageMetadata(pathname);

  // On supprime le canonical des métadonnées pour éviter le conflit
  const { alternates, ...metadataWithoutCanonical } = pageMetadata;

  return {
    ...metadataWithoutCanonical,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <Canonical />
      </head>
      <body className={`overflow-x-hidden`} id="root">
        <div className="z-1 relative">
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </div>
        <JsonLdScript />
      </body>
    </html>
  );
}
