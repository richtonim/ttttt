import { SiteLayout } from "@/components/layout/site-layout";
import { SignInPage } from "@/components/pages/sign-in-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "SignInPage",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "/sign-in",
  locale: "es",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <SignInPage locale="es" />
    </SiteLayout>
  );
}
