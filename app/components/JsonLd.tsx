"use client";

import Script from "next/script";
import { jsonLd } from "@/utils/meta/jsonLd";

export function JsonLdScript() {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
