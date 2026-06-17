import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiCalendar, FiAward } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const education = [
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Sant Singaji Institute of Science and Management',
    university: 'Vikram University',
    period: '2022 – 2025',
    status: 'Completed',
    icon: '📚',
    color: '#06b6d4',
    grad: 'from-cyan-600 to-blue-700',
    glow: 'rgba(6,182,212,0.25)',
    highlights: ['Computer science fundamentals', 'Programming foundations', 'Web development basics'],
  },
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Indore International College',
    university: 'RGPV, Bhopal',
    period: '2025 – 2027',
    status: 'Pursuing',
    icon: '🎓',
    color: '#7c3aed',
    grad: 'from-violet-600 to-purple-700',
    glow: 'rgba(124,58,237,0.25)',
    highlights: ['Advanced computer applications', 'Software engineering principles', 'Database management systems'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 44, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14 section-glow">
      <div className="w-full">

        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Academic background</p>
          <h2 className="section-title">Education</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="divider-line w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="relative rounded-3xl overflow-hidden cursor-default group"
              style={{
                background: isDark
                  ? `linear-gradient(145deg, ${edu.color}14, ${edu.color}06)`
                  : `linear-gradient(145deg, #ffffff, ${edu.color}06)`,
                border: `1px solid ${edu.color}28`,
              }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${edu.grad}`} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: `inset 0 0 40px ${edu.glow}`, border: `1px solid ${edu.color}45` }}
              />

              <div className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {edu.icon}
                  </motion.div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r"
                      style={{ background: `linear-gradient(90deg, ${edu.color}, ${edu.color}cc)` }}
                    >
                      {edu.short}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: edu.status === 'Pursuing' ? 'rgba(16,185,129,0.15)' : 'rgba(6,182,212,0.15)',
                        color: edu.status === 'Pursuing' ? '#10b981' : '#06b6d4',
                      }}
                    >
                      {edu.status === 'Pursuing' ? '🟢 Pursuing' : '✅ Completed'}
                    </span>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h3>

                <div className="flex items-center gap-2 mb-1" style={{ color: edu.color }}>
                  <FiBook className="flex-shrink-0 text-sm" />
                  <span className="font-semibold text-sm">{edu.institution}</span>
                </div>

                <div className={`flex items-center gap-2 text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  <FiAward className="flex-shrink-0" />
                  {edu.university}
                </div>

                <div className={`flex items-center gap-2 text-xs mb-7 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  <FiCalendar className="flex-shrink-0" />
                  {edu.period}
                </div>

                <div className={`space-y-2.5 pt-5 border-t ${isDark ? 'border-white/6' : 'border-slate-100'}`}>
                  {edu.highlights.map((h, hi) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: i * 0.18 + hi * 0.07 + 0.4 }}
                      className="flex items-center gap-2.5 text-xs"
                      style={{ color: isDark ? '#94a3b8' : '#64748b' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: edu.color }}
                      />
                      {h}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
