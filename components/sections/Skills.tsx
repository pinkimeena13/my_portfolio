import SectionDecor from '@/components/ui/SectionDecor'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillCategories } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-[120px]">
      <SectionDecor variant="skills" />
      <div className="shell">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              The stack I reach for, grouped by{' '}
              <span className="text-gradient font-medium italic">what it solves.</span>
            </>
          }
          description="Six areas I work across day to day — from the interface layer down to the services and data behind it."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal
              as="li"
              key={category.title}
              delay={(i % 3) * 0.07}
              className="card group flex flex-col p-8 transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-card-title font-bold tracking-tight">{category.title}</h3>
                <span
                  aria-hidden
                  className="mt-1 h-2 w-2 shrink-0 rounded-[3px] bg-primary/25 transition-all duration-300 ease-smooth group-hover:rotate-45 group-hover:bg-primary"
                />
              </div>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{category.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-hairline">
                {category.items.map((item) => (
                  <li key={item} className="badge">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        {/* Handwritten accent — spec element 8 */}
        <Reveal delay={0.15} className="mt-16 flex items-center justify-center gap-5">
          <span aria-hidden className="h-px w-12 bg-hairline sm:w-20" />
          <p className="signature text-center text-[1.75rem] leading-none text-primary/60 sm:text-[2rem]">
            Building products with purpose.
          </p>
          <span aria-hidden className="h-px w-12 bg-hairline sm:w-20" />
        </Reveal>
      </div>
    </section>
  )
}
