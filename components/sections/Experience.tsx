import SectionDecor from '@/components/ui/SectionDecor'
import { ArrowUpRight, Check } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { experience, profile } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-[120px]">
      <SectionDecor variant="experience" />
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve worked and{' '}
              <span className="text-gradient font-medium italic">what actually shipped.</span>
            </>
          }
          aside={
            <a href={profile.resume} download className="btn btn-secondary">
              Download résumé
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </a>
          }
        />

        <ul className="space-y-5">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.role}`} delay={i * 0.08} className="card p-7 transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift sm:p-card">
              {/* Header */}
              <div className="flex flex-col gap-4 border-b border-hairline pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-card-title font-bold tracking-tight">{job.role}</h3>
                    {job.current && (
                      <span className="badge badge-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 font-display text-base font-semibold text-primary">{job.company}</p>
                </div>

                <div className="shrink-0 text-caption text-ink-subtle md:text-right">
                  <p className="font-medium text-ink">{job.period}</p>
                  <p className="mt-0.5">{job.location}</p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-muted">{job.summary}</p>

              {/* Three achievements */}
              <ul className="mt-6 space-y-3.5">
                {job.achievements.map((achievement) => (
                  <li key={achievement.slice(0, 32)} className="flex gap-3">
                    <span className="mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-primary/10">
                      <Check size={11} strokeWidth={3} className="text-primary" />
                    </span>
                    <span className="measure text-[15px] leading-relaxed text-ink-muted">{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <ul className="mt-7 flex flex-wrap gap-2 border-t border-hairline pt-6">
                {job.stack.map((tech) => (
                  <li key={tech} className="badge">
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
