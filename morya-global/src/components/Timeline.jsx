import { motion } from 'framer-motion'

export default function Timeline({ items, numbered = true }) {
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-2 hidden h-[calc(100%-2rem)] w-px bg-hairline md:block" />
      <div className="flex flex-col gap-10 md:gap-14">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col gap-3 pl-0 md:flex-row md:gap-8 md:pl-0"
          >
            <div className="flex items-start gap-4 md:w-40 md:shrink-0">
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-dark text-xs font-bold text-white">
                {numbered ? item.step : index + 1}
              </span>
              {item.year && <span className="pt-1.5 text-sm font-semibold text-gold-dark">{item.year}</span>}
            </div>
            <div className="pb-2">
              <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
