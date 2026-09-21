import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { posts } from '../data/blog'

export function Blog() {
  return (
    <div className="page">
      <SEO
        title="Insights"
        description="Insights on spatial computing, NeRF, 3D Gaussian Splatting, and AI interior design from INTERIORPUP.AI."
        path="/blog"
      />
      <div className="container">
        <div className="section-head">
          <p className="badge">Insights</p>
          <h2 style={{ marginTop: '0.75rem' }}>Spatial intelligence notes</h2>
          <p>
            Research and product thinking for architects, designers, and PropTech builders.
          </p>
        </div>
        <div className="blog-list">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-item">
              <div className="meta">
                {post.category} · {post.date} · {post.readTime}
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
