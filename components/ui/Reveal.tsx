'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger offset in seconds when several items reveal together. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
  /** Direction the element travels in from. */
  from?: 'bottom' | 'left' | 'right'
}

const OFFSET = 26

/**
 * Scroll reveal following the motion spec: blur + fade rather than bounce,
 * 0.4-0.8s, easeOut, and it plays once. Reduced motion gets the final state
 * immediately.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  from = 'bottom',
}: RevealProps) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]

  const shift =
    from === 'left' ? { x: -OFFSET } : from === 'right' ? { x: OFFSET } : { y: OFFSET }

  const variants: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, filter: 'blur(6px)', ...shift },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  )
}
