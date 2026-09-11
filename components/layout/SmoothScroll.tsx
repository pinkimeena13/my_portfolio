'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from '@/lib/smooth-scroll'

/**
 * Inertial scrolling (spec: Lenis for smooth scroll).
 * Disabled entirely for prefers-reduced-motion, where hijacking the scroll
 * would be exactly the wrong thing to do.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    setLenis(lenis)

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return null
}
