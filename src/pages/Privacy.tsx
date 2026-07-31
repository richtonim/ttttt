import { SEO } from '../components/SEO'

export function Privacy() {
  return (
    <div className="page">
      <SEO
        title="Privacy Policy"
        description="Privacy policy for INTERIORPUP.AI and interiorpup.com."
        path="/privacy"
      />
      <div className="container page-narrow legal">
        <h1 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p>Last updated: January 2026</p>
        <h2>Who we are</h2>
        <p>
          INTERIORPUP.AI (interiorpup.com) provides an AI spatial and interior
          intelligence engine for professional users. This policy describes how we handle
          information collected through our website and early-access products.
        </p>
        <h2>Information we collect</h2>
        <p>
          We may collect contact details submitted via waitlist, registration, login, or
          contact forms — such as name, email, company, and role. Product usage metadata
          may be collected to improve generation quality and reliability.
        </p>
        <h2>Whitelist access</h2>
        <p>
          Registration, authentication, and purchase flows are limited to approved
          whitelist participants. Waitlist submissions are reviewed by our partner team.
        </p>
        <h2>How we use data</h2>
        <p>
          To operate the service, communicate access decisions, process purchases for
          approved users, and improve spatial generation features. We do not sell personal
          data.
        </p>
        <h2>Contact</h2>
        <p>Privacy inquiries: privacy@interiorpup.com</p>
      </div>
    </div>
  )
}
