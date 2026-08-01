import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { WhitelistForm } from "@/components/ui/WhitelistForm";

export const metadata = createMetadata({
  title: "Sign In",
  description: "Sign in to the SOMA platform. Access is currently available to whitelisted partners.",
  path: "/login/",
});

export default function LoginPage() {
  return (
    <>
      <PageHeader label="Account" title="Sign In" />
      <Section>
        <WhitelistForm type="login" />
      </Section>
    </>
  );
}
