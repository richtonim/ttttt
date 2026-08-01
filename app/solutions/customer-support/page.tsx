import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Customer Support",
  description: "NextLayer solution for Customer Support.",
  path: "/solutions/customer-support",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <SolutionDetailPage slug="customer-support" locale="en" />
    </SiteLayout>
  );
}
