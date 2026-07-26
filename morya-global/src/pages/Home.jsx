import { motion } from 'framer-motion'
import { ChevronDown, Factory, FlaskConical, Zap, Warehouse, Cog, HardHat, Building2, Truck, Network } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import SEO from '../components/SEO.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import Button from '../components/Button.jsx'
import Counter from '../components/Counter.jsx'
import Card from '../components/Card.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import Timeline from '../components/Timeline.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTASection from '../components/CTASection.jsx'
import {
  stats,
  capabilities,
  industries,
  whyChooseUs,
  process,
  testimonials as testimonialItems,
} from '../data/content.js'

const industryIcons = [Factory, Building2, FlaskConical, Zap, Warehouse, Cog, HardHat, Network, Truck, Building2]

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Engineering, Fabrication & Industrial Solutions"
        description="Morya Global Enterprises delivers engineering, fabrication, plant maintenance and industrial products across manufacturing, steel, chemical and power industries."
        path="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Morya Global Enterprises',
          description:
            'Industrial engineering, manufacturing, fabrication, maintenance and industrial products company.',
          url: 'https://www.moryaglobal.com',
        }}
      />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-primary-dark">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-full w-full items-center justify-center border border-dashed border-white/10 bg-[radial-gradient(circle_at_top_right,_#103C2D,_#082B20)]">
            <span className="eyebrow text-white/30">Industrial Hero Image Placeholder</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-primary-dark/30" />
        </motion.div>

        <div className="relative mx-auto max-w-content px-6 pt-24 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="eyebrow text-gold"
          >
            Industrial Engineering &middot; Fabrication &middot; Maintenance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl font-display text-display-xl font-extrabold text-white"
          >
            Engineering Tomorrow.
            <br />
            Building Trust.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Delivering engineering, fabrication, maintenance and industrial supply solutions across
            multiple industries with uncompromising quality and safety.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button to="/products" variant="gold">
              Explore Services
            </Button>
            <Button to="/contact" variant="outline" className="border-white/30 text-white hover:border-gold hover:text-gold">
              Get Quote
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-white/50" />
        </motion.div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative z-10 -mt-16 px-6 md:px-8">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-card md:grid-cols-4 md:gap-6 md:p-10">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1} className="text-center md:text-left">
              <p className="font-display text-3xl font-extrabold text-primary-dark md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted md:text-sm">
                {stat.label}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-8">
          <RevealOnScroll direction="left">
            <p className="eyebrow text-gold-dark">Who We Are</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              A partner in precision, built for heavy industry.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Morya Global Enterprises is an industrial engineering, manufacturing, fabrication,
              maintenance and industrial products company serving manufacturing plants, EPC
              contractors and industrial buyers across the country. Our teams combine engineering
              rigor with hands-on execution, delivering solutions that hold up under real operating
              conditions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From dump body manufacturing to plant maintenance and industrial safety supply, every
              engagement is built on the same foundation &mdash; quality, safety and long-term
              partnership.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="primary">
                About Our Company
              </Button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <ImagePlaceholder label="Factory Image" ratio="aspect-[4/5]" />
          </RevealOnScroll>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="section-pad bg-section-bg">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold-dark">Our Core Capabilities</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              Engineering strength, delivered end-to-end.
            </h2>
          </RevealOnScroll>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, index) => (
              <Card
                key={cap.slug}
                title={cap.title}
                description={cap.description}
                placeholder={cap.placeholder}
                to={`/products#${cap.slug}`}
                delay={(index % 3) * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold-dark">Industries We Serve</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              Trusted across heavy industry sectors.
            </h2>
          </RevealOnScroll>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index % industryIcons.length]
              return (
                <RevealOnScroll
                  key={industry}
                  delay={(index % 5) * 0.06}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-white p-6 text-center transition-colors duration-300 hover:border-gold"
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 4 }} transition={{ duration: 0.3 }}>
                    <Icon className="h-7 w-7 text-primary-dark" strokeWidth={1.5} />
                  </motion.div>
                  <span className="text-sm font-medium text-ink">{industry}</span>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-gold">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold">Why Choose Morya</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-white">
              What sets our partnership apart.
            </h2>
          </RevealOnScroll>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <RevealOnScroll
                key={item.title}
                delay={(index % 4) * 0.08}
                className="flex flex-col gap-3 bg-gold p-8 transition-colors duration-300 hover:bg-gold-dark"
              >
                <span className="font-display text-2xl font-extrabold text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold-dark">Our Process</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              From consultation to long-term support.
            </h2>
          </RevealOnScroll>
          <div className="mt-14">
            <Timeline items={process} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-section-bg">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold-dark">Testimonials</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              Trusted by industry partners.
            </h2>
          </RevealOnScroll>
          <div className="mt-14">
            <Testimonials items={testimonialItems} />
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
