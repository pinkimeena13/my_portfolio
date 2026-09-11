import Image from 'next/image'

type MacbookFrameProps = {
  src: string
  alt: string
  priority?: boolean
  /** Shown instead of a screenshot when a project has no cover image. */
  fallback?: string
  sizes?: string
}

/**
 * Browser-chrome mockup used for every project screenshot so mixed-aspect
 * captures still read as one consistent set.
 */
export default function MacbookFrame({
  src,
  alt,
  priority = false,
  fallback,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px',
}: MacbookFrameProps) {
  return (
    <div className="overflow-hidden rounded-t-[14px] border border-hairline bg-white shadow-soft">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-hairline bg-[#F7F8FA] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 hidden h-4 flex-1 rounded-full bg-white/80 sm:block" />
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F7FB]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
          />
        ) : (
          <div className="hero-gradient flex h-full w-full items-center justify-center">
            <span className="font-display text-2xl font-bold tracking-tight text-ink/25">
              {fallback ?? alt}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
