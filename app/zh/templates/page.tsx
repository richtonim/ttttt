import { SiteLayout } from "@/components/layout/site-layout";
import { TemplatesPage } from "@/components/pages/templates-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "TemplatesPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/templates",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <TemplatesPage locale="zh" />
    </SiteLayout>
  );
}
