import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import Button from '../components/Button.jsx'
import { faqs, industries } from '../data/content.js'

const infoCards = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['Office Address Placeholder,', 'Industrial Area, City, State, India'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 00000 00000', '+91 00000 00001'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['enquiry@moryaglobal.com', 'sales@moryaglobal.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday – Saturday: 9:00 AM – 7:00 PM', 'Sunday: Emergency support only'],
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <SEO
        title="Contact Us"
        description="Get in touch with Morya Global Enterprises for engineering, fabrication, plant maintenance and industrial product enquiries. Request a quotation today."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your project."
        description="Share your requirement and our engineering team will respond with next steps, typically within one business day."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, index) => (
              <RevealOnScroll
                key={card.title}
                delay={index * 0.08}
                className="rounded-2xl border border-hairline bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-card"
              >
                <card.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-base font-bold text-ink">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="mt-1 text-sm text-muted">
                    {line}
                  </p>
                ))}
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-bg">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-8">
          <RevealOnScroll direction="left">
            <p className="eyebrow text-gold-dark">Send an Enquiry</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              Tell us about your project.
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-dark"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-dark"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="mt-2 w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-dark"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-dark"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted" htmlFor="service">
                  Service Required
                </label>
                <select
                  id="service"
                  className="mt-2 w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-dark"
                >
                  <option>Dump Body Manufacturing</option>
                  <option>Engineering & Fabrication</option>
                  <option>Plant Maintenance</option>
                  <option>Automatic Gates & Shutters</option>
                  <option>Industrial Products</option>
                  <option>Material Handling Equipment</option>
                  <option>Industrial Safety Equipment</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted" htmlFor="message">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-dark"
                  placeholder="Tell us about your requirement, timelines and specifications."
                />
              </div>

              <Button type="submit" variant="gold" showArrow={false} className="w-full justify-center sm:w-auto">
                <Send className="mr-1 h-4 w-4" />
                Submit Enquiry
              </Button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium text-hover-green"
                >
                  Thank you. Your enquiry form is wired up as a placeholder &mdash; connect it to your
                  backend or form service to start receiving submissions.
                </motion.p>
              )}
            </form>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="flex flex-col gap-8">
            <div>
              <p className="eyebrow text-gold-dark">Find Us</p>
              <div className="mt-4 aspect-[4/3] w-full rounded-2xl border border-dashed border-hairline bg-white">
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
                  <MapPin className="h-6 w-6 text-muted/50" />
                  <span className="eyebrow text-muted/60">Google Maps Placeholder</span>
                </div>
              </div>
            </div>
            <ImagePlaceholder label="Office Photo" ratio="aspect-[16/10]" />
            <div>
              <p className="eyebrow text-gold-dark">Service Areas</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-hairline bg-white px-3 py-1.5 text-xs font-medium text-ink/70"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-gold-dark">FAQ</p>
            <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
              Frequently asked questions.
            </h2>
          </RevealOnScroll>
          <div className="mt-12 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
