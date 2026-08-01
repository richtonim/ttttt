import { SiteLayout } from "@/components/layout/site-layout";
import { AboutPage } from "@/components/pages/about-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "AboutPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/about",
  locale: "es",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <AboutPage locale="es" />
    </SiteLayout>
  );
}
