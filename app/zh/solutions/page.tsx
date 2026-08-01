import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionsListPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "SolutionsListPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/solutions",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <SolutionsListPage locale="zh" />
    </SiteLayout>
  );
}
