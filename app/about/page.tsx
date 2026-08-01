import { SiteLayout } from "@/components/layout/site-layout";
import { AboutPage } from "@/components/pages/about-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "Building the intelligent layer for modern business.",
  path: "/about",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <AboutPage  />
    </SiteLayout>
  );
}
