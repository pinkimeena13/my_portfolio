import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillCategories } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 lg:py-[120px]">
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
              className="card card-hover flex flex-col p-8"
            >
              <h3 className="font-display text-card-title font-bold tracking-tight">{category.title}</h3>
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
      </div>
    </section>
  )
}
