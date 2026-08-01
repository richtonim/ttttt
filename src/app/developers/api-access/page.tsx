import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { WhitelistForm } from "@/components/ui/WhitelistForm";

export const metadata = createMetadata({
  title: "API Access",
  description: "Request API access to the SOMA platform. Currently available to whitelisted partners.",
  path: "/developers/api-access/",
});

export default function ApiAccessPage() {
  return (
    <>
      <PageHeader
        label="Developers"
        title="Get API Access"
        description="SOMA API access is currently available to whitelisted partners and early access participants."
      />

      <Section>
        <WhitelistForm type="purchase" />
      </Section>
    </>
  );
}
