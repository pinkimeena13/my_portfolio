'use client'

import Image from 'next/image'
import { ArrowUp, ArrowUpRight, FileText, Github, Linkedin, Mail, Phone, ShieldCheck } from 'lucide-react'
import { footer, navLinks, profile } from '@/lib/data'
import { scrollToSection, scrollToTop } from '@/lib/smooth-scroll'

const SOCIALS = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
] as const

const CONTACT_ROWS = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    download: false,
    tile: 'text-primary',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    download: false,
    tile: 'text-ink-muted',
  },
  {
    icon: FileText,
    label: 'Résumé',
    value: 'Download résumé',
    href: profile.resume,
    download: true,
    tile: 'text-ink-muted',
  },
] as const

/** Small caps heading with the short accent rule beneath it. */
function ColumnHeading({ children }: { children: string }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
      {children}
      <span aria-hidden className="mt-3 block h-[3px] w-8 rounded-full bg-primary" />
    </h3>
  )
}

export default function Footer() {
  const toTop = () => scrollToTop()

  return (
    <footer className="relative overflow-hidden border-t border-hairline pb-28 pt-20 lg:pb-14 lg:pt-24">
      {/* ── Decorative layer ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* One very faint wash for depth — no blue block, no gradient sheet. */}
        <div className="wash-sky absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full opacity-40" />
        {/* dot grid, top-left */}
        <div className="dot-grid absolute left-6 top-8 h-24 w-36 opacity-25" />
        <div className="wash-lavender anim-float absolute -bottom-24 right-1/4 h-72 w-72 rounded-full opacity-60" />
      </div>

      {/* ── Vertical mantra, far left — only where the gutter can hold it ── */}
      <ul
        aria-hidden
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 space-y-1.5 min-[1900px]:block"
      >
        {footer.mantra.map((word) => (
          <li key={word} className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-faint/70">
            {word}
          </li>
        ))}
        <li aria-hidden className="!mt-3 h-px w-7 bg-ink-faint/30" />
      </ul>

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_1.1fr] lg:gap-14 2xl:grid-cols-[1.5fr_0.7fr_1.1fr_0.6fr]">
          {/* ── Brand ── */}
          <div className="max-w-md">
            <div className="flex items-center gap-4">
              <span className="relative block h-14 w-[62px] shrink-0">
                <Image src="/images/logo.png" alt="" fill sizes="62px" className="object-contain" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold tracking-tight">{profile.name}</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  {profile.role}
                </p>
              </div>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">{footer.tagline}</p>

            <ul className="mt-7 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-card text-ink-muted transition-all duration-300 ease-smooth hover:-translate-y-1 hover:rotate-6 hover:scale-105 hover:border-primary/35 hover:text-primary hover:shadow-soft"
                  >
                    <social.icon size={17} />
                  </a>
                </li>
              ))}
            </ul>

            {/* Signature line */}
            <div className="mt-8 flex items-center gap-4">
              <p className="signature text-xl text-ink/45">{footer.signature}</p>
              <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-ink-faint/30 to-transparent" />
            </div>
          </div>

          {/* ── Explore ── */}
          <nav aria-label="Footer">
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="group inline-flex items-center gap-1.5 text-[15px] text-ink-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-60"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Get in touch ── */}
          <div>
            <ColumnHeading>Get in touch</ColumnHeading>
            <ul className="mt-6 space-y-5">
              {CONTACT_ROWS.map((row) => (
                <li key={row.label}>
                  <a
                    href={row.href}
                    download={row.download}
                    className="group flex items-start gap-3.5"
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-[13px] border border-hairline bg-[#F5F7FB] transition-colors duration-300 group-hover:border-primary/25 group-hover:text-primary ${row.tile}`}
                    >
                      <row.icon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink">{row.label}</span>
                      <span
                        className={`block truncate text-[15px] transition-colors ${
                          row.label === 'Résumé'
                            ? 'text-primary group-hover:text-primary-hover'
                            : 'text-ink-muted group-hover:text-primary'
                        }`}
                      >
                        {row.value}
                        {row.label === 'Résumé' && <span aria-hidden> →</span>}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Script aside — its own column so it can never overlap ── */}
          <p aria-hidden className="signature hidden self-start text-right text-[1.35rem] leading-snug text-ink/15 2xl:block">
            {footer.aside}
          </p>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 flex flex-col gap-6 border-t border-hairline pt-7 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-caption text-ink-faint">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-caption text-ink-subtle">
            <li aria-hidden className="text-ink-faint">
              <ShieldCheck size={15} />
            </li>
            {footer.values.map((value, i) => (
              <li key={value} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-hairline">/</span>}
                {value}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toTop}
            className="group inline-flex items-center gap-3 self-start text-caption font-medium text-ink-muted transition-colors hover:text-primary lg:self-auto"
          >
            Back to top
            <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-card transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/35 group-hover:text-primary group-hover:shadow-soft">
              <ArrowUp size={16} className="transition-transform duration-300 ease-smooth group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
