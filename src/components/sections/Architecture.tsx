import { architectureLayers } from '../../data/content'
import AnimateOnScroll from '../AnimateOnScroll'

export default function Architecture() {
  return (
    <section className="section-padding relative bg-surface" aria-labelledby="architecture-heading">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
      <div className="container-max mx-auto relative">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Platform Architecture</p>
          <h2 id="architecture-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Modular. Extensible. API-First.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A layered architecture designed for multi-model compatibility and seamless integration at every level.
          </p>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto space-y-4">
          {architectureLayers.map((layer, i) => (
            <AnimateOnScroll key={layer.name} delay={i * 0.15}>
              <div className="glass-card-hover p-6 flex items-center gap-6 group">
                <div
                  className="w-1 h-16 rounded-full flex-shrink-0 transition-all group-hover:h-20"
                  style={{ backgroundColor: layer.color }}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold">{layer.name}</h3>
                    <span className="text-xs text-muted font-mono">Layer {4 - i}</span>
                  </div>
                  <p className="text-sm text-muted">{layer.description}</p>
                </div>
                {i < architectureLayers.length - 1 && (
                  <div className="hidden sm:flex flex-col items-center text-muted" aria-hidden="true">
                    <div className="w-px h-4 bg-white/10" />
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center" delay={0.6}>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <span className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">Multi-Model Compatible</span>
            <span className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">API-First Design</span>
            <span className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">Horizontally Scalable</span>
            <span className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">Event-Driven</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
