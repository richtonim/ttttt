import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Document Intelligence",
  description: "NextLayer solution for Document Intelligence.",
  path: "/solutions/document-intelligence",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <SolutionDetailPage slug="document-intelligence" locale="en" />
    </SiteLayout>
  );
}
