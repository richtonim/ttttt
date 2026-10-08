import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Knowledge Layer",
  description: "Learn about NextLayer Knowledge Layer — build reliable AI products.",
  path: "/platform/knowledge-layer",
});

export default function Page() {
  return (
    <SiteLayout>
      <ProductDetailPage slug="knowledge-layer" />
    </SiteLayout>
  );
}
