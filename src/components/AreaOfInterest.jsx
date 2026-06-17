import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const areas = [
  {
    emoji: '🌐',
    label: 'Web & Website Development',
    desc: 'React, Angular, Next.js',
    color: '#7c3aed',
    grad: 'from-violet-600 to-purple-700',
    glow: 'rgba(124,58,237,0.35)',
  },
  {
    emoji: '📱',
    label: 'Mobile App Development',
    desc: 'React Native — iOS & Android',
    color: '#06b6d4',
    grad: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.35)',
  },
  {
    emoji: '⚙️',
    label: 'Backend & API Development',
    desc: 'Node.js, NestJS, MongoDB',
    color: '#f59e0b',
    grad: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.35)',
  },
  {
    emoji: '🎨',
    label: 'Frontend & UI Designing',
    desc: 'Pixel-perfect, responsive UIs',
    color: '#ec4899',
    grad: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.35)',
  },
  {
    emoji: '🤖',
    label: 'AI Tools & Technical Research',
    desc: 'LLMs, AI-powered features',
    color: '#a855f7',
    grad: 'from-fuchsia-500 to-violet-600',
    glow: 'rgba(168,85,247,0.35)',
  },
  {
    emoji: '🤝',
    label: 'Client Handling',
    desc: 'Direct comms & delivery',
    color: '#10b981',
    grad: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.35)',
  },
  {
    emoji: '☁️',
    label: 'SAP BTP & Process Automation',
    desc: 'Enterprise workflows & integrations',
    color: '#3b82f6',
    grad: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.35)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.85 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export default function AreaOfInterest() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section ref={ref} className="pb-20 px-4 sm:px-8 lg:px-14 section-glow">
      <div className="w-full">

        <div className={`w-full h-px mb-16 ${isDark ? 'bg-gradient-to-r from-transparent via-violet-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-violet-300/50 to-transparent'}`} />

        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle">What I love working on</p>
          <h2 className="section-title">Area of Interest</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="divider-line w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-4"
        >
          {/* Row 1 — 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.slice(0, 4).map((area) => (
              <AreaCard key={area.label} area={area} isDark={isDark} />
            ))}
          </div>
          {/* Row 2 — 3 cards centered */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:w-3/4 mx-auto w-full">
            {areas.slice(4).map((area) => (
              <AreaCard key={area.label} area={area} isDark={isDark} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AreaCard({ area, isDark }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.04, transition: { duration: 0.2, ease: 'easeOut' } }}
      className="relative rounded-2xl overflow-hidden cursor-default group"
      style={{
        background: isDark
          ? `linear-gradient(145deg, ${area.color}18, ${area.color}0a)`
          : `linear-gradient(145deg, ${area.color}12, ${area.color}06)`,
        border: `1px solid ${area.color}30`,
        boxShadow: `0 4px 20px ${area.color}10`,
      }}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: `inset 0 0 30px ${area.glow}`, border: `1px solid ${area.color}50` }}
      />

      {/* Top gradient accent */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${area.grad}`} />

      <div className="p-5 flex flex-col items-center text-center gap-3">
        {/* Emoji icon with gradient bg */}
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `linear-gradient(135deg, ${area.color}30, ${area.color}15)`,
            boxShadow: `0 8px 24px ${area.glow}`,
            border: `1px solid ${area.color}40`,
          }}
        >
          {area.emoji}
        </motion.div>

        <div>
          <h4 className={`text-sm font-bold leading-snug mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {area.label}
          </h4>
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            {area.desc}
          </p>
        </div>

        {/* Animated bottom accent */}
        <motion.div
          className="h-0.5 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: 40 }}
          transition={{ duration: 0.3 }}
          style={{ background: `linear-gradient(90deg, ${area.color}, transparent)` }}
        />
      </div>
    </motion.div>
  )
}
