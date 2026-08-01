import { SiteLayout } from "@/components/layout/site-layout";
import { AboutPage } from "@/components/pages/about-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "AboutPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/about",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <AboutPage locale="zh" />
    </SiteLayout>
  );
}
