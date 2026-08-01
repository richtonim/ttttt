import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'
import { ArrowRightIcon } from '../components/Icons'

const solutionDetails = [
  {
    id: 'ai-saas',
    title: 'AI SaaS',
    description: 'Launch and scale AI-powered SaaS products with multi-tenant infrastructure, usage-based billing integration, and automatic scaling.',
    features: ['Multi-tenant isolation', 'Usage metering', 'White-label deployment', 'Custom model routing'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Automation',
    description: 'Transform business operations with intelligent workflow automation that connects your existing systems with AI capabilities.',
    features: ['ERP/CRM integration', 'Approval workflows', 'Audit logging', 'Role-based access'],
  },
  {
    id: 'support',
    title: 'Intelligent Support',
    description: 'Deploy context-aware AI agents that understand your products, policies, and customer history for superior support experiences.',
    features: ['Knowledge base integration', 'Multi-channel support', 'Escalation routing', 'Sentiment analysis'],
  },
  {
    id: 'devtools',
    title: 'Developer Tools',
    description: 'Build AI-native developer tools with our comprehensive API platform, SDKs, and real-time streaming capabilities.',
    features: ['Code analysis agents', 'API documentation generation', 'CI/CD integration', 'Plugin ecosystem'],
  },
  {
    id: 'finance',
    title: 'Financial Analysis',
    description: 'Process financial data in real-time with specialized models for risk assessment, market analysis, and regulatory compliance.',
    features: ['Real-time data feeds', 'Compliance reporting', 'Risk scoring models', 'Anomaly detection'],
  },
  {
    id: 'knowledge',
    title: 'Knowledge Management',
    description: 'Transform organizational knowledge into actionable insights with RAG pipelines, semantic search, and intelligent summarization.',
    features: ['Document ingestion', 'Semantic search', 'Auto-summarization', 'Knowledge graphs'],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <SEO
        title="Solutions"
        description="Discover how Substratum powers AI SaaS, enterprise automation, intelligent support, developer tools, financial analysis, and knowledge management."
        path="/solutions"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-max mx-auto relative">
          <AnimateOnScroll className="max-w-3xl">
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Solutions</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              AI Infrastructure for Every Use Case
            </h1>
            <p className="text-lg text-muted">
              Whether you&apos;re building the next AI SaaS unicorn or automating enterprise workflows,
              Substratum provides the foundation to move fast and scale confidently.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max mx-auto space-y-12">
          {solutionDetails.map((solution, i) => (
            <AnimateOnScroll key={solution.id} delay={i * 0.1}>
              <div id={solution.id} className="glass-card p-8 scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{solution.title}</h2>
                    <p className="text-muted leading-relaxed">{solution.description}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-accent mb-4 uppercase tracking-wide">Capabilities</h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <span className="w-5 h-5 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Talk to our team about your specific use case and how Substratum can accelerate your AI initiatives.
            </p>
            <Link to="/contact" className="btn-primary gap-2 inline-flex">
              Contact Sales
              <ArrowRightIcon />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
