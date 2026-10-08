import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants";

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function buildMetadata(page: PageSEO) {
  const title = page.title === SITE_NAME ? `${SITE_NAME} — Turn complexity into motion.` : `${page.title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${page.path}`;

  return {
    title,
    description: page.description,
    keywords: page.keywords ?? [
      "autonomous vehicles",
      "fleet intelligence",
      "vehicle data platform",
      "AI automotive",
      "predictive maintenance",
      "Entropy",
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "website" as const,
      locale: "en_US",
      images: [{ url: "/og-image.png", width: 512, height: 512, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: page.description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const defaultSEO = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export function buildJsonLd(type: "Organization" | "WebSite" | "WebPage", extra?: Record<string, unknown>) {
  const base = {
    "@context": "https://schema.org",
    "@type": type,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.svg`,
    ...extra,
  };
  return base;
}
