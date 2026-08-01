import { SiteLayout } from "@/components/layout/site-layout";
import { PricingPage } from "@/components/pages/pricing-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "PricingPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/pricing",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <PricingPage locale="zh" />
    </SiteLayout>
  );
}
