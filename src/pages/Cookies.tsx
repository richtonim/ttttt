import SEO from '../components/SEO';

export default function Cookies() {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="AIFLASH.NEWS cookie policy. How we use cookies and similar technologies."
        path="/cookies"
      />
      <div className="page-header">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p>Last updated: February 1, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="container prose">
          <p>This Cookie Policy explains how AIFLASH.NEWS uses cookies and similar tracking technologies on aiflash.news.</p>

          <h2>What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help us provide a better experience and understand how our platform is used.</p>

          <h2>Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>Required for authentication, session management, and security. These cannot be disabled.</p>
          <h3>Analytics Cookies</h3>
          <p>Help us understand usage patterns (pages visited, time on site) to improve our service. We use privacy-focused analytics.</p>
          <h3>Preference Cookies</h3>
          <p>Remember your settings such as theme preferences and alert configurations.</p>

          <h2>Managing Cookies</h2>
          <p>You can control cookies through your browser settings. Disabling essential cookies may affect platform functionality. Most browsers allow you to block or delete cookies.</p>

          <h2>Contact</h2>
          <p>Questions about cookies: privacy@aiflash.news</p>
        </div>
      </section>
    </>
  );
}
