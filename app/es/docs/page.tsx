import { SiteLayout } from "@/components/layout/site-layout";
import { DocsPage } from "@/components/pages/docs-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "DocsPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/docs",
  locale: "es",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <DocsPage locale="es" />
    </SiteLayout>
  );
}
