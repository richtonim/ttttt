import { SiteLayout } from "@/components/layout/site-layout";
import { DocsPage } from "@/components/pages/docs-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Documentation",
  description: "Guides and references for building with NextLayer.",
  path: "/docs",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <DocsPage  />
    </SiteLayout>
  );
}
