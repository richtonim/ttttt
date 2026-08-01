import { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "./constants";

export function createMetadata({
  title,
  description,
  path = "",
  image = "/og-image.png",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Intelligence in Motion.`;
  const desc = description || SITE_DESCRIPTION;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "automotive AI",
      "autonomous mobility",
      "vehicle intelligence",
      "fleet management AI",
      "automotive data platform",
      "connected vehicles",
      "predictive maintenance",
      "SOMA Autos",
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SOMA Autos",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: SITE_DESCRIPTION,
    slogan: "Intelligence in Motion.",
    foundingDate: "2026",
    sameAs: [
      "https://linkedin.com/company/soma-autos",
      "https://x.com/somaautos",
      "https://github.com/soma-autos",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@soma.autos",
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SOMA Autos",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: "SOMA Autos",
    },
  };
}
