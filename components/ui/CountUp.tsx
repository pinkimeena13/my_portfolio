'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Animates the numeric part of a label ("12", "2+", "100%") up from zero.
 * Any prefix/suffix is preserved, so "2+" counts to 2 and keeps the plus.
 */
export default function CountUp({ value, duration = 1.2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduced = useReducedMotion()

  // Memoised: String.match() returns a fresh array every render, and passing
  // that straight into the effect's deps restarts the animation on every
  // frame — the counter then never leaves zero.
  const { prefix, target, suffix, numeric } = useMemo(() => {
    const m = value.match(/^(\D*)(\d+)(.*)$/)
    return m
      ? { prefix: m[1], target: Number(m[2]), suffix: m[3], numeric: true }
      : { prefix: '', target: 0, suffix: '', numeric: false }
  }, [value])

  const [display, setDisplay] = useState(target)

  useEffect(() => {
    if (!numeric) return
    if (reduced) {
      setDisplay(target)
      return
    }
    if (!inView) {
      setDisplay(0)
      return
    }

    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      // easeOutCubic, matching the rest of the motion system
      setDisplay(Math.round(target * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration, numeric, reduced])

  if (!numeric) return <span ref={ref}>{value}</span>

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
