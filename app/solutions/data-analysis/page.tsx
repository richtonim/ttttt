import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Data Analysis",
  description: "NextLayer solution for Data Analysis.",
  path: "/solutions/data-analysis",
});

export default function Page() {
  return (
    <SiteLayout>
      <SolutionDetailPage slug="data-analysis" />
    </SiteLayout>
  );
}
