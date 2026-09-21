import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { WireframeScene } from '../components/WireframeScene'

export function Demo() {
  const [prompt, setPrompt] = useState(
    'Sunlit Scandinavian living room, oak floors, linen sofa, soft north light',
  )
  const [status, setStatus] = useState('Idle — enter a prompt to generate')
  const [busy, setBusy] = useState(false)

  function generate(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setStatus('Parsing spatial intent…')
    window.setTimeout(() => setStatus('Building topology & materials…'), 180)
    window.setTimeout(() => setStatus('Simulating lighting response…'), 360)
    window.setTimeout(() => {
      setStatus(`Generated in ~240ms — “${prompt.slice(0, 64)}${prompt.length > 64 ? '…' : ''}”`)
      setBusy(false)
    }, 520)
  }

  return (
    <div className="page">
      <SEO
        title="Demo"
        description="Try a frontend spatial generation demo of INTERIORPUP.AI — prompt to wireframe 3D space preview."
        path="/demo"
      />
      <div className="container">
        <div className="section-head">
          <p className="badge">Interactive Demo</p>
          <h2 style={{ marginTop: '0.75rem' }}>Prompt → spatial preview</h2>
          <p>
            Frontend simulation of the generation loop. Full engine access remains
            whitelist-only.
          </p>
        </div>

        <div className="demo-panel">
          <div className="demo-viewport">
            <WireframeScene />
          </div>
          <p className="demo-status">
            Status: <strong>{status}</strong>
          </p>
          <form className="form-stack" onSubmit={generate}>
            <div className="field">
              <label htmlFor="demo-prompt">Spatial prompt</label>
              <textarea
                id="demo-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
              />
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button type="submit" className="btn btn-primary" disabled={busy}>
                {busy ? 'Generating…' : 'Generate Space'}
              </button>
              <Link to="/waitlist" className="btn btn-ghost">
                Request Full Access
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
