import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navLinks } from '../data/content.js'
import Button from './Button.jsx'
import MegaMenu from './MegaMenu.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location.pathname])

  const textColor = transparent ? 'text-white' : 'text-ink'
  const logoSub = transparent ? 'text-white/70' : 'text-muted'

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ease-engineer ${
        transparent ? 'bg-transparent' : 'border-b border-hairline bg-white/90 backdrop-blur-md'
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-8">
        <Link to="/" className="flex flex-col leading-none">
          <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
            MORYA
          </span>
          <span className={`text-[10px] font-semibold tracking-[0.3em] ${logoSub}`}>
            GLOBAL ENTERPRISES
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) =>
            link.label === 'Products' ? (
              <div key={link.path} className="relative" onMouseEnter={() => setMegaOpen(true)}>
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${textColor} hover:text-gold`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 hover:text-gold ${
                    isActive ? 'text-gold' : textColor
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant={transparent ? 'ghost' : 'gold'} className={transparent ? '!px-0' : ''}>
            Get Quote
          </Button>
        </div>

        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <MegaMenu open={megaOpen} />

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hairline bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-section-bg"
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-3">
                <Button to="/contact" variant="gold" className="w-full justify-center">
                  Get Quote
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
