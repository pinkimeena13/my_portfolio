import { Check, Circle } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { learning } from '@/lib/data'

const TONES = {
  lavender: { chip: 'bg-[#F9E8FF]', bar: 'bg-[#b06fd8]', text: 'text-[#8b4fb8]' },
  sky: { chip: 'bg-[#DCEEFF]', bar: 'bg-primary', text: 'text-primary' },
} as const

export default function Learning() {
  return (
    <section id="learning" className="scroll-mt-24 py-20 lg:py-[120px]">
      <div className="shell">
        <SectionHeading
          eyebrow="Always growing"
          title={
            <>
              What I&apos;m learning{' '}
              <span className="text-gradient font-medium italic">next.</span>
            </>
          }
          description="Three active pathways I'm working through alongside client delivery — tracked honestly, including the parts I haven't finished."
        />

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {learning.map((path, i) => {
            const tone = TONES[path.tone]
            const done = path.topics.filter((t) => t.done).length

            return (
              <Reveal as="li" key={path.title} delay={i * 0.08} className="card card-hover flex flex-col overflow-hidden">
                {/* Certificate-style header */}
                <div className={`${tone.chip} px-7 pb-7 pt-8 sm:px-card`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/50">
                    {path.pathway}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{path.title}</h3>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/70">
                      <div
                        className={`h-full rounded-full ${tone.bar}`}
                        style={{ width: `${path.progress}%` }}
                      />
                    </div>
                    <span className={`shrink-0 font-display text-sm font-bold ${tone.text}`}>
                      {path.progress}%
                    </span>
                  </div>
                  <p className="mt-2.5 text-caption text-ink/50">
                    {done} of {path.topics.length} modules complete · {path.eta}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-card">
                  <p className="text-[15px] leading-relaxed text-ink-muted">{path.description}</p>

                  <ul className="mb-7 mt-6 space-y-3">
                    {path.topics.map((topic) => (
                      <li key={topic.name} className="flex items-center gap-3">
                        {topic.done ? (
                          <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-emerald-500/12">
                            <Check size={11} strokeWidth={3} className="text-emerald-600" />
                          </span>
                        ) : (
                          <Circle size={18} strokeWidth={1.5} className="shrink-0 text-ink-faint/50" />
                        )}
                        <span
                          className={
                            topic.done ? 'text-[15px] text-ink' : 'text-[15px] text-ink-faint'
                          }
                        >
                          {topic.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-auto flex flex-wrap gap-2 border-t border-hairline pt-6">
                    {path.tools.map((tool) => (
                      <li key={tool} className="badge">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
