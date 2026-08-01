import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Platform",
  description: "NextLayer platform module.",
  path: "/platform/agent-studio",
  locale: "pt",
});

export default function Page() {
  return (
    <SiteLayout locale="pt">
      <ProductDetailPage slug="agent-studio" locale="pt" />
    </SiteLayout>
  );
}
