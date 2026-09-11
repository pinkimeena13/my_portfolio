'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Briefcase, Clock3, Github, Globe, Linkedin, Mail } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import { gmailCompose, heroStats, profile, trustedBy } from '@/lib/data'

import { scrollToSection } from '@/lib/smooth-scroll'

const scrollTo = scrollToSection

/** Social links shown under the hero CTAs. */
const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  // Gmail compose with the address prefilled — same target the contact card uses.
  { label: 'Email', href: gmailCompose, icon: Mail },
] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

export default function Hero() {
  const reduced = useReducedMotion()

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section id="home" className="relative overflow-hidden pt-[112px] pb-20 lg:pt-[136px] lg:pb-28">
      {/* Backdrop scrolls away with the hero. Pinning it to the viewport made
          it trail down the whole page and left a hard seam where it ended. */}
      <div aria-hidden className="hero-gradient absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-canvas"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="dot-grid absolute left-2 top-28 hidden h-40 w-48 opacity-35 md:block" />
        <span className="shape-diamond anim-float absolute left-[4%] bottom-[22%] hidden h-9 w-9 opacity-60 xl:block [animation-delay:-5s]" />
      </div>

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── Copy ── */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: reduced ? 1 : 0.92 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <span className="glass inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 max-w-[15ch] text-[2.75rem] font-bold leading-[1.06] tracking-[-0.03em] sm:text-[3.5rem] lg:max-w-[16ch] lg:text-hero 2xl:text-[5.25rem]"
            >
              {profile.headline.lead}{' '}
              <span className="text-gradient inline-block pr-3 font-bold italic">
                {profile.headline.accent}
              </span>
              <span aria-hidden className="accent-rule" />
              <br />
              {profile.headline.rest}{' '}
              <span className="text-gradient font-medium italic">{profile.headline.emphasis}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-body"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={() => scrollTo('#projects')} className="btn btn-primary w-full sm:w-auto">
                View my work
                <ArrowUpRight size={17} strokeWidth={2.2} />
              </button>
              <button type="button" onClick={() => scrollTo('#about')} className="btn btn-secondary w-full sm:w-auto">
                About me
              </button>
              <a href={profile.resume} download className="btn btn-ghost w-full sm:w-auto">
                Résumé
              </a>
            </motion.div>

              {/* Social links */}
              <motion.ul variants={item} className="mt-7 flex items-center gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="group/social grid h-11 w-11 place-items-center rounded-full border border-hairline bg-card text-ink-muted transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary/35 hover:text-primary hover:shadow-soft"
                    >
                      <social.icon
                        size={18}
                        className="transition-transform duration-300 ease-smooth group-hover/social:scale-110"
                      />
                    </a>
                  </li>
                ))}
                <li aria-hidden className="ml-1 h-px w-10 bg-gradient-to-r from-hairline to-transparent" />
                <li className="text-caption text-ink-faint">Find me online</li>
              </motion.ul>

            {/* Floating glass stat cards */}
            <motion.ul variants={item} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((stat) => (
                <li key={stat.label} className="glass rounded-card px-4 py-4">
                  <p className="font-display text-2xl font-bold leading-none tracking-tight">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 text-xs leading-snug text-ink-subtle">{stat.label}</p>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[440px] lg:max-w-[520px] 2xl:max-w-[580px] 2xl:justify-self-end"
          >
            {/* Organic gradient wash behind the portrait */}
            <div aria-hidden className="absolute -inset-8 -z-10">
              <div className="wash-sky absolute inset-0 rounded-[40%_60%_55%_45%/50%_45%_55%_50%]" />
              <div className="wash-lavender absolute inset-x-6 bottom-0 top-1/4 rounded-[55%_45%_40%_60%/45%_55%_50%_50%]" />
            </div>

            <motion.div
              whileHover={reduced ? undefined : { y: -4 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-glass transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(37,99,235,0.18)]">
              <Image
                src="/images/portrait-beige.jpg"
                alt={`${profile.name}, ${profile.role}`}
                width={1110}
                height={1400}
                priority
                sizes="(max-width: 1024px) 90vw, (max-width: 1536px) 520px, 580px"
                className="h-auto w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.02]"
              />
            </motion.div>

            {/* Signature under the photo */}
            <p className="signature mt-5 text-center text-2xl text-ink/45 lg:text-left">{profile.name}</p>

            {/* Availability card — offset on desktop, stacked on mobile */}
            <div className="glass mt-5 rounded-card p-5 lg:absolute lg:-bottom-10 lg:-left-12 lg:mt-0 lg:w-[270px]">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug">Open for new projects</p>
              <ul className="mt-4 space-y-2.5 text-caption text-ink-muted">
                <li className="flex items-center gap-2.5">
                  <Briefcase size={14} className="shrink-0 text-ink-faint" />
                  {profile.engagement}
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe size={14} className="shrink-0 text-ink-faint" />
                  {profile.workMode}
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock3 size={14} className="shrink-0 text-ink-faint" />
                  {profile.responseTime}
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="shrink-0 text-ink-faint" />
                  <a href={gmailCompose} target="_blank" rel="noreferrer" className="truncate hover:text-primary">
                    {profile.email}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Trusted-by strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-20 border-t border-hairline pt-8 lg:mt-28"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Worked with
            </p>
            <ul className="no-scrollbar flex items-center gap-x-8 gap-y-3 overflow-x-auto md:flex-wrap md:overflow-visible">
              {trustedBy.map((name) => (
                <li
                  key={name}
                  className="whitespace-nowrap font-display text-sm font-semibold text-ink/45 transition-colors hover:text-ink/70"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
