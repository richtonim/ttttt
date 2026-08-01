import { securityFeatures } from '../../data/content'
import AnimateOnScroll from '../AnimateOnScroll'

export default function Security() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="security-heading">
      <div className="container-max mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Security & Performance</p>
          <h2 id="security-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Enterprise-Grade by Default
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Built with security, compliance, and performance at the core — so you can focus on building.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, i) => (
            <AnimateOnScroll key={feature.title} delay={i * 0.1}>
              <div className="glass-card-hover p-6 h-full">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
