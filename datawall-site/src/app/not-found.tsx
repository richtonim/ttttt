import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-electric">404</p>
      <h1 className="section-title mt-4 font-medium text-white">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-10">
        Return Home
      </Link>
    </section>
  );
}
