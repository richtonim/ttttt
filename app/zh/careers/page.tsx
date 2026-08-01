import { SiteLayout } from "@/components/layout/site-layout";
import { CareersPage } from "@/components/pages/careers-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "CareersPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/careers",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <CareersPage locale="zh" />
    </SiteLayout>
  );
}
