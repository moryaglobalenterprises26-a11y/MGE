import { motion } from 'framer-motion'

const directions = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: -28 },
  right: { y: 0, x: 28 },
  none: { y: 0, x: 0 },
}

/**
 * Wraps children with a subtle fade + rise reveal, triggered once when
 * scrolled into view. Keep motion understated per the brand's premium,
 * non-flashy direction.
 */
export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  as: Component = 'div',
  ...rest
}) {
  const offset = directions[direction] ?? directions.up
  const MotionComponent = motion[Component] ?? motion.div

  return (
    <MotionComponent
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
