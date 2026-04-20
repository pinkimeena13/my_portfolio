import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMail } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 rotate-6 opacity-40" />
        <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
          <span className="text-white font-black text-sm tracking-tight">PM</span>
        </div>
      </div>
      <div className="hidden sm:block leading-none">
        <div className="font-bold text-sm card-text">Pinki Meena</div>
        <div className="text-xs font-mono" style={{ color: '#7c3aed' }}>Software Developer</div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { theme, toggleTheme } = useTheme()

  const handleNav = (href) => {
    setActive(href)
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleHireMe = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=pinkimeena52913@gmail.com&su=Let%27s+Connect',
      '_blank', 'noopener,noreferrer'
    )
  }

  const isDark = theme === 'dark'

  const navStyle = {
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    backgroundColor: isDark ? 'rgba(3,0,20,0.4)' : 'rgba(255,255,255,0.4)',
  }

  const linkColor = isDark
    ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
    : 'text-slate-600 hover:text-slate-900 hover:bg-violet-50'

  const activeColor = isDark
    ? 'text-violet-400 bg-violet-500/10'
    : 'text-violet-600 bg-violet-100'

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-500" style={navStyle}>
      <div className="w-full px-4 sm:px-8 lg:px-14 py-3.5 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo />
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === l.href ? activeColor : linkColor
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isDark
                ? 'bg-white/5 text-slate-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                : 'bg-violet-50 text-slate-500 hover:text-violet-600 hover:bg-violet-100'
            }`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiSun className="text-base" />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiMoon className="text-base" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Let's Connect */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleHireMe}
            className="hidden lg:flex btn-primary items-center gap-2"
          >
            <FiMail className="text-sm" /> Let's Connect
          </motion.button>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-current my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${isDark ? 'border-white/5 bg-[#030014]/95' : 'border-violet-100 bg-white/95'}`}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${linkColor}`}
                >
                  {l.label}
                </button>
              ))}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleHireMe}
                className="btn-primary justify-center mt-2"
              >
                <FiMail /> Let's Connect
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
