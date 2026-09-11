'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  /** Rendered on the far side of the heading row on desktop (e.g. a CTA). */
  aside?: ReactNode
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  aside,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <Reveal
      className={[
        'mb-12 flex flex-col gap-6 md:mb-16',
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
      ].join(' ')}
    >
      <div className="max-w-2xl">
        <p className="eyebrow">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </p>
        <h2 className="mt-4 text-[2rem] font-bold leading-[1.12] tracking-tight sm:text-[2.5rem] lg:text-section-title">
          {title}
        </h2>
        <motion.span
          aria-hidden
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className={[
            'mt-6 block h-[3px] w-16 origin-left rounded-full bg-gradient-to-r from-primary to-[#b06fd8]',
            centered ? 'mx-auto origin-center' : '',
          ].join(' ')}
        />
        {description && (
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-body">{description}</p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </Reveal>
  )
}
