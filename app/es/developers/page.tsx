import { SiteLayout } from "@/components/layout/site-layout";
import { DevelopersPage } from "@/components/pages/developers-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "DevelopersPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/developers",
  locale: "es",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <DevelopersPage locale="es" />
    </SiteLayout>
  );
}
