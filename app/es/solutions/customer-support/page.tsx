import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solutions",
  description: "NextLayer AI solutions.",
  path: "/solutions/customer-support",
  locale: "es",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <SolutionDetailPage slug="customer-support" locale="es" />
    </SiteLayout>
  );
}
