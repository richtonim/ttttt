import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Developer Platform",
  description: "NextLayer solution for Developer Platform.",
  path: "/solutions/developer-platform",
});

export default function Page() {
  return (
    <SiteLayout>
      <SolutionDetailPage slug="developer-platform" />
    </SiteLayout>
  );
}
