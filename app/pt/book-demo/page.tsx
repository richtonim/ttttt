import { SiteLayout } from "@/components/layout/site-layout";
import { BookDemoPage } from "@/components/pages/book-demo-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "BookDemoPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/book-demo",
  locale: "pt",
});

export default function Page() {
  return (
    <SiteLayout locale="pt">
      <BookDemoPage locale="pt" />
    </SiteLayout>
  );
}
