import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ImageIcon, ArrowUpRight } from 'lucide-react'

export default function Card({ title, description, placeholder, to = '/products', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-section-bg">
        <div className="flex h-full w-full items-center justify-center transition-transform duration-500 ease-engineer group-hover:scale-105">
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="h-6 w-6 text-muted/50" strokeWidth={1.5} />
            <span className="eyebrow text-muted/60">{placeholder}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>
        <Link
          to={to}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark transition-colors duration-200 group-hover:text-gold-dark"
        >
          Learn More
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  )
}
