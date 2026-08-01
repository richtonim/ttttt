import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'
import { codeExample } from '../data/content'
import { ArrowRightIcon } from '../components/Icons'

const sdks = [
  { name: 'TypeScript / Node.js', install: 'npm install @substratum/sdk', docs: '/documentation#typescript' },
  { name: 'Python', install: 'pip install substratum', docs: '/documentation#python' },
  { name: 'Go', install: 'go get github.com/substratum/sdk-go', docs: '/documentation#go' },
  { name: 'REST API', install: 'curl https://api.substratum.pro/v1', docs: '/documentation#rest' },
]

const apiEndpoints = [
  { method: 'POST', path: '/v1/agents', description: 'Create and deploy an AI agent' },
  { method: 'POST', path: '/v1/models/complete', description: 'Run model inference with routing' },
  { method: 'GET', path: '/v1/knowledge/search', description: 'Semantic search across knowledge bases' },
  { method: 'POST', path: '/v1/workflows/run', description: 'Execute a workflow automation' },
  { method: 'GET', path: '/v1/metrics', description: 'Retrieve platform usage metrics' },
  { method: 'WS', path: '/v1/stream', description: 'Real-time streaming inference' },
]

export default function DevelopersPage() {
  return (
    <>
      <SEO
        title="Developers"
        description="Developer tools, SDKs, and API reference for building on Substratum. TypeScript, Python, Go SDKs with comprehensive documentation."
        path="/developers"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-max mx-auto relative">
          <AnimateOnScroll className="max-w-3xl">
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Developers</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Build with Substratum
            </h1>
            <p className="text-lg text-muted mb-8">
              Everything you need to integrate AI infrastructure into your applications.
              SDKs, APIs, and tools designed for developer productivity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/documentation" className="btn-primary gap-2 inline-flex">
                Read the Docs
                <ArrowRightIcon />
              </Link>
              <a href="https://github.com/substratum" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View on GitHub
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="sdks" className="section-padding bg-surface scroll-mt-24">
        <div className="container-max mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">SDKs & Libraries</h2>
            <p className="text-muted">Official SDKs for your preferred language and framework.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sdks.map((sdk, i) => (
              <AnimateOnScroll key={sdk.name} delay={i * 0.1}>
                <div className="glass-card-hover p-6">
                  <h3 className="font-semibold mb-3">{sdk.name}</h3>
                  <code className="block text-sm font-mono text-accent-light bg-black/30 px-3 py-2 rounded-lg mb-3">
                    {sdk.install}
                  </code>
                  <Link to={sdk.docs} className="text-sm text-accent hover:text-accent-light transition-colors">
                    View documentation →
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="section-padding scroll-mt-24">
        <div className="container-max mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">API Reference</h2>
            <p className="text-muted">RESTful API with streaming support and comprehensive OpenAPI specification.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="space-y-3">
                {apiEndpoints.map((endpoint) => (
                  <div key={endpoint.path} className="glass-card p-4 flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                      endpoint.method === 'GET' ? 'bg-green-500/10 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-purple-500/10 text-purple-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <div>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                      <p className="text-xs text-muted mt-0.5">{endpoint.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="code-block">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="text-xs text-muted">Quick Start</span>
                </div>
                <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto">
                  <code className="text-white/80">{codeExample}</code>
                </pre>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
