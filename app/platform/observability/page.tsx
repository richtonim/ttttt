import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Observability",
  description: "Learn about NextLayer Observability — build reliable AI products.",
  path: "/platform/observability",
});

export default function Page() {
  return (
    <SiteLayout>
      <ProductDetailPage slug="observability" />
    </SiteLayout>
  );
}
