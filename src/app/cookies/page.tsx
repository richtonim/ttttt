import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "SOMA Autos cookie policy. Learn about how we use cookies and similar technologies.",
  path: "/cookies/",
});

export default function CookiesPage() {
  return (
    <>
      <PageHeader label="Legal" title="Cookie Policy" description="Last updated: January 1, 2026" />
      <Section>
        <div className="max-w-3xl space-y-8">
          {[
            {
              title: "What Are Cookies",
              content: "Cookies are small text files placed on your device when you visit a website. They help us provide a better experience by remembering your preferences and understanding how you use our site.",
            },
            {
              title: "How We Use Cookies",
              content: "We use essential cookies required for the website to function, analytics cookies to understand usage patterns and improve our services, and preference cookies to remember your settings.",
            },
            {
              title: "Types of Cookies We Use",
              content: "Essential cookies: Required for basic site functionality including navigation and security. Analytics cookies: Help us understand how visitors interact with our website. Preference cookies: Remember your choices such as language and region.",
            },
            {
              title: "Managing Cookies",
              content: "You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Note that disabling certain cookies may affect website functionality.",
            },
            {
              title: "Third-Party Cookies",
              content: "We may use third-party analytics services that set their own cookies. These services have their own privacy policies governing the use of your information.",
            },
            {
              title: "Contact",
              content: "For questions about our use of cookies, contact privacy@soma.autos.",
            },
          ].map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.05}>
              <h2 className="text-xl font-semibold text-soma-black mb-3">{section.title}</h2>
              <p className="text-soma-gray-400 leading-relaxed">{section.content}</p>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
