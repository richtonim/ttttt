import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import type { Locale } from "@/lib/i18n/locales";

export function ContactPage({ locale: _locale = "en" }: { locale?: Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl lg:text-6xl">
            Let&apos;s build the next layer together
          </h1>
        </Container>
      </Section>
      <Section variant="soft">
        <Container className="max-w-2xl">
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
