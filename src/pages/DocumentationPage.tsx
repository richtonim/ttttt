import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'

const docSections = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Quick Start Guide', description: 'Set up your first project in under 5 minutes' },
      { name: 'Authentication', description: 'API keys, OAuth, and service accounts' },
      { name: 'Environment Setup', description: 'Configure development and production environments' },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { name: 'Model Orchestration', description: 'Route requests across multiple models' },
      { name: 'Agent Architecture', description: 'Build autonomous agents with tools and memory' },
      { name: 'Knowledge Bases', description: 'RAG pipelines and vector storage' },
      { name: 'Workflows', description: 'Composable automation pipelines' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { name: 'REST API', description: 'Complete REST endpoint documentation' },
      { name: 'Streaming API', description: 'WebSocket and SSE streaming' },
      { name: 'Webhooks', description: 'Event-driven integrations' },
      { name: 'Rate Limits', description: 'Usage quotas and throttling' },
    ],
  },
  {
    title: 'SDKs',
    items: [
      { name: 'TypeScript SDK', description: 'Node.js and browser support', id: 'typescript' },
      { name: 'Python SDK', description: 'Async and sync clients', id: 'python' },
      { name: 'Go SDK', description: 'High-performance Go client', id: 'go' },
      { name: 'REST API', description: 'Direct HTTP integration', id: 'rest' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { name: 'Deploying Agents', description: 'Production agent deployment patterns' },
      { name: 'Multi-Model Routing', description: 'Optimize cost and latency' },
      { name: 'Security Best Practices', description: 'Secure your AI infrastructure' },
      { name: 'Monitoring & Observability', description: 'Track performance and debug issues' },
    ],
  },
]

export default function DocumentationPage() {
  return (
    <>
      <SEO
        title="Documentation"
        description="Comprehensive documentation for Substratum platform. Quick start guides, API reference, SDK documentation, and best practices."
        path="/documentation"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-max mx-auto relative">
          <AnimateOnScroll className="max-w-3xl">
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Documentation</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Documentation
            </h1>
            <p className="text-lg text-muted mb-8">
              Everything you need to build on Substratum. From quick start guides to advanced architecture patterns.
            </p>
            <div className="relative max-w-lg">
              <label htmlFor="doc-search" className="sr-only">Search documentation</label>
              <input
                id="doc-search"
                type="search"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 pl-10 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm focus:outline-none focus:border-accent/50"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, i) => (
              <AnimateOnScroll key={section.title} delay={i * 0.1}>
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-accent">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={'id' in item ? `#${item.id}` : '#'}
                          className="block glass-card-hover p-4 group"
                        >
                          <h3 className="text-sm font-medium group-hover:text-accent transition-colors">{item.name}</h3>
                          <p className="text-xs text-muted mt-1">{item.description}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max mx-auto">
          <AnimateOnScroll>
            <div className="glass-card p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Need Help?</h2>
              <p className="text-muted mb-6">
                Can&apos;t find what you&apos;re looking for? Our developer support team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary text-sm">Contact Support</Link>
                <a href="https://github.com/substratum/discussions" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  Community Forum
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
