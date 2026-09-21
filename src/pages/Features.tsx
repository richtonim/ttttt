import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

const features = [
  {
    title: 'Natural language spatial generation',
    body: 'Describe rooms, atmospheres, and constraints. Receive a coherent 3D interior with structured entities.',
  },
  {
    title: 'Floor plan uplift',
    body: 'Convert 2D plans into depth-aware spaces while preserving layout intent and room adjacency.',
  },
  {
    title: 'BIM-grade material stack',
    body: 'Finish semantics, reflectance cues, and editable assignments — beyond decorative textures.',
  },
  {
    title: 'Furniture softscape topology',
    body: 'Placement graphs for seating, storage, and circulation clearances that stay revisable.',
  },
  {
    title: 'Lighting & atmosphere pass',
    body: 'Daylight and artificial lighting cues baked into the generation loop for honest previews.',
  },
  {
    title: 'NeRF / 3DGS-informed fidelity',
    body: 'Modern implicit-field and Gaussian techniques inform photoreal presence without losing control.',
  },
  {
    title: 'Studio collaboration',
    body: 'Share variants with teams, annotate decisions, and lock packages for client presentations.',
  },
  {
    title: 'PropTech integrations',
    body: 'APIs for listing previews, renovation scenarios, and investor walkthrough experiences.',
  },
]

export function Features() {
  return (
    <div className="page">
      <SEO
        title="Features"
        description="Explore INTERIORPUP.AI features: prompt-to-3D, floor plan uplift, BIM materials, lighting simulation, and PropTech APIs."
        path="/features"
      />
      <div className="container">
        <div className="section-head">
          <p className="badge">Features</p>
          <h2 style={{ marginTop: '0.75rem' }}>Everything a spatial workflow needs</h2>
          <p>
            Precision for professionals. Speed for exploration. Structure for the tools
            you already use.
          </p>
        </div>
        <div className="feature-list">
          {features.map((f) => (
            <div className="feature-row" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <Link to="/pricing" className="btn btn-primary">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  )
}
