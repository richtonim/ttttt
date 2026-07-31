import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function NotFound() {
  return (
    <div className="page">
      <SEO
        title="Page Not Found"
        description="The requested page could not be found on INTERIORPUP.AI."
        path="/404"
      />
      <div className="container page-narrow">
        <p className="badge">404</p>
        <h1 style={{ fontSize: '2.6rem', margin: '0.7rem 0 1rem' }}>Space not found</h1>
        <p className="form-note" style={{ marginBottom: '1.5rem' }}>
          This route is outside the current spatial graph.
        </p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
