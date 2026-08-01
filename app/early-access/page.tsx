import { SiteLayout } from "@/components/layout/site-layout";
import { EarlyAccessPage } from "@/components/pages/early-access-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Early Access",
  description: "Join the NextLayer early access waitlist.",
  path: "/early-access",
});

export default function Page() {
  return (
    <SiteLayout>
      <EarlyAccessPage  />
    </SiteLayout>
  );
}
