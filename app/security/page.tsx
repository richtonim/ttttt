import { SiteLayout } from "@/components/layout/site-layout";
import { SecurityPage } from "@/components/pages/security-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Security",
  description: "Enterprise AI without compromising on security, privacy, or control.",
  path: "/security",
});

export default function Page() {
  return (
    <SiteLayout>
      <SecurityPage  />
    </SiteLayout>
  );
}
