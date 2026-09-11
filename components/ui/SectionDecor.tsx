import LeafMark from '@/components/ui/LeafMark'

/**
 * Decorative cluster that belongs to a section and scrolls with it.
 *
 * Deliberately NOT fixed: a viewport-pinned layer makes content look like it
 * is sliding over a static backdrop, and any gradient in it leaves a hard seam
 * across the page. Anchoring decor to its own section avoids both.
 *
 * The parent section must be `relative` (and usually `overflow-hidden`).
 */
export type DecorVariant = 'about' | 'skills' | 'experience' | 'education' | 'projects' | 'learning'

export default function SectionDecor({ variant }: { variant: DecorVariant }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {variant === 'about' && (
        <>
          <div className="wash-sky anim-floatxy absolute -left-40 top-10 h-[420px] w-[420px] rounded-full opacity-70" />
          <span className="shape-square anim-drift absolute right-[7%] top-24 hidden h-11 w-11 opacity-60 lg:block" />
          <div className="dot-grid absolute bottom-16 left-2 hidden h-32 w-36 opacity-30 md:block" />
        </>
      )}

      {variant === 'skills' && (
        <>
          <div className="wash-lavender anim-float absolute -right-32 top-1/4 h-[460px] w-[460px] rounded-full opacity-60" />
          <span className="shape-ring anim-float absolute left-[5%] top-16 hidden h-14 w-14 opacity-60 lg:block [animation-delay:-3s]" />
          <svg
            className="absolute inset-x-0 top-8 hidden w-full opacity-60 md:block"
            viewBox="0 0 1440 140"
            fill="none"
            preserveAspectRatio="none"
            style={{ height: 140 }}
          >
            <path d="M-40 96 C 300 12, 560 150, 820 66 S 1260 8, 1480 84" stroke="rgba(37,99,235,0.14)" strokeWidth="1.2" />
          </svg>
        </>
      )}

      {variant === 'experience' && (
        <>
          <div className="dot-grid absolute right-4 top-12 hidden h-36 w-40 opacity-30 md:block" />
          <span className="shape-diamond anim-float absolute left-[6%] bottom-24 hidden h-10 w-10 opacity-60 xl:block" />
        </>
      )}

      {variant === 'education' && (
        <>
          <div className="wash-sky anim-floatxy absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full opacity-60 [animation-delay:-5s]" />
          <LeafMark className="anim-sway absolute -right-6 top-8 hidden h-56 w-auto text-primary/[0.14] xl:block" />
        </>
      )}

      {variant === 'projects' && (
        <>
          <div className="wash-lavender anim-float absolute -left-44 top-1/3 h-[500px] w-[500px] rounded-full opacity-50 [animation-delay:-6s]" />
          <span className="shape-ring anim-floatxy absolute right-[6%] top-20 hidden h-16 w-16 opacity-60 lg:block" />
        </>
      )}

      {variant === 'learning' && (
        <>
          <div className="wash-sky anim-float absolute -right-36 top-0 h-[440px] w-[440px] rounded-full opacity-60" />
          <span className="shape-square anim-drift absolute left-[8%] bottom-16 hidden h-12 w-12 opacity-55 lg:block [animation-delay:-4s]" />
          <div className="dot-grid absolute bottom-8 right-6 hidden h-28 w-32 opacity-25 lg:block" />
        </>
      )}
    </div>
  )
}
