import type { Metadata } from "next";
import { SITE } from "./site";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = SITE.description,
  path = "",
  noIndex = false,
}: SeoProps): Metadata {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const url = `${SITE.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [{ url: "/logo.png", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/logo.png"],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    keywords: [
      "AI data security",
      "privacy governance",
      "enterprise data protection",
      "access control",
      "threat detection",
      "compliance automation",
      "zero trust",
      "datawall",
    ],
  };
}
