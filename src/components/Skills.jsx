import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import {
  SiJavascript, SiTypescript, SiHtml5, SiReact, SiAngular,
  SiNodedotjs, SiExpress, SiNestjs, SiMongodb, SiMysql,
  SiTailwindcss, SiBootstrap, SiGit, SiGithub, SiPostman,
} from 'react-icons/si'
import { FaCss3Alt, FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

const skillGroups = [
  {
    label: 'Languages',
    color: 'violet',
    accent: '#7c3aed',
    skills: [
      { name: 'HTML5',       icon: <SiHtml5 />,      color: '#E34F26', level: 95 },
      { name: 'JavaScript',  icon: <SiJavascript />,  color: '#F7DF1E', level: 90 },
      { name: 'CSS3',        icon: <FaCss3Alt />,     color: '#1572B6', level: 90 },
      { name: 'TypeScript',  icon: <SiTypescript />,  color: '#3178C6', level: 80 },
      { name: 'Java',        icon: <FaJava />,        color: '#ED8B00', level: 30 },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    color: 'cyan',
    accent: '#06b6d4',
    skills: [
      { name: 'React.js',    icon: <SiReact />,       color: '#61DAFB', level: 92 },
      { name: 'Tailwind CSS',icon: <SiTailwindcss />, color: '#06B6D4', level: 90 },
      { name: 'React Native',icon: <SiReact />,       color: '#61DAFB', level: 85 },
      { name: 'Node.js',     icon: <SiNodedotjs />,   color: '#339933', level: 85 },
      { name: 'Bootstrap',   icon: <SiBootstrap />,   color: '#7952B3', level: 85 },
      { name: 'Angular',     icon: <SiAngular />,     color: '#DD0031', level: 80 },
      { name: 'Express',     icon: <SiExpress />,     color: '#94a3b8', level: 80 },
      { name: 'NestJS',      icon: <SiNestjs />,      color: '#E0234E', level: 75 },
    ],
  },
  {
    label: 'Databases & Tools',
    color: 'amber',
    accent: '#f59e0b',
    skills: [
      { name: 'VS Code',     icon: <VscVscode />,     color: '#007ACC', level: 95 },
      { name: 'Git',         icon: <SiGit />,         color: '#F05032', level: 85 },
      { name: 'GitHub',      icon: <SiGithub />,      color: '#94a3b8', level: 85 },
      { name: 'Postman',     icon: <SiPostman />,     color: '#FF6C37', level: 85 },
      { name: 'MongoDB',     icon: <SiMongodb />,     color: '#47A248', level: 80 },
      { name: 'MySQL',       icon: <SiMysql />,       color: '#4479A1', level: 75 },
    ],
  },
]

const specialized = ['SAP BTP', 'Process Automation', 'Microsoft Outlook Integration', 'Adaptive Cards', 'Strapi CMS', 'Payment Gateways', 'Cyber Defense']

const labelToLevel = (level) => {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 50) return 'Intermediate'
  return 'Beginner'
}

const labelColor = (level) => {
  if (level >= 90) return { bg: 'rgba(16,185,129,0.15)', color: '#10b981' }
  if (level >= 75) return { bg: 'rgba(124,58,237,0.15)', color: '#7c3aed' }
  if (level >= 50) return { bg: 'rgba(6,182,212,0.15)', color: '#06b6d4' }
  return { bg: 'rgba(148,163,184,0.15)', color: '#94a3b8' }
}

/* Animation variants */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.88 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'backOut' } },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14 section-glow">
      <div className="w-full">

        {/* Section header with animated line */}
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="divider-line w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4"
          />
        </motion.div>

        <div className="space-y-14">
          {skillGroups.map((group, gi) => (
            <div key={group.label}>
              {/* Group label + rule */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.12 }}
                className="flex items-center gap-3 mb-7"
              >
                <span className={`tag text-xs font-semibold ${group.color === 'cyan' ? 'tag-cyan' : group.color === 'amber' ? 'tag-amber' : ''}`}>
                  {group.label}
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: gi * 0.12 + 0.1 }}
                  className="flex-1 h-px origin-left"
                  style={{ background: `linear-gradient(90deg, ${group.accent}40, transparent)` }}
                />
              </motion.div>

              <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {group.skills.map((skill) => {
                  const lc = labelColor(skill.level)
                  return (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      className="neo-card p-5 flex flex-col items-center gap-3 cursor-default group"
                    >
                      {/* Icon with glow bg */}
                      <div
                        className="skill-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                        style={{
                          background: `${skill.color}18`,
                          border: `1px solid ${skill.color}30`,
                          color: skill.color,
                        }}
                      >
                        {skill.icon}
                      </div>

                      <span className={`text-xs font-semibold text-center leading-tight ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {skill.name}
                      </span>

                      {/* Progress bar */}
                      <div className="w-full skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.3, delay: gi * 0.1 + 0.3, ease: 'easeOut' }}
                          style={{ background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color}66)` }}
                        />
                      </div>

                      {/* Level pill */}
                      <span
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                        style={{ background: lc.bg, color: lc.color }}
                      >
                        {labelToLevel(skill.level)}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Specialized */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="tag-amber tag text-xs font-semibold">Specialized</span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex-1 h-px origin-left"
              style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.4), transparent)' }}
            />
          </motion.div>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-3"
          >
            {specialized.map((s) => (
              <motion.span
                key={s}
                variants={tagVariants}
                whileHover={{ scale: 1.07, y: -3 }}
                className={`neo-card px-4 py-2 text-sm font-medium cursor-default ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
                style={{ borderRadius: '0.75rem' }}
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
