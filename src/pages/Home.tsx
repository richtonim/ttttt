import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import IsometricHero from '../components/IsometricHero'
import { SITE_SLOGAN } from '../lib/constants'

const features = [
  {
    icon: '⚡',
    title: 'Sub-Second Automation',
    desc: 'Deploy AI agents that execute critical workflows in milliseconds — data cleansing, compliance checks, and cross-system orchestration.',
  },
  {
    icon: '🔗',
    title: 'Universal Integration',
    desc: 'Connect any data source, API, or enterprise system. Mustly Hub routes intelligence across your entire stack seamlessly.',
  },
  {
    icon: '🛡️',
    title: 'Enterprise-Grade Security',
    desc: 'SOC 2 ready infrastructure with end-to-end encryption, audit trails, and role-based access controls built in.',
  },
  {
    icon: '🤖',
    title: 'Agentic Orchestration',
    desc: 'Multi-agent workflows that reason, adapt, and self-heal. Schedule complex pipelines with precision and reliability.',
  },
]

const stats = [
  { value: '10x', label: 'Faster Processing' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '500+', label: 'Integrations' },
  { value: '<1s', label: 'Agent Response' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Essential AI Workflows"
        description="Mustly AI — Enterprise-grade AI automation and agentic workflow engine. Automate what must be done with sub-second precision."
        keywords="AI automation, enterprise workflow, agentic AI, Mustly AI, workflow engine"
      />

      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/10 text-mint text-xs font-semibold tracking-wider mb-6">
              ENTERPRISE AI AUTOMATION
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
              Automate What{' '}
              <span className="text-gradient">Must Be Done</span>
            </h1>
            <p className="mt-6 text-lg text-navy/60 leading-relaxed max-w-lg">
              {SITE_SLOGAN} Mustly AI is the essential workflow engine for enterprises that demand precision, speed, and reliability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/pricing" className="btn-primary">Get Started</Link>
              <Link to="/platform" className="btn-secondary">Explore Platform</Link>
            </div>
          </div>
          <IsometricHero />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mint">{s.value}</div>
              <div className="text-sm text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Built for Mission-Critical Workflows</h2>
            <p className="mt-4 text-navy/60">
              From data pipelines to compliance audits, Mustly AI handles the workflows your business cannot afford to get wrong.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-navy text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-navy/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Ready to Automate the Essential?</h2>
          <p className="mt-4 text-navy/60 max-w-xl mx-auto">
            Join forward-thinking enterprises already using Mustly AI to transform their core operations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Request Demo</Link>
            <Link to="/solutions" className="btn-secondary">View Solutions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
