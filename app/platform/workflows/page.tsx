import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Workflows",
  description: "Learn about NextLayer Workflows — build reliable AI products.",
  path: "/platform/workflows",
});

export default function Page() {
  return (
    <SiteLayout>
      <ProductDetailPage slug="workflows" />
    </SiteLayout>
  );
}
