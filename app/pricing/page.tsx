import { SiteLayout } from "@/components/layout/site-layout";
import { PricingPage } from "@/components/pages/pricing-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pricing",
  description: "Simple pricing for every stage of your AI journey.",
  path: "/pricing",
});

export default function Page() {
  return (
    <SiteLayout>
      <PricingPage  />
    </SiteLayout>
  );
}
