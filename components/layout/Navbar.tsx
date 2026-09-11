'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/lib/data'
import { scrollToSection } from '@/lib/smooth-scroll'

const SECTION_IDS = navLinks.map((link) => link.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)

  /* Blur/shadow the bar once the page has moved. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section indicator. A geometry probe beats IntersectionObserver here:
     IO only reports sections whose state changed, so fast or programmatic jumps
     can leave the highlight a section behind. */
  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const probe = window.innerHeight * 0.35
      let current = ''

      for (const id of SECTION_IDS) {
        const rect = document.getElementById(id)?.getBoundingClientRect()
        if (rect && rect.top <= probe && rect.bottom > probe) {
          current = id
          break
        }
      }

      // Past the last section (footer in view) keep the final link lit.
      if (!current && window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = SECTION_IDS[SECTION_IDS.length - 1]
      }

      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = useCallback((href: string) => {
    setOpen(false)
    scrollToSection(href)
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        scrolled
          ? 'border-b border-hairline bg-canvas/80 shadow-[0_1px_20px_-12px_rgba(17,24,39,0.3)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <nav className="shell flex h-[72px] items-center justify-between gap-6" aria-label="Primary">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); go('#home') }}
          aria-label={`${profile.name} — back to top`}
          className="group/logo relative block h-11 w-12 shrink-0 transition-transform duration-300 ease-smooth hover:scale-105"
        >
          <Image
            src="/images/logo-mark.png"
            alt=""
            fill
            sizes="48px"
            priority
            className="object-contain"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); go(link.href) }}
                  aria-current={isActive ? 'true' : undefined}
                  className={[
                    'group/link relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                    isActive ? 'text-ink' : 'text-ink-subtle hover:text-ink',
                  ].join(' ')}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-primary/[0.08]"
                    />
                  )}
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-4 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-smooth group-hover/link:scale-x-100"
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go('#contact') }}
            className="btn btn-primary hidden h-11 px-6 text-sm sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-card text-ink transition-colors hover:border-slate-300 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-hairline bg-canvas/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); go(link.href) }}
                    className={[
                      'flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors',
                      active === link.href.slice(1)
                        ? 'bg-primary/[0.08] text-primary'
                        : 'text-ink-muted hover:bg-slate-50',
                    ].join(' ')}
                  >
                    {link.label}
                    <ArrowUpRight size={16} className="opacity-40" />
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href={profile.resume}
                  download
                  className="btn btn-secondary w-full"
                  onClick={() => setOpen(false)}
                >
                  Download résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
