import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { aboutFacts, aboutParagraphs, aboutStatement, timeline } from '@/lib/data'

const FRAME = 'relative overflow-hidden rounded-card border border-hairline bg-white'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-[120px]">
      <div className="shell">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              A developer who cares about{' '}
              <span className="text-gradient font-medium italic">what happens after the demo.</span>
            </>
          }
        />

        {/* Statement + portrait collage */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 2xl:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="grid grid-cols-2 gap-4 self-start">
            {/* Left stack */}
            <div className="flex flex-col gap-4">
              <div className={`${FRAME} aspect-[3/4]`}>
                <Image
                  src="/images/portrait-desk.jpg"
                  alt="Pinki Meena working at her desk"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
              <div className={`${FRAME} aspect-[3/4]`}>
                <Image
                  src="/images/portrait-smiling.jpg"
                  alt="Pinki Meena at the office"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Tall right frame — stretches to the stack beside it. object-top
                matters here: centred, the tall crop cuts her head off. */}
            <div className={`${FRAME} mt-10`}>
              <Image
                src="/images/portrait-standing.jpg"
                alt="Pinki Meena, Full Stack Developer"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="measure font-display text-xl font-semibold leading-snug tracking-tight sm:text-card-title">
              {aboutStatement}
            </p>

            <div className="measure mt-7 space-y-5 text-base leading-relaxed text-ink-muted sm:text-body">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-9 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4">
              {aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Journey timeline */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <p className="eyebrow">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              The journey
            </p>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-[2rem]">
              How I got here
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <ol className="relative">
              {/* Spine */}
              <span
                aria-hidden
                className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/40 via-hairline to-transparent sm:left-[calc(88px+7px)]"
              />

              {timeline.map((entry, i) => (
                <Reveal
                  as="li"
                  key={`${entry.year}-${entry.title}`}
                  delay={i * 0.06}
                  className="relative pb-10 last:pb-0"
                >
                  <div className="flex flex-col gap-1 pl-9 sm:flex-row sm:gap-0 sm:pl-0">
                    {/* Year */}
                    <span className="w-[88px] shrink-0 pt-0.5 font-display text-sm font-bold text-primary sm:pr-8 sm:text-right">
                      {entry.year}
                    </span>

                    {/* Node */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-primary bg-canvas sm:left-[88px]"
                    >
                      <span className="h-[5px] w-[5px] rounded-full bg-primary" />
                    </span>

                    {/* Body */}
                    <div className="sm:pl-9">
                      <h4 className="font-display text-lg font-semibold tracking-tight">{entry.title}</h4>
                      <p className="mt-1 text-caption font-medium text-primary/80">{entry.org}</p>
                      <p className="measure mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                        {entry.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            {/* Sticky aside — fills the space the timeline leaves on wide screens */}
            <Reveal delay={0.15} className="hidden lg:block">
              <figure className="sticky top-28">
                <div className={`${FRAME} aspect-square`}>
                  <Image
                    src="/images/portrait-workspace.jpg"
                    alt="Pinki Meena at her desk"
                    fill
                    sizes="28vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-5 border-l-2 border-primary/25 pl-4 text-[15px] leading-relaxed text-ink-muted">
                  Two years in, still shipping — and still learning the parts of the
                  stack I haven&apos;t touched yet.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
