'use client'

import { useEffect, useRef } from 'react'

/**
 * Very low-opacity spotlight that follows the pointer.
 * Writes straight to CSS custom properties via rAF so it never triggers a
 * React re-render, and stays off for touch devices and reduced-motion users.
 */
export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fine = window.matchMedia('(pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduced.matches) return

    let frame = 0
    let x = 0
    let y = 0

    const paint = () => {
      frame = 0
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
    }

    const onMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      if (!frame) frame = requestAnimationFrame(paint)
    }

    const onEnter = () => { el.style.opacity = '1' }
    const onLeave = () => { el.style.opacity = '0' }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerenter', onEnter)
    document.addEventListener('pointerleave', onLeave)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerenter', onEnter)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden opacity-0 transition-opacity duration-500 md:block"
      style={{
        background:
          'radial-gradient(340px circle at var(--x, 50%) var(--y, 50%), rgba(37,99,235,0.055), transparent 70%)',
      }}
    />
  )
}
