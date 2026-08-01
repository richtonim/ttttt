import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionsListPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solutions",
  description: "AI solutions built around real work.",
  path: "/solutions",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <SolutionsListPage  />
    </SiteLayout>
  );
}
