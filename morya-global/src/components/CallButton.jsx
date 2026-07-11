import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function CallButton() {
  return (
    <motion.a
      href="tel:+910000000000"
      aria-label="Call us now"
      className="fixed bottom-6 right-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-card"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.4 }}
    >
      <Phone className="h-5 w-5" strokeWidth={2} />
    </motion.a>
  )
}
