import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiZap, FiUsers, FiCode, FiTrendingUp } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const achievements = [
  { icon: <FiZap />,        label: 'Projects Delivered', value: '8+',  color: '#f59e0b', glow: 'rgba(245,158,11,0.25)' },
  { icon: <FiUsers />,      label: 'Clients Handled',   value: '5+',  color: '#06b6d4', glow: 'rgba(6,182,212,0.25)' },
  { icon: <FiCode />,       label: 'Technologies Used', value: '10+', color: '#7c3aed', glow: 'rgba(124,58,237,0.25)' },
  { icon: <FiTrendingUp />, label: 'Years Experience',  value: '2+',  color: '#10b981', glow: 'rgba(16,185,129,0.25)' },
]

const responsibilities = [
  { icon: '🚀', text: 'End-to-end full-stack web & mobile development' },
  { icon: '🤝', text: 'Direct client communication & requirement gathering' },
  { icon: '📱', text: 'Cross-platform mobile apps with React Native' },
  { icon: '🔐', text: 'Secure API design, integration & best practices' },
  { icon: '☁️', text: 'Enterprise workflow automation & integrations' },
  { icon: '⚡', text: 'Performance optimization & scalable architecture' },
]

const timeline = [
  { icon: '🚀', title: 'Joined as Software Developer', desc: 'Started full-stack development journey, working on React & Angular projects.', color: '#7c3aed' },
  { icon: '⚙️', title: 'Backend & Enterprise Development', desc: 'Built NestJS/MongoDB APIs for Setu AgriTech & automated enterprise workflows.', color: '#f59e0b' },
  { icon: '📱', title: 'Mobile & International Projects', desc: 'Led React Native migration for Shouta (Australia), improved performance by 40%.', color: '#06b6d4' },
  { icon: '🤖', title: 'AI & Advanced Projects', desc: 'Built AI Resume Builder with React + Strapi, expanding into AI-powered tools.', color: '#10b981' },
]

const techs = ['React.js', 'React Native', 'Angular', 'NestJS', 'Node.js', 'TypeScript', 'Java', 'MongoDB', 'MySQL', 'Strapi', 'Tailwind CSS', 'REST APIs']

const statVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: (i) => ({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, delay: i * 0.09, ease: [0.34, 1.56, 0.64, 1] } }),
}

const respVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 + i * 0.07 } }),
}

const timelineVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { duration: 0.45, delay: 0.4 + i * 0.1 } }),
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14 section-glow">
      <div className="w-full">

        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">My journey</p>
          <h2 className="section-title">Work Experience</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="divider-line w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4"
          />
        </motion.div>

        {/* Achievement stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              custom={i}
              variants={statVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden cursor-default group"
              style={{
                background: isDark ? `${a.color}12` : `${a.color}08`,
                border: `1px solid ${a.color}25`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 30px ${a.glow}`, border: `1px solid ${a.color}40` }}
              />
              <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${a.color}, transparent)` }} />
              <div className="p-5 text-center relative z-10">
                <div className="text-2xl mb-2 flex justify-center" style={{ color: a.color }}>
                  {a.icon}
                </div>
                <div className="text-2xl font-black mb-1 stat-number">{a.value}</div>
                <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{a.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main experience card */}
        <motion.div
          initial={{ opacity: 0, y: 44, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="neo-card mb-12"
          style={{ borderRadius: '1.5rem' }}
        >
          <div className="h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500" />

          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
                  <FiBriefcase className="text-white text-2xl" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="tag text-xs">Current Role</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-medium">Active</span>
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-black mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Software Developer
                  </h3>
                  <p className="gradient-text text-lg font-bold">Singaji Software Solution</p>
                </div>
              </div>
              <div className={`flex flex-col gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-violet-400 flex-shrink-0" />
                  <span className="font-medium">2024 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-cyan-400 flex-shrink-0" />
                  <span>India 🇮🇳</span>
                </div>
                <span className="tag self-start">Full-time</span>
              </div>
            </div>

            <p className={`leading-relaxed mb-8 text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Gained hands-on experience in full-stack web and mobile application development, working
              with front-end, back-end, and cross-platform technologies to create secure and functional
              digital solutions. Contributed to improving project efficiency, system scalability, and
              user experience. Managed direct client communications in a fast-paced, collaborative environment.
            </p>

            {/* Responsibilities grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {responsibilities.map((r, i) => (
                <motion.div
                  key={r.text}
                  custom={i}
                  variants={respVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ x: 4 }}
                  className={`flex items-start gap-3 p-3 rounded-xl transition-colors duration-300 ${
                    isDark ? 'hover:bg-white/5' : 'hover:bg-violet-50'
                  }`}
                >
                  <span className="text-lg flex-shrink-0">{r.icon}</span>
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{r.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <div className={`pt-6 border-t ${isDark ? 'border-white/5' : 'border-violet-100'}`}>
              <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Technologies</p>
              <motion.div
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-wrap gap-2"
              >
                {techs.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1, transition: { ease: 'backOut' } } }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="tag text-xs cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Career timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h3 className={`text-lg font-bold mb-7 ${isDark ? 'text-white' : 'text-slate-900'}`}>Career Milestones</h3>
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-0.5 timeline-line" />
            <div className="space-y-5 pl-14">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={timelineVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="relative group"
                >
                  <div
                    className="absolute -left-[2.75rem] top-3 w-4 h-4 rounded-full group-hover:scale-125 transition-transform duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 0 3px ${item.color}30, 0 0 14px ${item.color}50`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  </div>
                  <motion.div
                    whileHover={{ x: 6 }}
                    className={`neo-card p-4 group-hover:border-opacity-50`}
                    style={{ borderRadius: '1rem' }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{item.icon}</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
