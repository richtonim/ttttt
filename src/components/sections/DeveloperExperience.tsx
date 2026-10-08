import { Link } from 'react-router-dom'
import { codeExample } from '../../data/content'
import AnimateOnScroll from '../AnimateOnScroll'
import { ArrowRightIcon } from '../Icons'

const integrationSteps = [
  { step: '01', title: 'Install SDK', description: 'Add the Substratum SDK to your project via npm, pip, or go get.' },
  { step: '02', title: 'Configure API', description: 'Set your API key and configure model routing preferences.' },
  { step: '03', title: 'Deploy Agents', description: 'Create and deploy AI agents with tools, memory, and workflows.' },
  { step: '04', title: 'Go Live', description: 'Monitor performance, scale automatically, and iterate with confidence.' },
]

export default function DeveloperExperience() {
  return (
    <section className="section-padding" aria-labelledby="developer-heading">
      <div className="container-max mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Developer Experience</p>
          <h2 id="developer-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ship Faster with Developer-First Tools
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Comprehensive SDKs, clear documentation, and a powerful API designed for rapid integration.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimateOnScroll>
            <div className="code-block h-full">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-muted">example.ts</span>
              </div>
              <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <code>
                  {codeExample.split('\n').map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-muted/40 select-none w-8 flex-shrink-0 text-right pr-3">{i + 1}</span>
                      <span className={
                        line.includes('import') ? 'text-accent-light' :
                        line.includes('//') ? 'text-muted' :
                        line.includes("'") || line.includes('"') ? 'text-green-400/80' :
                        line.includes('await') || line.includes('const') || line.includes('for') ? 'text-accent' :
                        'text-white/80'
                      }>
                        {line || '\u00A0'}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="space-y-4">
              {integrationSteps.map((item) => (
                <div key={item.step} className="glass-card p-5 flex gap-4">
                  <span className="text-accent font-mono text-sm font-medium">{item.step}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 mb-6">
            {['TypeScript', 'Python', 'Go', 'REST API', 'GraphQL', 'Webhooks'].map((sdk) => (
              <span key={sdk} className="px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-muted">
                {sdk}
              </span>
            ))}
          </div>
          <Link to="/developers" className="btn-primary gap-2 inline-flex">
            Explore Developer Tools
            <ArrowRightIcon />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
