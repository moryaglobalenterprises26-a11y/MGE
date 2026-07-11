import { motion } from 'framer-motion'
import { FileDown, MessageSquare, ImageIcon, Check } from 'lucide-react'

export default function ProductCard({ product, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-section-bg">
        <div className="flex h-full w-full items-center justify-center transition-transform duration-500 ease-engineer group-hover:scale-105">
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="h-6 w-6 text-muted/50" strokeWidth={1.5} />
            <span className="eyebrow text-muted/60">Product Image</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-7">
        <div>
          <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
        </div>

        <div>
          <p className="eyebrow text-ink/60">Applications</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <span
                key={app}
                className="rounded-full bg-section-bg px-3 py-1 text-xs font-medium text-ink/70"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-ink/60">Key Features</p>
          <ul className="mt-2 space-y-1.5">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink/80">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-hairline pt-5 sm:flex-row">
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/20 px-4 py-2.5 text-xs font-semibold text-ink transition-colors duration-300 hover:border-primary-dark hover:text-primary-dark">
            <FileDown className="h-3.5 w-3.5" />
            Download Brochure
          </button>
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-dark px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-hover-green">
            <MessageSquare className="h-3.5 w-3.5" />
            Enquiry
          </button>
        </div>
      </div>
    </motion.div>
  )
}
