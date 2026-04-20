import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiCalendar, FiAward } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Indore International College',
    university: 'RGPV, Bhopal',
    period: '2021 – 2023',
    icon: '🎓',
    gradient: 'from-violet-600 to-purple-700',
    highlights: ['Advanced computer applications', 'Software engineering principles', 'Database management systems'],
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Sant Singaji Institute of Science and Management',
    university: 'Vikram University',
    period: '2018 – 2021',
    icon: '📚',
    gradient: 'from-cyan-600 to-blue-700',
    highlights: ['Computer science fundamentals', 'Programming foundations', 'Web development basics'],
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Academic background</p>
          <h2 className="section-title">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card glow-border rounded-3xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${edu.gradient}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{edu.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${edu.gradient}`}>
                    {edu.short}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h3>

                <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm mb-1">
                  <FiBook className="flex-shrink-0" />
                  {edu.institution}
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <FiAward className="flex-shrink-0" />
                  {edu.university}
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-xs mb-6">
                  <FiCalendar className="flex-shrink-0" />
                  {edu.period}
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {edu.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                      {h}
                    </div>
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
