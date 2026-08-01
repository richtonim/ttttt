import { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://nextlayer.lat";

const routes = [
  "",
  "/platform",
  "/platform/agent-studio",
  "/platform/model-gateway",
  "/platform/knowledge-layer",
  "/platform/workflows",
  "/platform/observability",
  "/solutions",
  "/solutions/customer-support",
  "/solutions/knowledge-assistant",
  "/solutions/document-intelligence",
  "/solutions/sales-automation",
  "/solutions/data-analysis",
  "/solutions/developer-platform",
  "/developers",
  "/docs",
  "/pricing",
  "/integrations",
  "/templates",
  "/blog",
  "/about",
  "/contact",
  "/security",
  "/careers",
  "/privacy",
  "/terms",
  "/cookies",
  "/early-access",
  "/book-demo",
];

const locales = ["", "/zh", "/es", "/pt"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE_URL}${locale}${route}`,
        lastModified: new Date("2026-01-01"),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
