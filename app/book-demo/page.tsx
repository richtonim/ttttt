import { SiteLayout } from "@/components/layout/site-layout";
import { BookDemoPage } from "@/components/pages/book-demo-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Book a Demo",
  description: "See how NextLayer can help your team.",
  path: "/book-demo",
});

export default function Page() {
  return (
    <SiteLayout>
      <BookDemoPage  />
    </SiteLayout>
  );
}
