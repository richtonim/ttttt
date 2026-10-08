import { SITE } from "@/lib/site";
import { platformPages, solutionPages, securityPages, developerPages } from "@/lib/pages";

export const dynamic = "force-static";

const staticPages = [
  "/",
  "/platform/",
  "/solutions/",
  "/security/",
  "/developers/",
  "/company/",
  "/company/about/",
  "/company/careers/",
  "/company/news/",
  "/contact/",
  "/demo/",
  "/login/",
  "/register/",
  "/pricing/",
];

export default function sitemap() {
  const dynamicPages = [
    ...Object.values(platformPages).map((p) => p.path),
    ...Object.values(solutionPages).map((p) => p.path),
    ...Object.values(securityPages).map((p) => p.path),
    ...Object.values(developerPages).map((p) => p.path),
  ];

  const allPages = [...staticPages, ...dynamicPages];

  return allPages.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
