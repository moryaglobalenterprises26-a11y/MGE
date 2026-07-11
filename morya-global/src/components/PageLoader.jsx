export default function PageLoader() {
  return (
    <div className="flex h-[70vh] w-full items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
        <span className="eyebrow text-muted">Loading</span>
      </div>
    </div>
  )
}
