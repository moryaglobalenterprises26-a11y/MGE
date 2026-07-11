import RevealOnScroll from './RevealOnScroll.jsx'
import Button from './Button.jsx'

export default function CTASection({
  title = "Let's Build Something Strong Together.",
  description = 'Tell us about your project and our engineering team will get back to you with next steps.',
}) {
  return (
    <section className="section-pad bg-primary-dark">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <RevealOnScroll className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl font-display text-display-md font-extrabold text-white">{title}</h2>
          <p className="max-w-xl text-base text-white/70">{description}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="gold">
              Get Quote
            </Button>
            <Button href="tel:+910000000000" variant="outline" className="border-white/30 text-white hover:border-gold hover:text-gold">
              Call Now
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
