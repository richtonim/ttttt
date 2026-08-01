import { SiteLayout } from "@/components/layout/site-layout";
import { PlatformPage } from "@/components/pages/platform-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "AI Platform",
  description: "Build, connect, operate, and scale AI applications through one flexible platform.",
  path: "/platform",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <PlatformPage  />
    </SiteLayout>
  );
}
