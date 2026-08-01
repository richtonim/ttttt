import { SiteLayout } from "@/components/layout/site-layout";
import { PlatformPage } from "@/components/pages/platform-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "AI Platform",
  description: "Build, connect, operate, and scale AI applications.",
  path: "/platform",
  locale: "zh",
});

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <PlatformPage locale="zh" />
    </SiteLayout>
  );
}
