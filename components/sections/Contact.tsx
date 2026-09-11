'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import LeafMark from '@/components/ui/LeafMark'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { profile } from '@/lib/data'

const CHANNELS = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, cta: 'Write to me' },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, cta: 'Connect' },
  { icon: Github, label: 'GitHub', value: profile.githubHandle, href: profile.github, cta: 'See the code' },
] as const

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (field: keyof typeof EMPTY) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  /* Hands the message to the visitor's own mail client — no backend, nothing stored. */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm(EMPTY)
    window.setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-[120px]">
      {/* Botanical accent — spec element 5 */}
      <LeafMark
        className="pointer-events-none absolute -bottom-10 right-0 hidden h-[420px] w-auto text-primary/[0.18] lg:block"
      />

      <div className="shell relative">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{' '}
              <span className="text-gradient font-medium italic">worth shipping.</span>
            </>
          }
          description="Open to full-time roles, freelance builds and collaborations. Tell me what you're working on — I reply within a day."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left — portrait card + details */}
          <Reveal className="card flex flex-col overflow-hidden">
            {/* 4:5 frame matches the portrait source, so nothing is cropped away. */}
            <div className="relative aspect-[4/5] w-full bg-[#F5F7FB]">
              <Image
                src="/images/portrait-progress.jpg"
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 40vw, 520px"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col p-7 sm:p-card">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {profile.availability}
              </p>
              <h3 className="mt-3 font-display text-card-title font-bold tracking-tight">{profile.name}</h3>
              <p className="mt-1 text-[15px] text-ink-subtle">{profile.role}</p>

              <ul className="mt-6 space-y-3.5 border-t border-hairline pt-6 text-[15px]">
                <li>
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-ink-muted transition-colors hover:text-primary">
                    <Mail size={16} className="shrink-0 text-ink-faint" />
                    <span className="truncate">{profile.email}</span>
                  </a>
                </li>
                <li>
                  <a href={profile.phoneHref} className="flex items-center gap-3 text-ink-muted transition-colors hover:text-primary">
                    <Phone size={16} className="shrink-0 text-ink-faint" />
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-ink-muted">
                  <MapPin size={16} className="shrink-0 text-ink-faint" />
                  {profile.location}
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.08} className="card p-7 sm:p-card">
            <h3 className="font-display text-card-title font-bold tracking-tight">Send a message</h3>
            <p className="mt-2 text-[15px] text-ink-muted">
              This opens your own mail app with the message ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Cooper"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@company.com"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={update('subject')}
                  placeholder="Frontend role / project enquiry"
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="A little about the role or project, timeline, and what you need from me."
                  className="field resize-none"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                {sent ? <Check size={17} strokeWidth={2.4} /> : <Send size={16} />}
                {sent ? 'Mail app opened' : 'Send message'}
              </button>

              <p aria-live="polite" className="min-h-[20px] text-caption text-emerald-600">
                {sent && 'Your mail app should be open — hit send and it reaches me directly.'}
              </p>
            </form>
          </Reveal>
        </div>

        {/* Channel cards */}
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {CHANNELS.map((channel, i) => (
            <Reveal as="li" key={channel.label} delay={i * 0.07}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                className="card group flex h-full flex-col p-7 transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_20px_45px_-20px_rgba(37,99,235,0.35)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-primary/[0.08] text-primary transition-transform duration-300 ease-smooth group-hover:rotate-6 group-hover:scale-105">
                  <channel.icon size={18} />
                </span>
                <p className="mt-5 font-display text-base font-semibold">{channel.label}</p>
                <p className="mt-1 truncate text-caption text-ink-subtle">{channel.value}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-caption font-semibold text-primary">
                  {channel.cta}
                  <ArrowUpRight size={14} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
