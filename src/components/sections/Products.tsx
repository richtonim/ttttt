import { Link } from 'react-router-dom'
import { products } from '../../data/content'
import AnimateOnScroll from '../AnimateOnScroll'
import { ArrowRightIcon } from '../Icons'

export default function Products() {
  return (
    <section className="section-padding" aria-labelledby="products-heading">
      <div className="container-max mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Product Modules</p>
          <h2 id="products-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Every Layer, One Platform
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Composable modules that work independently or together to power your AI infrastructure.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <AnimateOnScroll key={product.name} delay={i * 0.1}>
              <div className="glass-card-hover p-6 h-full flex flex-col group">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted mb-4 flex-1">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/platform#${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors group/link"
                >
                  Learn more
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
