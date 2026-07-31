import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const capabilities = [
  {
    title: 'Visual Workflow Builder',
    desc: 'Drag-and-drop interface to design complex multi-agent pipelines. No code required for standard workflows.',
    tag: 'No-Code',
  },
  {
    title: 'Agent Runtime Engine',
    desc: 'High-performance execution layer that runs AI agents in parallel with sub-second latency and automatic failover.',
    tag: 'Core Engine',
  },
  {
    title: 'Real-Time Monitoring',
    desc: 'Live dashboards showing agent status, throughput, error rates, and SLA compliance across all workflows.',
    tag: 'Observability',
  },
  {
    title: 'Version Control & Rollback',
    desc: 'Git-like versioning for workflows. Test in staging, deploy to production, and rollback instantly.',
    tag: 'DevOps',
  },
  {
    title: 'Custom Agent SDK',
    desc: 'Build bespoke AI agents with our TypeScript/Python SDK. Full access to LLM routing, memory, and tool use.',
    tag: 'Developer',
  },
  {
    title: 'Scheduled & Event-Driven',
    desc: 'Trigger workflows on cron schedules, webhooks, database changes, or custom event streams.',
    tag: 'Triggers',
  },
]

export default function Platform() {
  return (
    <>
      <SEO
        title="Platform"
        description="Explore the Mustly AI platform — visual workflow builder, agent runtime engine, real-time monitoring, and enterprise integrations."
        path="/platform"
        keywords="AI platform, workflow builder, agent runtime, enterprise automation"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-mint mb-3">PLATFORM</p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
              The Engine Behind Essential Automation
            </h1>
            <p className="mt-6 text-lg text-navy/60 leading-relaxed">
              Mustly AI provides a complete platform for designing, deploying, and managing AI-powered workflows at enterprise scale. Every component is built for reliability, observability, and speed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c) => (
            <div key={c.title} className="card">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky/10 text-sky text-xs font-semibold mb-4">
                {c.tag}
              </span>
              <h3 className="font-semibold text-navy text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-navy/60 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">How It Works</h2>
            <ol className="mt-8 space-y-6">
              {[
                { step: '01', text: 'Connect your data sources and enterprise systems via 500+ native integrations.' },
                { step: '02', text: 'Design workflows using the visual builder or deploy pre-built agent templates.' },
                { step: '03', text: 'Mustly Hub orchestrates agents in real-time with sub-second execution.' },
                { step: '04', text: 'Monitor, audit, and optimize with full observability and compliance tooling.' },
              ].map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="text-mint font-bold text-lg">{s.step}</span>
                  <p className="text-white/70 leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="card !bg-white/5 !border-white/10">
            <h3 className="text-xl font-semibold text-mint">Architecture Highlights</h3>
            <ul className="mt-4 space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                Distributed agent runtime with horizontal scaling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                Multi-model LLM routing with cost optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                Encrypted data pipelines with zero-trust architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                99.9% uptime SLA with multi-region failover
              </li>
            </ul>
            <Link to="/infrastructure" className="inline-flex items-center gap-1 text-mint text-sm font-medium mt-6 hover:text-mint/80 transition-colors">
              View Infrastructure Details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
