import { SiteLayout } from "@/components/layout/site-layout";
import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "ContactPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/contact",
  locale: "pt",
});

export default function Page() {
  return (
    <SiteLayout locale="pt">
      <ContactPage locale="pt" />
    </SiteLayout>
  );
}
