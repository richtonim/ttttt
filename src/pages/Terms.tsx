import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="AIFLASH.NEWS terms of service. Usage terms for our AI intelligence platform."
        path="/terms"
      />
      <div className="page-header">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last updated: February 1, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="container prose">
          <p>These Terms of Service ("Terms") govern your use of AIFLASH.NEWS services. By accessing or using our platform, you agree to these Terms.</p>

          <h2>1. Service Description</h2>
          <p>AIFLASH.NEWS provides real-time AI intelligence, Flash Digests, model telemetry data, and API access. Services are provided on an "as-is" basis during our early access period.</p>

          <h2>2. Whitelist & Account Access</h2>
          <p>Registration, login, and paid plan purchases require whitelist approval. We reserve the right to approve or deny applications at our discretion. You are responsible for maintaining account security.</p>

          <h2>3. Acceptable Use</h2>
          <ul>
            <li>Do not scrape, resell, or redistribute our data without authorization</li>
            <li>Do not attempt to circumvent rate limits or access controls</li>
            <li>Do not use the service for illegal activities</li>
            <li>Do not interfere with platform operations or other users</li>
          </ul>

          <h2>4. Subscriptions & Billing</h2>
          <p>Paid plans are billed monthly via Stripe. You may cancel at any time; access continues until the end of the billing period. Refunds are handled on a case-by-case basis.</p>

          <h2>5. Intellectual Property</h2>
          <p>All platform content, algorithms, and branding are owned by AIFLASH.NEWS. Source links in digests remain property of their respective owners.</p>

          <h2>6. Limitation of Liability</h2>
          <p>AIFLASH.NEWS is not liable for decisions made based on our intelligence data. We do not guarantee accuracy, completeness, or timeliness of all information.</p>

          <h2>7. Changes</h2>
          <p>We may update these Terms. Continued use after changes constitutes acceptance. Material changes will be communicated via email.</p>

          <h2>Contact</h2>
          <p>legal@aiflash.news</p>
        </div>
      </section>
    </>
  );
}
