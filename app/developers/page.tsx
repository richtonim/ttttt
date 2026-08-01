import { SiteLayout } from "@/components/layout/site-layout";
import { DevelopersPage } from "@/components/pages/developers-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Developers",
  description: "Build AI products without rebuilding AI infrastructure.",
  path: "/developers",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <DevelopersPage  />
    </SiteLayout>
  );
}
