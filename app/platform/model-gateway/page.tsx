import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Model Gateway",
  description: "Learn about NextLayer Model Gateway — build reliable AI products.",
  path: "/platform/model-gateway",
});

export default function Page() {
  return (
    <SiteLayout>
      <ProductDetailPage slug="model-gateway" />
    </SiteLayout>
  );
}
