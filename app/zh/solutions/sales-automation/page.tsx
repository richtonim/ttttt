import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solutions",
  description: "NextLayer AI solutions.",
  path: "/solutions/sales-automation",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <SolutionDetailPage slug="sales-automation" locale="zh" />
    </SiteLayout>
  );
}
