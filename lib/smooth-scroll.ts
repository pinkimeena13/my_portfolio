import type Lenis from 'lenis'

/**
 * Lenis runs as a single instance owned by <SmoothScroll />. Everything else
 * reaches it through here, so nav links, the hero buttons and the project
 * modal all drive the same scroller instead of fighting it.
 */
let instance: Lenis | null = null

export const setLenis = (next: Lenis | null) => {
  instance = next
}

export const getLenis = () => instance

/** Height of the sticky navbar plus a little breathing room. */
const NAV_OFFSET = -88

/** Scrolls to a `#section`, falling back to native behaviour when Lenis is off. */
export const scrollToSection = (href: string) => {
  const target = document.querySelector(href)
  if (!target) return

  if (instance) {
    instance.scrollTo(target as HTMLElement, { offset: NAV_OFFSET, duration: 1.1 })
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

export const scrollToTop = () => {
  if (instance) {
    instance.scrollTo(0, { duration: 1.1 })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/** Pause/resume the scroller — used while a modal owns the viewport. */
export const pauseScroll = () => instance?.stop()
export const resumeScroll = () => instance?.start()
