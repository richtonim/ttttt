import { SEO } from '../components/SEO'

export function Docs() {
  return (
    <div className="page">
      <SEO
        title="Documentation"
        description="INTERIORPUP.AI documentation — getting started, prompt patterns, floor plan intake, and API overview."
        path="/docs"
      />
      <div className="container docs-layout">
        <aside className="docs-side">
          <strong style={{ color: 'var(--sand)', marginBottom: '0.5rem' }}>Docs</strong>
          <a href="#start">Getting started</a>
          <a href="#prompts">Prompt patterns</a>
          <a href="#plans">Floor plans</a>
          <a href="#api">API overview</a>
          <a href="#whitelist">Whitelist access</a>
        </aside>
        <article className="docs-content">
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
            Documentation
          </h1>
          <p>
            Frontend reference for early partners. Production API keys are issued after
            whitelist approval.
          </p>

          <h2 id="start">Getting started</h2>
          <p>
            Request access, register with a whitelisted email, then open the studio.
            Start from a prompt or upload a floor plan to generate your first space.
          </p>

          <h2 id="prompts">Prompt patterns</h2>
          <p>Include program, style, materials, and light direction for best results:</p>
          <pre className="code-block">{`{
  "prompt": "Compact Tokyo apartment, tatami zone, walnut cabinetry, warm evening LEDs",
  "constraints": { "area_sqm": 42, "ceiling_m": 2.4 }
}`}</pre>

          <h2 id="plans">Floor plans</h2>
          <p>
            Accepts PNG/JPG/SVG/PDF plans. The pipeline estimates walls and rooms before
            generative dressing. Provide scale notes when available.
          </p>

          <h2 id="api">API overview</h2>
          <pre className="code-block">{`POST /v1/spaces
Authorization: Bearer <whitelist_api_key>
Content-Type: application/json

{ "prompt": "...", "format": "scene_graph" }`}</pre>

          <h2 id="whitelist">Whitelist access</h2>
          <p>
            Registration, login, and purchase endpoints reject non-whitelisted identities.
            Join the waitlist to be reviewed by the partner team.
          </p>
        </article>
      </div>
    </div>
  )
}
