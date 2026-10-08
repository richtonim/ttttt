import { SiteLayout } from "@/components/layout/site-layout";
import { BlogPage } from "@/components/pages/blog-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Insights on building reliable AI products.",
  path: "/blog",
});

export default function Page() {
  return (
    <SiteLayout>
      <BlogPage  />
    </SiteLayout>
  );
}
