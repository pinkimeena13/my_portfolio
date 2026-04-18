import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/pinkimeena13', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/pinki-meena-82776b25b/', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=pinkimeena52913@gmail.com&su=Let%27s+Connect', label: 'Email' },
]

function FooterLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 rotate-6 opacity-40" />
        <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
          <span className="text-white font-black text-sm tracking-tight">PM</span>
        </div>
      </div>
      <div className="leading-none">
        <div className="font-bold text-sm card-text">Pinki Meena</div>
        <div className="text-xs font-mono" style={{ color: '#7c3aed' }}>Software Developer</div>
      </div>
    </div>
  )
}

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={`border-t py-10 px-4 sm:px-8 lg:px-14 ${isDark ? 'border-white/5' : 'border-violet-100'}`}>
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <FooterLogo />
          </button>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollToSection(l.href)}
                className={`text-sm transition-colors duration-300 hover:text-violet-400 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className={`w-9 h-9 rounded-xl glass-card flex items-center justify-center text-base transition-all duration-300 hover:text-violet-400 hover:-translate-y-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
