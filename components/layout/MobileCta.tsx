'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { profile } from '@/lib/data'
import { scrollToSection } from '@/lib/smooth-scroll'

/** Sticky bottom call-to-action — mobile only, appears once past the hero. */
export default function MobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-canvas/85 px-6 pb-[max(16px,env(safe-area-inset-bottom))] pt-4 backdrop-blur-xl lg:hidden"
        >
          <div className="flex gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
              className="btn btn-primary flex-1"
            >
              Let&apos;s talk
              <ArrowUpRight size={17} strokeWidth={2.2} />
            </a>
            <a
              href={profile.resume}
              download
              aria-label="Download résumé"
              className="btn btn-secondary aspect-square px-0"
            >
              <Download size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
