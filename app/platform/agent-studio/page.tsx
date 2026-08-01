import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Agent Studio",
  description: "Learn about NextLayer Agent Studio — build reliable AI products.",
  path: "/platform/agent-studio",
});

export default function Page() {
  return (
    <SiteLayout>
      <ProductDetailPage slug="agent-studio" />
    </SiteLayout>
  );
}
