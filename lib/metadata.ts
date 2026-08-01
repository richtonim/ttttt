import type { Metadata } from "next";
import type { Locale } from "./i18n/locales";

const SITE_URL = "https://nextlayer.lat";

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  locale = "en",
  noIndex = false,
}: PageMeta): Metadata {
  const localePrefix = locale === "en" ? "" : `/${locale}`;
  const canonical = `${SITE_URL}${localePrefix}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" ? title : `${title} | NextLayer`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}${path === "/" ? "" : path}`,
        zh: `${SITE_URL}/zh${path === "/" ? "" : path}`,
        es: `${SITE_URL}/es${path === "/" ? "" : path}`,
        pt: `${SITE_URL}/pt${path === "/" ? "" : path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: "NextLayer",
      locale: locale === "en" ? "en_US" : locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NextLayer",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo-icon.svg`,
    description:
      "Build AI agents, connect company knowledge, automate workflows, and manage multiple AI models through one secure platform.",
    sameAs: [],
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NextLayer",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Enterprise AI platform for agents, knowledge bases, workflows, and multi-model gateway.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Developer tier — placeholder pricing",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NextLayer",
    url: SITE_URL,
    description: "The intelligent layer for modern business.",
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export { SITE_URL };
