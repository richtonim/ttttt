import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { WhitelistGate } from "@/components/forms/whitelist-gate";
import type { Locale } from "@/lib/i18n/locales";

export function SignInPage({ locale: _locale = "en" }: { locale?: Locale }) {
  return (
    <Section className="pt-32 pb-20">
      <Container>
        <WhitelistGate
          title="Sign in — Early access required"
          description="Sign in is currently available to whitelisted early access members only. Join the waitlist to request access."
        />
      </Container>
    </Section>
  );
}
