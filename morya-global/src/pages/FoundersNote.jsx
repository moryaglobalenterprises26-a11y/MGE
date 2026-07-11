import PageTransition from '../components/PageTransition.jsx'
import SEO from '../components/SEO.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import CTASection from '../components/CTASection.jsx'
import { coreValues } from '../data/content.js'

export default function FoundersNote() {
  return (
    <PageTransition>
      <SEO
        title="A Note From Our Founder"
        description="Read a note from the founder of Morya Global Enterprises on the company's engineering philosophy, vision and commitment to industrial partners."
        path="/founders-note"
      />

      <section className="pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll>
            <p className="eyebrow text-gold-dark">Founder&rsquo;s Note</p>
            <h1 className="mt-4 max-w-3xl font-display text-display-lg font-extrabold text-primary-dark">
              A Note From Our Founder
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-[minmax(0,380px)_1fr] md:gap-20 md:px-8">
          <RevealOnScroll direction="left">
            <div className="sticky top-28">
              <ImagePlaceholder label="Founder Photo" ratio="aspect-[4/5]" />
              <div className="mt-6">
                <p className="font-display text-lg font-bold text-ink">Founder Name Placeholder</p>
                <p className="text-sm text-muted">Founder &amp; Managing Director, Morya Global Enterprises</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="max-w-2xl">
            <div className="space-y-6 text-base leading-relaxed text-ink/80">
              <p className="font-display text-2xl font-bold leading-snug text-primary-dark">
                Dear Partner,
              </p>
              <p>
                When we started Morya Global Enterprises, the goal was simple to say and hard to
                deliver: build things that industry can rely on, and never let that reliability
                slip as we grow. Every dump body, every fabricated structure, every maintenance
                contract we take on carries that same standard.
              </p>
              <p>
                Industrial work does not forgive shortcuts. A weld either holds or it doesn&rsquo;t.
                A gate either operates safely, shift after shift, or it becomes a liability. That
                reality shaped how we built this company &mdash; around engineering discipline,
                trained people, and a refusal to compromise on safety, even when it would be easier
                or cheaper to do so.
              </p>
              <p>
                Over the years, we have had the privilege of working alongside manufacturing
                plants, steel and chemical facilities, EPC contractors and logistics operators who
                trusted us with their operations. That trust is the actual asset of this company
                &mdash; more than any machine on our shop floor.
              </p>
              <p>
                As we continue to expand our capabilities, from engineering and fabrication to
                industrial products and plant maintenance, our commitment remains the same: to be a
                long-term partner your operation can depend on, not a one-time vendor.
              </p>
              <p>
                Thank you for considering Morya Global Enterprises. We look forward to building
                something strong, together.
              </p>
              <div className="pt-6">
                <div className="h-12 w-40 rounded border border-dashed border-hairline bg-section-bg" role="img" aria-label="Signature Placeholder" />
                <p className="mt-3 text-sm font-semibold text-ink">Founder Name Placeholder</p>
                <p className="text-xs text-muted">Founder &amp; Managing Director</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad bg-section-bg">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <RevealOnScroll>
              <p className="eyebrow text-gold-dark">Vision</p>
              <h3 className="mt-4 font-display text-xl font-bold text-primary-dark">
                To be the most trusted industrial engineering partner in every region we serve.
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="eyebrow text-gold-dark">Mission</p>
              <h3 className="mt-4 font-display text-xl font-bold text-primary-dark">
                To deliver engineering, fabrication and industrial solutions that our clients can
                build their operations on, safely and reliably.
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="eyebrow text-gold-dark">Core Values</p>
              <ul className="mt-4 space-y-2">
                {coreValues.map((value) => (
                  <li key={value.title} className="text-sm font-semibold text-ink">
                    {value.title}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
