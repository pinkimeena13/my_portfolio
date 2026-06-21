import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import {
  SiJavascript, SiTypescript, SiHtml5, SiReact, SiAngular,
  SiNodedotjs, SiExpress, SiNestjs, SiMongodb, SiMysql,
  SiTailwindcss, SiBootstrap, SiGit, SiGithub, SiPostman, SiJira, SiAnthropic,
} from 'react-icons/si'
import { FaCss3Alt, FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { FaBolt, FaCode } from 'react-icons/fa'

const skillGroups = [
  {
    label: 'Languages',
    color: 'violet',
    accent: '#7c3aed',
    skills: [
      { name: 'Java',        icon: <FaJava />,        color: '#ED8B00', level: 75 },
      { name: 'JavaScript',  icon: <SiJavascript />,  color: '#F7DF1E', level: 90 },
      { name: 'TypeScript',  icon: <SiTypescript />,  color: '#3178C6', level: 80 },
      { name: 'HTML5',       icon: <SiHtml5 />,       color: '#E34F26', level: 95 },
      { name: 'CSS3',        icon: <FaCss3Alt />,     color: '#1572B6', level: 90 },
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
      { name: 'JIRA',        icon: <SiJira />,        color: '#0052CC', level: 80 },
      { name: 'Cursor',      icon: <FaCode />,         color: '#9b59b6', level: 80 },
      { name: 'Claude Code', icon: <SiAnthropic />,   color: '#d97706', level: 85 },
      { name: 'Antigravity', icon: <FaBolt />,        color: '#a855f7', level: 75 },
    ],
  },
]

const specialized = [
  { icon: '⚙️', label: 'Enterprise Workflow Automation', desc: 'Process automation & enterprise integrations', color: '#f59e0b' },
  { icon: '📧', label: 'Microsoft Outlook Integration', desc: 'Email-based approvals via Adaptive Cards', color: '#0078d4' },
  { icon: '🗂️', label: 'Adaptive Cards', desc: 'Rich interactive cards for enterprise apps', color: '#6366f1' },
  { icon: '📦', label: 'Strapi CMS', desc: 'Headless CMS for dynamic content management', color: '#7c3aed' },
  { icon: '💳', label: 'Payment Gateway Integration', desc: 'Secure payment flows in web & mobile apps', color: '#10b981' },
  { icon: '🛡️', label: 'Cyber Defense Portal', desc: 'Threat detection & automated IP blocking', color: '#ef4444' },
  { icon: '🤖', label: 'AI Integration', desc: 'LLM-powered features in production apps', color: '#a855f7' },
]

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
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    className="neo-card p-5 flex flex-col items-center gap-3 cursor-default group"
                  >
                    {/* Icon with glow bg */}
                    <div
                      className="skill-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center text-[1.6rem] transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}0e)`,
                        border: `1px solid ${skill.color}35`,
                        color: skill.color,
                        boxShadow: `0 4px 18px ${skill.color}28, inset 0 1px 0 ${skill.color}20`,
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
