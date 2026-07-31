import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." noindex />
      <section className="section-padding bg-white min-h-[60vh] flex items-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-8xl font-bold text-navy/10">404</div>
          <h1 className="text-3xl font-bold text-navy mt-4">Page Not Found</h1>
          <p className="mt-4 text-navy/60">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
