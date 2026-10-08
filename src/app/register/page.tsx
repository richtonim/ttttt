import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { WhitelistForm } from "@/components/ui/WhitelistForm";

export const metadata = createMetadata({
  title: "Register",
  description: "Request access to the SOMA platform. Registration is currently available to whitelisted partners.",
  path: "/register/",
});

export default function RegisterPage() {
  return (
    <>
      <PageHeader label="Account" title="Create Account" />
      <Section>
        <WhitelistForm type="register" />
      </Section>
    </>
  );
}
