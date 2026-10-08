import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/platform/",
  "/solutions/",
  "/developers/",
  "/security/",
  "/company/",
  "/careers/",
  "/contact/",
  "/login/",
  "/register/",
  "/pricing/",
  "/demo/",
  "/explore/",
  "/privacy/",
  "/terms/",
];

export default function sitemap() {
  const lastModified = new Date("2026-01-01");

  return routes.map((route) => ({
    url: `${SITE.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : 0.8,
  }));
}
