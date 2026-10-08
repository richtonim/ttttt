import { SiteLayout } from "@/components/layout/site-layout";
import { LegalPage } from "@/components/pages/legal-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "NextLayer cookie policy and tracking practices.",
  path: "/cookies",
});

export default function Page() {
  return (
    <SiteLayout>
      <LegalPage title="Cookie Policy">
        <p>
          This Cookie Policy explains how NextLayer uses cookies and similar technologies on our website. This is placeholder content and should be updated before production launch.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">What Are Cookies</h2>
        <p className="mt-2">
          Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide information about usage.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">How We Use Cookies</h2>
        <p className="mt-2">
          We may use essential cookies for site functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings such as language selection.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Managing Cookies</h2>
        <p className="mt-2">
          You can control cookies through your browser settings. Disabling certain cookies may affect site functionality.
        </p>
      </LegalPage>
    </SiteLayout>
  );
}
