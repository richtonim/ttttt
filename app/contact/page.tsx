import { SiteLayout } from "@/components/layout/site-layout";
import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Let's build the next layer together.",
  path: "/contact",
});

export default function Page() {
  return (
    <SiteLayout>
      <ContactPage  />
    </SiteLayout>
  );
}
