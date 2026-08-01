import { SiteLayout } from "@/components/layout/site-layout";
import { EarlyAccessPage } from "@/components/pages/early-access-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "EarlyAccessPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/early-access",
  locale: "es",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <EarlyAccessPage locale="es" />
    </SiteLayout>
  );
}
