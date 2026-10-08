import { SiteLayout } from "@/components/layout/site-layout";
import { SignInPage } from "@/components/pages/sign-in-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sign In",
  description: "Sign in to your NextLayer account.",
  path: "/sign-in",
});

export default function Page() {
  return (
    <SiteLayout>
      <SignInPage  />
    </SiteLayout>
  );
}
