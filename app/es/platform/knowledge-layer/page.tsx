import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Platform",
  description: "NextLayer platform module.",
  path: "/platform/knowledge-layer",
  locale: "es",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <ProductDetailPage slug="knowledge-layer" locale="es" />
    </SiteLayout>
  );
}
