import { SiteLayout } from "@/components/layout/site-layout";
import { IntegrationsPage } from "@/components/pages/integrations-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Integrations",
  description: "Connect NextLayer with your AI models, data sources, and business tools.",
  path: "/integrations",
});

export default function Page() {
  return (
    <SiteLayout>
      <IntegrationsPage  />
    </SiteLayout>
  );
}
