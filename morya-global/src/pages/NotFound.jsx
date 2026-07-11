import PageTransition from '../components/PageTransition.jsx'
import SEO from '../components/SEO.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
        <RevealOnScroll className="flex flex-col items-center gap-6">
          <span className="font-display text-6xl font-extrabold text-primary-dark">404</span>
          <h1 className="font-display text-2xl font-bold text-ink">Page Not Found</h1>
          <p className="max-w-md text-sm text-muted">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved. Head back to
            our homepage to continue exploring.
          </p>
          <Button to="/">Back to Home</Button>
        </RevealOnScroll>
      </section>
    </PageTransition>
  )
}
