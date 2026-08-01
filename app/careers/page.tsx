import { SiteLayout } from "@/components/layout/site-layout";
import { CareersPage } from "@/components/pages/careers-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Help us build the intelligent layer for modern business.",
  path: "/careers",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <CareersPage  />
    </SiteLayout>
  );
}
