import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'
import { products, architectureLayers, capabilities } from '../data/content'
import { ArrowRightIcon } from '../components/Icons'

export default function PlatformPage() {
  return (
    <>
      <SEO
        title="Platform"
        description="Explore the Substratum platform — modular AI infrastructure with model orchestration, agent runtime, knowledge engine, and developer APIs."
        path="/platform"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-max mx-auto relative">
          <AnimateOnScroll className="max-w-3xl">
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Platform</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              The Complete AI Infrastructure Stack
            </h1>
            <p className="text-lg text-muted mb-8">
              Substratum provides a unified platform for building, deploying, and scaling AI-powered applications.
              From data pipelines to autonomous agents, every layer is designed for modularity and extensibility.
            </p>
            <Link to="/developers" className="btn-primary gap-2 inline-flex">
              Get Started
              <ArrowRightIcon />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-surface" aria-labelledby="platform-arch">
        <div className="container-max mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 id="platform-arch" className="text-3xl font-bold tracking-tight mb-4">Architecture Overview</h2>
            <p className="text-muted max-w-2xl">
              Four interconnected layers that form a complete, API-first AI infrastructure stack.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectureLayers.map((layer, i) => (
              <AnimateOnScroll key={layer.name} delay={i * 0.1}>
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: layer.color }} />
                    <h3 className="text-lg font-semibold">{layer.name}</h3>
                  </div>
                  <p className="text-sm text-muted">{layer.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="platform-modules">
        <div className="container-max mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 id="platform-modules" className="text-3xl font-bold tracking-tight mb-4">Platform Modules</h2>
            <p className="text-muted max-w-2xl">
              Each module can be used independently or composed together for a complete AI infrastructure solution.
            </p>
          </AnimateOnScroll>

          <div className="space-y-8">
            {products.map((product, i) => (
              <AnimateOnScroll key={product.slug} delay={i * 0.1}>
                <div id={product.slug} className="glass-card p-8 scroll-mt-24">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-muted text-sm">{product.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="text-sm font-medium text-accent mb-3 uppercase tracking-wide">Key Benefits</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {product.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Capabilities</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <AnimateOnScroll key={cap.title} delay={i * 0.08}>
                <div className="glass-card-hover p-5">
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted">{cap.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
