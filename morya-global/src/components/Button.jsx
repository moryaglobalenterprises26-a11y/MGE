import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'bg-primary-dark text-white hover:bg-hover-green',
  gold: 'bg-gold text-white hover:bg-gold-dark',
  outline: 'border border-ink/20 text-ink hover:border-primary-dark hover:text-primary-dark',
  ghost: 'text-white hover:text-gold',
}

const Button = forwardRef(function Button(
  { children, to, href, variant = 'primary', showArrow = true, className = '', onClick, type = 'button', ...rest },
  ref,
) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 ease-engineer ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-engineer group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.25}
        />
      )}
    </>
  )

  const motionProps = { whileTap: { scale: 0.97 } }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link ref={ref} to={to} className={classes} {...rest}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a ref={ref} href={href} className={classes} {...rest}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button ref={ref} type={type} onClick={onClick} className={classes} {...motionProps} {...rest}>
      {content}
    </motion.button>
  )
})

export default Button
