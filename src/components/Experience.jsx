import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiZap, FiUsers, FiCode, FiTrendingUp } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const achievements = [
  { icon: <FiZap className="text-amber-400" />, label: 'Projects Delivered', value: '10+', color: 'from-amber-500/20 to-orange-500/10', border: 'border-amber-500/20' },
  { icon: <FiUsers className="text-cyan-400" />, label: 'Clients Handled', value: '5+', color: 'from-cyan-500/20 to-blue-500/10', border: 'border-cyan-500/20' },
  { icon: <FiCode className="text-violet-400" />, label: 'Technologies Used', value: '12+', color: 'from-violet-500/20 to-purple-500/10', border: 'border-violet-500/20' },
  { icon: <FiTrendingUp className="text-emerald-400" />, label: 'Years Experience', value: '2.6+', color: 'from-emerald-500/20 to-teal-500/10', border: 'border-emerald-500/20' },
]

const responsibilities = [
  { icon: '🚀', text: 'End-to-end full-stack web & mobile development' },
  { icon: '🤝', text: 'Direct client communication & requirement gathering' },
  { icon: '📱', text: 'Cross-platform mobile apps with React Native' },
  { icon: '🔐', text: 'Secure API design, integration & best practices' },
  { icon: '☁️', text: 'SAP BTP process automation & integrations' },
  { icon: '⚡', text: 'Performance optimization & scalable architecture' },
]

const timeline = [
  {
    icon: '🚀',
    title: 'Joined as Software Developer',
    desc: 'Started full-stack development journey, working on React & Angular projects.',
    color: '#7c3aed',
  },
  {
    icon: '⚙️',
    title: 'Backend & Enterprise Development',
    desc: 'Built NestJS/MongoDB APIs for Setu AgriTech & integrated SAP BTP workflows.',
    color: '#f59e0b',
  },
  {
    icon: '📱',
    title: 'Mobile & International Projects',
    desc: 'Led React Native migration for Shouta (Australia), improved performance by 40%.',
    color: '#06b6d4',
  },
  {
    icon: '🤖',
    title: 'AI & Advanced Projects',
    desc: 'Built AI Resume Builder with React + Strapi, expanding into AI-powered tools.',
    color: '#10b981',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">My journey</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Achievement stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass-card rounded-2xl p-5 border ${a.border} bg-gradient-to-br ${a.color} text-center group`}
            >
              <div className="text-2xl mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {a.icon}
              </div>
              <div className="text-2xl font-black gradient-text mb-1">{a.value}</div>
              <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{a.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main experience card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card glow-border rounded-3xl overflow-hidden mb-12"
        >
          {/* Top gradient banner */}
          <div className="h-2 bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500" />

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div className="flex items-start gap-5">
                {/* Company logo placeholder */}
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
                  <span className="font-medium">Nov 2023 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-cyan-400 flex-shrink-0" />
                  <span>India 🇮🇳</span>
                </div>
                <span className="tag self-start">Full-time</span>
              </div>
            </div>

            {/* Description */}
            <p className={`leading-relaxed mb-8 text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Gained hands-on experience in full-stack web and mobile application development, working
              with front-end, back-end, and cross-platform technologies to create secure and functional
              digital solutions. Contributed to improving project efficiency, system scalability, and
              user experience through innovative solutions. Cultivated strong problem-solving skills,
              managed direct client communications, and excelled in a fast-paced, collaborative environment.
            </p>

            {/* Responsibilities grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {responsibilities.map((r, i) => (
                <motion.div
                  key={r.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 ${
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
              <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Technologies</p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'React Native', 'Angular', 'NestJS', 'Node.js', 'TypeScript', 'MongoDB', 'MySQL', 'SAP BTP', 'Strapi', 'Tailwind CSS', 'REST APIs'].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.08 }}
                    className="tag text-xs cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Career Milestones</h3>
          <div className="relative">
            {/* Vertical line at exactly left-5 (20px) */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 timeline-line" />
            <div className="space-y-5 pl-14">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="relative group"
                >
                  {/* line=left-5(20px), pl-14(56px), dot w-4(16px) → left edge at 56-44=12px → center at 20px ✓ */}
                  <div
                    className="absolute -left-[2.75rem] top-3 w-4 h-4 rounded-full group-hover:scale-125 transition-transform duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 0 3px ${item.color}30, 0 0 12px ${item.color}50`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  </div>
                  <div className={`glass-card rounded-2xl p-4 group-hover:-translate-y-0.5 transition-all duration-300 ${isDark ? 'hover:bg-white/5' : 'hover:bg-violet-50/50'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{item.icon}</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
