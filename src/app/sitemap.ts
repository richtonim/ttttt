import { MetadataRoute } from "next";
import { INSIGHTS } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soma.autos";

  const staticPages = [
    "",
    "/platform/",
    "/solutions/",
    "/technology/",
    "/company/",
    "/insights/",
    "/developers/",
    "/developers/api-access/",
    "/security/",
    "/careers/",
    "/contact/",
    "/login/",
    "/register/",
    "/privacy/",
    "/terms/",
    "/cookies/",
  ];

  const insightPages = INSIGHTS.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}/`,
    lastModified: new Date("2026-01-15"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...insightPages,
  ];
}
