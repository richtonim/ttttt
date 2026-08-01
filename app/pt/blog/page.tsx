import { SiteLayout } from "@/components/layout/site-layout";
import { BlogPage } from "@/components/pages/blog-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "BlogPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/blog",
  locale: "pt",
});

export default function Page() {
  return (
    <SiteLayout locale="pt">
      <BlogPage locale="pt" />
    </SiteLayout>
  );
}
