import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { capabilities } from '../data/content.js'

export default function MegaMenu({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-full border-t border-hairline bg-white shadow-card"
        >
          <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-8 py-10 md:grid-cols-4">
            {capabilities.map((cap) => (
              <Link
                key={cap.slug}
                to={`/products#${cap.slug}`}
                className="group flex flex-col gap-2 rounded-xl p-3 transition-colors duration-200 hover:bg-section-bg"
              >
                <span className="font-display text-sm font-bold text-ink group-hover:text-primary-dark">
                  {cap.title}
                </span>
                <span className="text-xs leading-relaxed text-muted">{cap.description}</span>
              </Link>
            ))}
            <div className="col-span-full mt-2 border-t border-hairline pt-6">
              <Link
                to="/products"
                className="eyebrow inline-flex items-center gap-2 text-primary-dark hover:text-gold-dark"
              >
                View All Products &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
