import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import {
  SiJavascript, SiTypescript, SiHtml5, SiReact, SiAngular,
  SiNodedotjs, SiExpress, SiNestjs, SiMongodb, SiMysql,
  SiTailwindcss, SiBootstrap, SiGit, SiGithub, SiPostman,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { FaJava } from 'react-icons/fa'

const skillGroups = [
  {
    label: 'Languages',
    color: 'violet',
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
    skills: [
      { name: 'React.js',    icon: <SiReact />,       color: '#61DAFB', level: 92 },
      { name: 'Tailwind CSS',icon: <SiTailwindcss />, color: '#06B6D4', level: 90 },
      { name: 'React Native',icon: <SiReact />,       color: '#61DAFB', level: 85 },
      { name: 'Node.js',     icon: <SiNodedotjs />,   color: '#339933', level: 85 },
      { name: 'Bootstrap',   icon: <SiBootstrap />,   color: '#7952B3', level: 85 },
      { name: 'Angular',     icon: <SiAngular />,     color: '#DD0031', level: 80 },
      { name: 'Express',     icon: <SiExpress />,     color: '#ffffff', level: 80 },
      { name: 'NestJS',      icon: <SiNestjs />,      color: '#E0234E', level: 75 },
    ],
  },
  {
    label: 'Databases & Tools',
    color: 'amber',
    skills: [
      { name: 'VS Code',     icon: <VscVscode />,     color: '#007ACC', level: 95 },
      { name: 'Git',         icon: <SiGit />,         color: '#F05032', level: 85 },
      { name: 'GitHub',      icon: <SiGithub />,      color: '#ffffff', level: 85 },
      { name: 'Postman',     icon: <SiPostman />,     color: '#FF6C37', level: 85 },
      { name: 'MongoDB',     icon: <SiMongodb />,     color: '#47A248', level: 80 },
      { name: 'MySQL',       icon: <SiMysql />,       color: '#4479A1', level: 75 },
    ],
  },
]


export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`tag ${group.color === 'cyan' ? 'tag-cyan' : group.color === 'amber' ? 'tag-amber' : ''}`}>
                  {group.label}
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.05 }}
                    className="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 group hover:-translate-y-1 transition-all duration-300 cursor-default"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div
                      className="text-3xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className={`text-xs font-medium text-center leading-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{skill.name}</span>
                    <div className="w-full skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: gi * 0.1 + si * 0.06, ease: 'easeOut' }}
                      />
                    </div>
                    <span className={`text-xs font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SAP BTP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="tag-amber tag">Specialized</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="flex flex-wrap gap-3">
            {['SAP BTP', 'Process Automation', 'Microsoft Outlook Integration', 'Adaptive Cards', 'Strapi CMS', 'Payment Gateways', 'Cyber Defense'].map((s) => (
              <motion.span
                key={s}
                whileHover={{ scale: 1.05 }}
                className={`glass-card rounded-xl px-4 py-2 text-sm border transition-all duration-300 cursor-default ${
                  isDark
                    ? 'text-slate-300 border-white/5 hover:border-violet-500/30 hover:text-violet-300'
                    : 'text-slate-600 border-violet-100 hover:border-violet-400 hover:text-violet-600'
                }`}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
