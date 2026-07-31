import { SEO } from '../components/SEO'

export function Terms() {
  return (
    <div className="page">
      <SEO
        title="Terms of Service"
        description="Terms of service for INTERIORPUP.AI early access and website use."
        path="/terms"
      />
      <div className="container page-narrow legal">
        <h1 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>Terms of Service</h1>
        <p>Last updated: January 2026</p>
        <h2>Acceptance</h2>
        <p>
          By using interiorpup.com and INTERIORPUP.AI services, you agree to these terms.
          Early access features may change as the product evolves.
        </p>
        <h2>Whitelist & accounts</h2>
        <p>
          Account registration, login, and plan purchases are available only to
          whitelisted emails. You are responsible for safeguarding credentials issued to
          your organization.
        </p>
        <h2>Acceptable use</h2>
        <p>
          Do not misuse the service to infringe intellectual property, attempt unauthorized
          access, or generate content for unlawful purposes. Professional judgment remains
          yours when applying outputs to real projects.
        </p>
        <h2>Generated outputs</h2>
        <p>
          AI-generated spaces are tools for exploration and visualization. Validate
          dimensional, code, and construction decisions with qualified professionals.
        </p>
        <h2>Contact</h2>
        <p>Legal inquiries: legal@interiorpup.com</p>
      </div>
    </div>
  )
}
