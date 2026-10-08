import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container, Section } from "@/components/ui/Section";
import { WhitelistGate } from "@/components/ui/WhitelistGate";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Log in",
  description: "Sign in to your Cognis account. Access is limited to whitelisted organizations.",
  path: "/login/",
});

export default function LoginPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32 min-h-[70vh] flex items-center">
        <Container className="max-w-md mx-auto w-full">
          <WhitelistGate mode="login" />
        </Container>
      </Section>
    </PageLayout>
  );
}
