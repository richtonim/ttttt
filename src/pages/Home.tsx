import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { WireframeScene } from '../components/WireframeScene'

export function Home() {
  return (
    <>
      <SEO
        title="INTERIORPUP.AI — Spatial Intelligence for Modern Interiors"
        description="AI Spatial & Interior Intelligence Engine. Prompt to 3D space in milliseconds with BIM-grade materials, lighting simulation, and furniture topology."
        path="/"
      />

      <section className="hero">
        <div className="hero-plane" aria-hidden="true">
          <WireframeScene />
        </div>
        <div className="container hero-content">
          <p className="badge animate-rise">Spatial Intelligence Engine · 2026</p>
          <div className="hero-brand animate-rise delay-1">
            INTERIORPUP<span className="ai">.AI</span>
          </div>
          <h1 className="animate-rise delay-2">
            Spatial Intelligence for Modern Interiors.
          </h1>
          <p className="lede animate-rise delay-2">
            Prompt to 3D Space in Milliseconds.
          </p>
          <div className="hero-cta animate-rise delay-3">
            <Link to="/waitlist" className="btn btn-primary">
              Request Whitelist Access
            </Link>
            <Link to="/demo" className="btn btn-ghost">
              View Spatial Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>From language or floor plan to habitable 3D space</h2>
            <p>
              Built for architects, interior designers, and PropTech teams who need
              structured spatial output — not disposable renders.
            </p>
          </div>

          <div className="feature-list">
            <div className="feature-row">
              <h3>Natural language → space</h3>
              <p>
                Describe a loft, clinic, or boutique suite. INTERIORPUP composes
                walls, openings, furniture topology, and lighting in a single pass.
              </p>
            </div>
            <div className="feature-row">
              <h3>2D floor plan intake</h3>
              <p>
                Upload a plan and receive a depth-aware 3D interior with editable
                softscape layout and material assignments.
              </p>
            </div>
            <div className="feature-row">
              <h3>BIM-grade materials</h3>
              <p>
                Surfaces carry finish semantics and lighting response suitable for
                design review — not just texture hallucination.
              </p>
            </div>
            <div className="feature-row">
              <h3>Millisecond iteration</h3>
              <p>
                Explore style, density, and daylight variants at conversational
                speed. Keep the graph. Export when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stat-inline">
            <div>
              <strong>&lt;300ms</strong>
              <span>Typical generation target</span>
            </div>
            <div>
              <strong>NeRF / 3DGS</strong>
              <span>Spatial field stack</span>
            </div>
            <div>
              <strong>Whitelist</strong>
              <span>Register · Login · Purchase</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container split split-2">
          <div>
            <div className="section-head" style={{ marginBottom: '1.5rem' }}>
              <h2>Ultra-minimal spatial tech, built for professionals</h2>
              <p>
                Wireframe clarity over clutter. Structure over spectacle. A calm
                interface for high-fidelity spatial generation.
              </p>
            </div>
            <Link to="/product" className="btn btn-sand">
              Explore the Product
            </Link>
          </div>
          <div className="demo-viewport" aria-hidden="true">
            <WireframeScene />
          </div>
        </div>
      </section>
    </>
  )
}
