import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solutions",
  description: "NextLayer AI solutions.",
  path: "/solutions/document-intelligence",
  locale: "pt",
});

export default function Page() {
  return (
    <SiteLayout locale="pt">
      <SolutionDetailPage slug="document-intelligence" locale="pt" />
    </SiteLayout>
  );
}
