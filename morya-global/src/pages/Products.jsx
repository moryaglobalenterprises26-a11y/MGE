import PageTransition from '../components/PageTransition.jsx'
import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { productCategories } from '../data/content.js'

export default function Products() {
  return (
    <PageTransition>
      <SEO
        title="Industrial Products & Equipment"
        description="Explore Morya Global Enterprises' industrial product range: dump body manufacturing, engineering and fabrication, plant maintenance, automatic gates, industrial products, safety equipment and material handling."
        path="/products"
      />
      <PageHero
        eyebrow="Our Products"
        title="Engineered products, built for industrial reality."
        description="Every product line is engineered, tested and supplied to the standards your operation depends on. Browse our capabilities below, or reach out for a project-specific quotation."
      />

      {productCategories.map((category, catIndex) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`section-pad scroll-mt-24 ${catIndex % 2 === 1 ? 'bg-section-bg' : ''}`}
        >
          <div className="mx-auto max-w-content px-6 md:px-8">
            <RevealOnScroll className="max-w-2xl">
              <p className="eyebrow text-gold-dark">{`0${catIndex + 1}`}</p>
              <h2 className="mt-4 font-display text-display-md font-extrabold text-primary-dark">
                {category.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">{category.description}</p>
            </RevealOnScroll>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product, index) => (
                <ProductCard key={product.name} product={product} delay={(index % 3) * 0.1} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Need a Custom Industrial Solution?"
        description="Share your specification and our engineering team will respond with a tailored quotation."
      />
    </PageTransition>
  )
}
