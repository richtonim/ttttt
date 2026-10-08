import { SiteLayout } from "@/components/layout/site-layout";
import { TemplatesPage } from "@/components/pages/templates-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Templates",
  description: "Start faster with pre-built agent and workflow templates.",
  path: "/templates",
});

export default function Page() {
  return (
    <SiteLayout>
      <TemplatesPage  />
    </SiteLayout>
  );
}
