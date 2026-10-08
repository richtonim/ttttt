import { metrics } from '../../data/content'
import { useCountUp } from '../../hooks/useCountUp'
import AnimateOnScroll from '../AnimateOnScroll'

function MetricCard({ label, value, suffix, decimals, prefix }: {
  label: string
  value: number
  suffix: string
  decimals: number
  prefix?: string
}) {
  const { ref, formatted } = useCountUp({ end: value, suffix, decimals, prefix })

  return (
    <div ref={ref} className="glass-card p-6 text-center">
      <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{formatted}</p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  )
}

export default function Metrics() {
  return (
    <section className="section-padding" aria-labelledby="metrics-heading">
      <div className="container-max mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Platform Metrics</p>
          <h2 id="metrics-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Trusted at Scale
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Real-time platform metrics demonstrating reliability and performance across our global infrastructure.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, i) => (
            <AnimateOnScroll key={metric.label} delay={i * 0.1}>
              <MetricCard {...metric} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
