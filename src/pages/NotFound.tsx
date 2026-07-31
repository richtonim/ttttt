import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The requested ClaimEase.AI page could not be found."
        path="/404"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>This route is not in the claims graph</h1>
          <p>The page you requested does not exist.</p>
          <div className="cta-row" style={{ marginTop: '1.25rem' }}>
            <Link to="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
