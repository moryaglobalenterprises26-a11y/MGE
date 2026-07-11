import { Quote } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll.jsx'

export default function Testimonials({ items }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item, index) => (
        <RevealOnScroll key={item.name + index} delay={index * 0.1}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-hairline bg-white p-8 shadow-soft">
            <Quote className="h-6 w-6 text-gold" strokeWidth={1.5} />
            <p className="mt-5 flex-1 text-sm leading-relaxed text-ink/80">{item.quote}</p>
            <div className="mt-6 border-t border-hairline pt-5">
              <p className="text-sm font-semibold text-ink">{item.name}</p>
              <p className="text-xs text-muted">{item.role}</p>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  )
}
