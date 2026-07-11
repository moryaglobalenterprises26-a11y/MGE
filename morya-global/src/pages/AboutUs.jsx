import PageTransition from '../components/PageTransition.jsx'
import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import Timeline from '../components/Timeline.jsx'
import CTASection from '../components/CTASection.jsx'
import { milestones, coreValues, industries } from '../data/content.js'
import { ShieldCheck, Award, Users } from 'lucide-react'

const team = [
  { name: 'Name Placeholder', role: 'Managing Director' },
  { name: 'Name Placeholder', role: 'Head of Engineering' },
  { name: 'Name Placeholder', role: 'Head of Operations' },
  { name: 'Name Placeholder', role: 'Quality & Safety Lead' },
]

export default function AboutUs() {
  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="Learn about Morya Global Enterprises: our story, mission, vision, core values, leadership team and commitment to quality and safety across industrial engineering."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="Built on engineering discipline, proven over time."
        description="Morya Global Enterprises has grown from a fabrication workshop into a full-scale industrial engineering partner, without losing sight of the standards we started with."
      />

      {/* COMPANY STORY */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-8">
          <RevealOnScroll direction="left">
            <p className="eyebrow text-gold-dark">Our Story</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              From workshop floor to industrial partner.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              What began as a focused fabrication operation has grown into a multi-disciplinary
              industrial engineering company, spanning manufacturing, maintenance and industrial
              product supply. Our growth has always followed our clients&rsquo; needs, not the other
              way around.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Today, our teams work across steel plants, chemical facilities, power plants and
              logistics operations &mdash; bringing the same engineering discipline to every project,
              regardless of scale.
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <ImagePlaceholder label="Workshop Image" ratio="aspect-[4/5]" />
          </RevealOnScroll>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="section-pad bg-section-bg">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <RevealOnScroll className="rounded-2xl border border-hairline bg-white p-10">
              <p className="eyebrow text-gold-dark">Mission</p>
              <h3 className="mt-4 font-display text-xl font-bold text-primary-dark">
                To deliver engineering, fabrication and industrial solutions our clients can build
                their operations on, safely and reliably.
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1} className="rounded-2xl border border-hairline bg-white p-10">
              <p className="eyebrow text-gold-dark">Vision</p>
              <h3 className="mt-4 font-display text-xl font-bold text-primary-dark">
                To be the most trusted industrial engineering partner in every region we serve.
              </h3>
            </RevealOnScroll>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <RevealOnScroll
                key={value.title}
                delay={index * 0.08}
                className="rounded-2xl border border-hairline bg-white p-7"
              >
                <h4 className="font-display text-base font-bold text-primary-dark">{value.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold-dark">Our Team</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              Leadership behind the engineering.
            </h2>
          </RevealOnScroll>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <RevealOnScroll key={member.name + index} delay={index * 0.08}>
                <ImagePlaceholder label="Team Image" ratio="aspect-square" />
                <p className="mt-4 font-display text-base font-bold text-ink">{member.name}</p>
                <p className="text-sm text-muted">{member.role}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section-pad bg-section-bg">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold-dark">Our Facilities</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              Where engineering becomes execution.
            </h2>
          </RevealOnScroll>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <RevealOnScroll>
              <ImagePlaceholder label="Factory Image" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <ImagePlaceholder label="Workshop Image" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <ImagePlaceholder label="Office Image" />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section-pad">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold-dark">Milestones</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              Our journey so far.
            </h2>
          </RevealOnScroll>
          <div className="mt-14">
            <Timeline items={milestones} numbered={false} />
          </div>
        </div>
      </section>

      {/* TRUST / COMMITMENTS */}
      <section className="section-pad bg-primary-dark">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold">Why Customers Trust Us</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-white">
              Quality and safety, without exception.
            </h2>
          </RevealOnScroll>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <RevealOnScroll className="rounded-2xl bg-secondary-deep p-8">
              <Award className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-bold text-white">Quality Commitment</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Every project is inspected against defined engineering and quality standards before
                it leaves our facility.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1} className="rounded-2xl bg-secondary-deep p-8">
              <ShieldCheck className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-bold text-white">Safety Commitment</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Our teams operate under strict safety protocols on every site, every shift, without
                exception.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} className="rounded-2xl bg-secondary-deep p-8">
              <Users className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-bold text-white">Industries Served</h3>
              <p className="mt-3 flex flex-wrap gap-2">
                {industries.slice(0, 6).map((industry) => (
                  <span key={industry} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    {industry}
                  </span>
                ))}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
