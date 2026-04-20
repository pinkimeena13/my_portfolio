import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiCode, FiStar, FiChevronDown } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const GMAIL_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=pinkimeena52913@gmail.com&su=Let%27s+Connect'

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/pinkimeena13', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/pinki-meena-82776b25b/', label: 'LinkedIn' },
  { icon: <FiMail />, href: GMAIL_URL, label: 'Email' },
]

const stats = [
  { value: '2.6+', label: 'Years' },
  { value: '10+', label: 'Projects' },
  { value: '12+', label: 'Tech Stack' },
  { value: '100%', label: 'Dedication' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const openMail = () => {
    window.open(GMAIL_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center justify-center pt-20 pb-6 lg:py-10 overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.div variants={itemVariants}>
              <div className="mb-7 inline-flex">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl cursor-default select-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.12) 100%)',
                    border: '1px solid rgba(124,58,237,0.45)',
                    boxShadow: '0 0 18px rgba(124,58,237,0.25), inset 0 0 12px rgba(124,58,237,0.08)',
                  }}
                >
                  {/* Shimmer sweep */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                    aria-hidden
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8, ease: 'easeInOut' }}
                      className="absolute inset-y-0 w-1/3"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}
                    />
                  </motion.div>

                  {/* Pulsing dot */}
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
                  </span>

                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{
                      background: 'linear-gradient(90deg, #c4b5fd, #67e8f9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Open to Collaborate &amp; Grow
                  </span>

                  <FiStar className="text-sm text-violet-300 flex-shrink-0" />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Hi, I'm{' '}
              <span className="gradient-text block">Pinki Meena</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-xl md:text-2xl font-semibold mb-6 h-10">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'React & Node.js Expert',
                  2000,
                  'Mobile App Developer',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className={`text-base leading-relaxed max-w-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Building secure, scalable web & mobile applications with modern JavaScript frameworks.
              Turning complex business requirements into elegant digital solutions since 2023.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work <FiExternalLink />
              </button>
              <button onClick={openMail} className="btn-outline">
                <FiMail /> Let's Connect
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`w-11 h-11 rounded-xl glass-card flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 ${isDark ? 'text-slate-400 hover:text-violet-400' : 'text-slate-500 hover:text-violet-600'}`}
                >
                  {s.icon}
                </a>
              ))}
              <div className="ml-1 h-px w-12 bg-gradient-to-r from-violet-500/60 to-transparent" />
              <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Find me online</span>
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="flex flex-col items-center gap-8 mt-4 lg:mt-0"
          >
            <div className="relative">
              {/* Static dashed ring — no spin for performance */}
              <div
                className="absolute rounded-full border-2 border-dashed border-violet-400/25"
                style={{ inset: '-18px' }}
              />
              <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.1) 60%, transparent 100%)', filter: 'blur(20px)', transform: 'scale(1.4)' }} />

              <div
                className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden animate-float"
                style={{ boxShadow: '0 0 0 3px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.2)' }}
              >
                <div className="w-full h-full bg-gradient-to-br from-violet-600 via-purple-700 to-cyan-600 flex items-center justify-center">
                  <div className="text-center select-none">
                    <div className="text-7xl md:text-8xl font-black text-white/90 leading-none tracking-tighter">PM</div>
                    <div className="text-white/50 text-xs font-mono mt-3 tracking-widest uppercase">Software Developer</div>
                  </div>
                </div>
              </div>

              {/* Full Stack badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-3 -right-6 glass-card glow-border rounded-xl px-2 py-1 flex items-center gap-1.5"
              >
                <FiCode className="text-violet-400 text-xs" />
                <span className={`text-[10px] font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Full Stack</span>
              </motion.div>

              {/* Passionate builder badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-2 -left-8 glass-card glow-border rounded-xl px-2 py-1 flex items-center gap-1.5"
              >
                <span className="text-xs">⚡</span>
                <span className={`text-[10px] font-mono font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Passionate Builder</span>
              </motion.div>

              {/* 2.6+ badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -left-14 glass-card glow-border rounded-xl px-2.5 py-1.5 text-center hidden sm:block"
              >
                <div className="gradient-text font-black text-sm leading-none">2.6+</div>
                <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>yrs exp</div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2 w-full" style={{ maxWidth: '380px' }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="glass-card glow-border rounded-2xl p-3 text-center hover:scale-105 transition-transform duration-300 min-w-0"
                >
                  <div className="text-base font-black gradient-text leading-none mb-1">{s.value}</div>
                  <div className={`leading-tight ${isDark ? 'text-slate-500' : 'text-slate-400'}`} style={{ fontSize: '10px' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — relative on mobile, absolute on desktop */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 flex-col items-center gap-1 group cursor-pointer mt-3 lg:mt-0 mx-auto w-fit"
          aria-label="Scroll down"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-xs font-mono tracking-[0.18em] uppercase mb-1"
            style={{ color: '#7c3aed' }}
          >
            Scroll
          </motion.span>
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2], y: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay }}
            >
              <FiChevronDown
                className="group-hover:text-violet-400 transition-colors duration-300"
                style={{ color: `rgba(124,58,237,${0.35 + i * 0.3})`, fontSize: '18px', marginTop: i === 0 ? 0 : '-6px' }}
              />
            </motion.div>
          ))}
        </motion.button>
      </div>
    </section>
  )
}
