import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="AIFLASH.NEWS privacy policy. How we collect, use, and protect your data."
        path="/privacy"
      />
      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: February 1, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="container prose">
          <p>AIFLASH.NEWS ("we", "us", "our") is committed to protecting your privacy. This policy describes how we collect, use, and safeguard information when you use our website and services at aiflash.news.</p>

          <h2>Information We Collect</h2>
          <p>We collect information you provide directly: name, email address, company, payment information (processed by Stripe), and API usage data. We also collect automatic data including IP address, browser type, pages visited, and interaction timestamps.</p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>Provide and maintain our AI intelligence services</li>
            <li>Process whitelist applications and account registrations</li>
            <li>Send service-related communications and alert notifications</li>
            <li>Improve our platform and develop new features</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>We do not sell your personal data. We share data only with service providers (hosting, payment processing, analytics) under strict confidentiality agreements, or when required by law.</p>

          <h2>Data Retention</h2>
          <p>Account data is retained while your account is active. API logs are retained for 90 days. You may request deletion by contacting privacy@aiflash.news.</p>

          <h2>Your Rights</h2>
          <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or port your data. Contact us at privacy@aiflash.news to exercise these rights.</p>

          <h2>Contact</h2>
          <p>For privacy inquiries: privacy@aiflash.news<br />AIFLASH.NEWS, 548 Market St, Suite 320, San Francisco, CA 94104</p>
        </div>
      </section>
    </>
  );
}
