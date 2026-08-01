import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Knowledge Assistant",
  description: "NextLayer solution for Knowledge Assistant.",
  path: "/solutions/knowledge-assistant",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <SolutionDetailPage slug="knowledge-assistant" locale="en" />
    </SiteLayout>
  );
}
