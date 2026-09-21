import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function About() {
  return (
    <div className="page">
      <SEO
        title="About"
        description="About INTERIORPUP.AI — a 2026 startup building spatial intelligence for architects, interior designers, and PropTech."
        path="/about"
      />
      <div className="container page-narrow" style={{ width: 'min(100% - 2.5rem, 760px)' }}>
        <p className="badge">About</p>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '0.7rem 0 1rem' }}>
          Building the spatial layer for modern interiors
        </h1>
        <p style={{ color: 'var(--sand-muted)', marginBottom: '2rem' }}>
          INTERIORPUP.AI is a 2026 startup creating an AI Spatial & Interior Intelligence
          Engine for architects, interior designers, and PropTech teams. We believe
          generative AI should produce structured, professional space — not disposable images.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="year">2025</div>
            <div>
              <h3>Research roots</h3>
              <p>
                Prototypes around NeRF / 3D Gaussian Splatting and floor-plan understanding
                for interior workflows.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="year">2026</div>
            <div>
              <h3>Engine launch (whitelist)</h3>
              <p>
                Public site and partner whitelist open. Prompt-to-space and plan-to-space
                enter early studio seats.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="year">Next</div>
            <div>
              <h3>Platform expansion</h3>
              <p>
                Manufacturer material packs, PropTech APIs, and enterprise VPC deployments.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link to="/contact" className="btn btn-primary">
            Contact the Team
          </Link>
        </div>
      </div>
    </div>
  )
}
