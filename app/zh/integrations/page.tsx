import { SiteLayout } from "@/components/layout/site-layout";
import { IntegrationsPage } from "@/components/pages/integrations-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "IntegrationsPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/integrations",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <IntegrationsPage locale="zh" />
    </SiteLayout>
  );
}
