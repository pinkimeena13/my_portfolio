'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, X } from 'lucide-react'
import type { Project } from '@/lib/data'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

const CASE_STUDY_FIELDS = [
  { key: 'challenge', label: 'The challenge' },
  { key: 'role', label: 'My role' },
  { key: 'result', label: 'The result' },
] as const

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  /* Reset the gallery whenever a different project opens. */
  useEffect(() => setIndex(0), [project?.slug])

  const total = project?.media.length ?? 0
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])

  /* Keyboard: Esc closes, arrows move through the gallery. */
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && total > 1) next()
      if (e.key === 'ArrowLeft' && total > 1) prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose, next, prev, total])

  /* Lock background scroll while open, and move focus into the dialog. */
  useEffect(() => {
    if (!project) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [project])

  if (!mounted) return null

  const current = project?.media[index]

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-ink/45 p-4 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
        >
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-card border border-hairline bg-card shadow-glass outline-none"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-hairline bg-white/90 text-ink backdrop-blur transition-colors hover:bg-white"
            >
              <X size={17} />
            </button>

            {/* Gallery */}
            <div className="relative aspect-[16/10] w-full bg-[#0e1116]">
              {current?.type === 'video' ? (
                <video
                  key={current.src}
                  src={current.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                />
              ) : current ? (
                <Image
                  key={current.src}
                  src={current.src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                />
              ) : null}

              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink backdrop-blur transition-colors hover:bg-white"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink backdrop-blur transition-colors hover:bg-white"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium text-white">
                    {index + 1} / {total}
                  </p>
                </>
              )}
            </div>

            {/* Case study body */}
            <div className="max-h-[55vh] overflow-y-auto p-6 sm:p-card">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="badge badge-primary">{project.category}</span>
                <span className="badge">{project.year}</span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-1 text-[15px] text-ink-subtle">{project.subtitle}</p>

              <dl className="mt-7 space-y-6">
                {CASE_STUDY_FIELDS.map((field) => (
                  <div key={field.key}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                      {field.label}
                    </dt>
                    <dd className="mt-2 text-[15px] leading-relaxed text-ink-muted">{project[field.key]}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-7 flex flex-wrap gap-2 border-t border-hairline pt-6">
                {project.stack.map((tech) => (
                  <li key={tech} className="badge">
                    {tech}
                  </li>
                ))}
              </ul>

              {(project.demo || project.github) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                      Live demo
                      <ArrowUpRight size={16} strokeWidth={2.2} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
