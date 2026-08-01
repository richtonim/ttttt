import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'
import { blogPosts } from '../data/content'

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog"
        description="Insights, engineering deep-dives, and product updates from the Substratum team."
        path="/blog"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-max mx-auto relative">
          <AnimateOnScroll className="max-w-3xl">
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg text-muted">
              Engineering deep-dives, product announcements, and perspectives on the future of AI infrastructure.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.1}>
                <article className="glass-card-hover p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <time className="text-xs text-muted" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 hover:text-accent transition-colors">
                    <Link to={`/blog#${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-muted flex-1 leading-relaxed">{post.excerpt}</p>
                  <Link
                    to={`/blog#${post.slug}`}
                    className="text-sm text-accent hover:text-accent-light transition-colors mt-4 inline-block"
                  >
                    Read more →
                  </Link>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
