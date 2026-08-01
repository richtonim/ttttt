import { SiteLayout } from "@/components/layout/site-layout";
import { AboutPage } from "@/components/pages/about-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "AboutPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/about",
  locale: "pt",
});

export default function Page() {
  return (
    <SiteLayout locale="pt">
      <AboutPage locale="pt" />
    </SiteLayout>
  );
}
