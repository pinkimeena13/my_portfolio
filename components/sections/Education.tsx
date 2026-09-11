import SectionDecor from '@/components/ui/SectionDecor'
import { Check, GraduationCap } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-[120px]">
      <SectionDecor variant="education" />
      <div className="shell">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              The academic side of{' '}
              <span className="text-gradient font-medium italic">the work.</span>
            </>
          }
          description="Studying computer applications alongside full-time delivery — the theory keeps pace with what I build."
        />

        <ul className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal as="li" key={item.short} delay={i * 0.08} className="card group flex flex-col p-7 transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift sm:p-card">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[15px] border border-hairline bg-[#F5F7FB] text-primary">
                  <GraduationCap size={20} className="transition-transform duration-300 ease-smooth group-hover:rotate-6" />
                </span>

                <span
                  className={item.status === 'Pursuing' ? 'badge badge-primary' : 'badge'}
                >
                  {item.status === 'Pursuing' && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                  {item.status}
                </span>
              </div>

              <h3 className="mt-6 font-display text-card-title font-bold tracking-tight">
                {item.degree}
              </h3>
              <p className="mt-1.5 font-display text-base font-semibold text-primary">{item.short}</p>

              <dl className="mb-7 mt-5 space-y-2.5 border-t border-hairline pt-5 text-[15px]">
                <div className="flex gap-2">
                  <dt className="sr-only">Institution</dt>
                  <dd className="text-ink-muted">{item.institution}</dd>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-ink-subtle">
                  <dt className="sr-only">University</dt>
                  <dd>{item.university}</dd>
                  <span aria-hidden className="text-hairline">/</span>
                  <dt className="sr-only">Period</dt>
                  <dd className="font-medium text-ink">{item.period}</dd>
                </div>
              </dl>

              <ul className="mt-auto space-y-3 border-t border-hairline pt-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-primary/10">
                      <Check size={11} strokeWidth={3} className="text-primary" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-muted">{highlight}</span>
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
