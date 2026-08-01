import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Platform",
  description: "NextLayer platform module.",
  path: "/platform/model-gateway",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <ProductDetailPage slug="model-gateway" locale="zh" />
    </SiteLayout>
  );
}
