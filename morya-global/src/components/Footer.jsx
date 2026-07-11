import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { navLinks, capabilities } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-content px-6 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-display text-xl font-extrabold tracking-tight">MORYA</span>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-white/50">
              GLOBAL ENTERPRISES
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Engineering tomorrow. Building trust. Industrial engineering, fabrication, maintenance
              and industrial products, delivered with precision.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-white/60 transition-colors hover:text-gold">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/60 transition-colors hover:text-gold">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/60 transition-colors hover:text-gold">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-white/50">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/70 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy-policy" className="text-sm text-white/70 transition-colors hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-white/50">Services</h3>
            <ul className="mt-5 space-y-3">
              {capabilities.slice(0, 5).map((cap) => (
                <li key={cap.slug}>
                  <Link
                    to={`/products#${cap.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-white/50">Contact</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Office Address Placeholder, Industrial Area, City, State, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span>enquiry@moryaglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>&copy; {year} Morya Global Enterprises. All rights reserved.</p>
          <p>Engineering Precision. Corporate Trust.</p>
        </div>
      </div>
    </footer>
  )
}
