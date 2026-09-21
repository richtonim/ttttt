import { Link, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { getPost } from '../data/blog'

export function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <div className="page">
        <div className="container page-narrow">
          <h1>Article not found</h1>
          <p className="form-note" style={{ margin: '1rem 0' }}>
            This insight does not exist.
          </p>
          <Link to="/blog" className="btn btn-ghost">
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <article className="container page-narrow prose">
        <p className="badge">
          {post.category} · {post.date} · {post.readTime}
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', margin: '0.8rem 0 1.5rem' }}>
          {post.title}
        </h1>
        {post.content.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
        <div style={{ marginTop: '2.5rem' }}>
          <Link to="/blog" className="btn btn-ghost">
            All Insights
          </Link>
        </div>
      </article>
    </div>
  )
}
