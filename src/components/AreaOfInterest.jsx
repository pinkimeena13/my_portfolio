import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const areas = [
  { emoji: '🌐', label: 'Web & Website Development', color: '#7c3aed', bg: 'from-violet-500/15 to-purple-500/5', border: 'border-violet-500/25' },
  { emoji: '📱', label: 'Mobile App Development', color: '#06b6d4', bg: 'from-cyan-500/15 to-blue-500/5', border: 'border-cyan-500/25' },
  { emoji: '⚙️', label: 'Backend & API Development', color: '#f59e0b', bg: 'from-amber-500/15 to-orange-500/5', border: 'border-amber-500/25' },
  { emoji: '🎨', label: 'Frontend & UI Designing', color: '#ec4899', bg: 'from-pink-500/15 to-rose-500/5', border: 'border-pink-500/25' },
  { emoji: '🤖', label: 'AI Tools & Technical Research', color: '#a855f7', bg: 'from-fuchsia-500/15 to-purple-500/5', border: 'border-fuchsia-500/25' },
  { emoji: '🤝', label: 'Client Handling', color: '#10b981', bg: 'from-emerald-500/15 to-teal-500/5', border: 'border-emerald-500/25' },
  { emoji: '☁️', label: 'SAP BTP & Process Automation', color: '#3b82f6', bg: 'from-blue-500/15 to-indigo-500/5', border: 'border-blue-500/25' },
]

export default function AreaOfInterest() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section ref={ref} className="pb-16 px-4 sm:px-8 lg:px-14">
      <div className="w-full">

        {/* Divider line */}
        <div className={`w-full h-px mb-14 ${isDark ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-gradient-to-r from-transparent via-violet-200 to-transparent'}`} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">What I love working on</p>
          <h2 className="section-title">Area of Interest</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Cards grid — 4 on first row, 3 centered on second */}
        <div className="flex flex-col gap-4">
          {/* Row 1 — 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.slice(0, 4).map((area, i) => (
              <AreaCard key={area.label} area={area} i={i} inView={inView} isDark={isDark} />
            ))}
          </div>
          {/* Row 2 — 3 cards centered */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:w-3/4 mx-auto w-full">
            {areas.slice(4).map((area, i) => (
              <AreaCard key={area.label} area={area} i={i + 4} inView={inView} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AreaCard({ area, i, inView, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.07 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className={`glass-card rounded-2xl p-5 text-center cursor-default group transition-all duration-300 border bg-gradient-to-br ${area.bg} ${area.border}`}
    >
      {/* Emoji circle */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{
          background: `linear-gradient(135deg, ${area.color}25, ${area.color}10)`,
          boxShadow: `0 4px 16px ${area.color}30`,
          border: `1px solid ${area.color}30`,
        }}
      >
        {area.emoji}
      </div>

      <h4
        className={`text-sm font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-800'}`}
      >
        {area.label}
      </h4>

      {/* Bottom accent line */}
      <div
        className="h-0.5 w-8 rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: area.color }}
      />
    </motion.div>
  )
}
