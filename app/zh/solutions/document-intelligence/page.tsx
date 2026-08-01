import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solutions",
  description: "NextLayer AI solutions.",
  path: "/solutions/document-intelligence",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <SolutionDetailPage slug="document-intelligence" locale="zh" />
    </SiteLayout>
  );
}
