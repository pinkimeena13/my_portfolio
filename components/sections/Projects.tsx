'use client'

import SectionDecor from '@/components/ui/SectionDecor'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Images, Play } from 'lucide-react'
import MacbookFrame from '@/components/ui/MacbookFrame'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectModal from './ProjectModal'
import { projectFilters, projects, type Project } from '@/lib/data'

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const [showAll, setShowAll] = useState(false)
  const [open, setOpen] = useState<Project | null>(null)

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  // Featured-first ordering, with the rest behind a "show all" toggle.
  const ordered = useMemo(
    () => [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured)),
    [filtered]
  )
  const visible = showAll ? ordered : ordered.slice(0, 6)

  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-[120px]">
      <SectionDecor variant="projects" />
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects that solved a{' '}
              <span className="text-gradient font-medium italic">real problem.</span>
            </>
          }
          description="Twelve shipped projects across web, mobile, backend and enterprise platforms. Open any one for the challenge, my role, and what changed."
        />

        {/* Category filter */}
        <Reveal className="no-scrollbar -mx-6 mb-10 flex gap-2 overflow-x-auto px-6 sm:mx-0 sm:px-0">
          {projectFilters.map((option) => {
            const isActive = filter === option
            return (
              <button
                key={option}
                type="button"
                onClick={() => { setFilter(option); setShowAll(false) }}
                aria-pressed={isActive}
                className={[
                  'relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200',
                  isActive ? 'text-white' : 'border border-hairline bg-card text-ink-muted hover:border-slate-300',
                ].join(' ')}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full bg-primary"
                  />
                )}
                {option}
              </button>
            )
          })}
        </Reveal>

        {/* Cards */}
        <ul className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {visible.map((project, i) => {
            const hasVideo = project.media.some((m) => m.type === 'video')
            return (
              <Reveal as="li" key={project.slug} delay={(i % 2) * 0.07}>
                <article className="card group flex h-full flex-col overflow-hidden transition-all duration-400 ease-smooth hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_25px_60px_rgba(17,24,39,0.10)]">
                  {/* Screenshot in browser chrome */}
                  <div className="p-5 pb-0">
                    <MacbookFrame
                      src={project.cover}
                      alt={`${project.title} — ${project.subtitle}`}
                      fallback={project.title}
                      priority={i < 2}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="badge badge-primary">{project.category}</span>
                      <span className="badge">{project.year}</span>
                      {hasVideo && (
                        <span className="badge">
                          <Play size={10} className="fill-current" />
                          Demo video
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-card-title font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-subtle">{project.subtitle}</p>

                    <p className="mt-4 line-clamp-3 text-[15px] leading-relaxed text-ink-muted">
                      {project.challenge}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech) => (
                        <li key={tech} className="badge">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center gap-3 pt-7">
                      <button
                        type="button"
                        onClick={() => setOpen(project)}
                        className="btn btn-primary h-11 flex-1 px-5 text-sm sm:flex-none"
                      >
                        Case study
                        <ArrowUpRight
                          size={16}
                          strokeWidth={2.2}
                          className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </button>
                      <span className="flex items-center gap-1.5 text-caption text-ink-faint">
                        <Images size={14} />
                        {project.media.length}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>

        {ordered.length > 6 && !showAll && (
          <Reveal className="mt-12 flex justify-center">
            <button type="button" onClick={() => setShowAll(true)} className="btn btn-secondary">
              Show all {ordered.length} projects
            </button>
          </Reveal>
        )}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  )
}
