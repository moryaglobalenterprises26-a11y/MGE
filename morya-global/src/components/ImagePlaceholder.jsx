import { ImageIcon } from 'lucide-react'

/**
 * Bordered placeholder that preserves final layout dimensions so real
 * photography can be dropped in later without any layout shift.
 */
export default function ImagePlaceholder({ label = 'Image Placeholder', className = '', ratio = 'aspect-[4/5]' }) {
  return (
    <div
      className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-hairline bg-section-bg ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <ImageIcon className="h-6 w-6 text-muted/60" strokeWidth={1.5} />
        <span className="eyebrow text-muted/70">{label}</span>
      </div>
      <div className="pointer-events-none absolute inset-0 border border-white/40" />
    </div>
  )
}
