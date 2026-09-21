import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function Product() {
  return (
    <div className="page">
      <SEO
        title="Product"
        description="INTERIORPUP.AI product overview — AI spatial generation from prompts and floor plans with BIM-grade materials and lighting simulation."
        path="/product"
      />
      <div className="container">
        <p className="badge">Product</p>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', margin: '0.6rem 0 1rem' }}>
          An AI engine for spatial & interior intelligence
        </h1>
        <p style={{ color: 'var(--sand-muted)', maxWidth: '62ch', marginBottom: '2.5rem' }}>
          INTERIORPUP.AI turns natural language or a 2D floor plan into a structured
          3D interior — materials, light, and furniture topology included — fast enough
          for live design dialogue.
        </p>

        <div className="feature-list">
          <div className="feature-row">
            <h3>Prompt composer</h3>
            <p>
              Specify program, style, density, and daylight intent. The engine returns a
              navigable space graph with softscape placement and finish suggestions.
            </p>
          </div>
          <div className="feature-row">
            <h3>Plan-to-space pipeline</h3>
            <p>
              Raster or vector floor plans are interpreted into walls, rooms, and
              circulation before generative dressing — keeping dimensions honest.
            </p>
          </div>
          <div className="feature-row">
            <h3>Lighting simulation</h3>
            <p>
              Soft daylight, artificial accents, and material response are computed with
              the scene — ready for client review or listing preview.
            </p>
          </div>
          <div className="feature-row">
            <h3>Export-oriented graph</h3>
            <p>
              Keep topology editable. Hand off to visualization, BIM refinement, or
              PropTech listing experiences without rebuilding from pixels.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link to="/features" className="btn btn-primary">
            See Features
          </Link>
          <Link to="/waitlist" className="btn btn-ghost">
            Request Access
          </Link>
        </div>
      </div>
    </div>
  )
}
