import { SiteLayout } from "@/components/layout/site-layout";
import { DocsPage } from "@/components/pages/docs-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "DocsPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/docs",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <DocsPage locale="zh" />
    </SiteLayout>
  );
}
