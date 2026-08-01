import { capabilities } from '../../data/content'
import AnimateOnScroll from '../AnimateOnScroll'
import { CapabilityIcon } from '../Icons'

export default function Capabilities() {
  return (
    <section className="section-padding relative" aria-labelledby="capabilities-heading">
      <div className="container-max mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Core Capabilities</p>
          <h2 id="capabilities-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built for the AI-Native Era
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale intelligent systems — from model infrastructure to autonomous agents.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <AnimateOnScroll key={cap.title} delay={i * 0.1}>
              <div className="glass-card-hover p-6 h-full group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  <CapabilityIcon name={cap.icon} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{cap.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
