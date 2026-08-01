import { SiteLayout } from "@/components/layout/site-layout";
import { SecurityPage } from "@/components/pages/security-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "SecurityPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/security",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <SecurityPage locale="zh" />
    </SiteLayout>
  );
}
