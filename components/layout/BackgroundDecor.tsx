/**
 * The only genuinely page-wide background layer: an even film of grain.
 *
 * Everything with a position or a gradient lives in <SectionDecor /> instead,
 * anchored to its own section. A fixed gradient layer looked wrong — it stayed
 * put while the page scrolled and left a hard horizontal seam where it ended.
 * Grain is uniform, so it has neither problem.
 */
export default function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="noise pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
    />
  )
}
