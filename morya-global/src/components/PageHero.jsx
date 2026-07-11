import RevealOnScroll from './RevealOnScroll.jsx'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-hairline bg-section-bg pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <RevealOnScroll>
          {eyebrow && <p className="eyebrow text-gold-dark">{eyebrow}</p>}
          <h1 className="mt-4 max-w-3xl font-display text-display-lg font-extrabold text-primary-dark">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
          )}
        </RevealOnScroll>
      </div>
    </section>
  )
}
