import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sales Automation",
  description: "NextLayer solution for Sales Automation.",
  path: "/solutions/sales-automation",
});

export default function Page() {
  return (
    <SiteLayout>
      <SolutionDetailPage slug="sales-automation" />
    </SiteLayout>
  );
}
