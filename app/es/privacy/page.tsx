import { SiteLayout } from "@/components/layout/site-layout";
import { LegalPage } from "@/components/pages/legal-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "NextLayer privacy policy and data handling practices.",
  path: "/privacy",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <LegalPage title="Privacy Policy">
        <p>
          This Privacy Policy describes how NextLayer (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects information when you use our website and platform. This is placeholder legal content and should be reviewed by legal counsel before production launch.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Information We Collect</h2>
        <p className="mt-2">
          We may collect information you provide directly, such as your name, email address, company name, and messages submitted through our contact forms. We may also collect usage data and technical information when you interact with our services.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">How We Use Information</h2>
        <p className="mt-2">
          We use collected information to provide and improve our services, respond to inquiries, manage early access requests, and communicate with you about our platform.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Data Storage</h2>
        <p className="mt-2">
          Data storage practices, retention periods, and regional options will be documented in the final production privacy policy.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Model Training</h2>
        <p className="mt-2">
          NextLayer does not use customer data to train AI models. Customer data handling practices will be detailed in the production Data Processing Agreement.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Contact</h2>
        <p className="mt-2">
          For privacy-related inquiries, please contact us through our contact page.
        </p>
      </LegalPage>
    </SiteLayout>
  );
}
