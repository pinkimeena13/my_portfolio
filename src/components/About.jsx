import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiSmartphone, FiServer, FiCpu, FiCheckCircle } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const interests = [
  {
    icon: <FiCode className="text-violet-500 text-xl" />,
    title: 'Web Development',
    desc: 'React, Angular, Node.js & NestJS — pixel-perfect UIs to production-ready backends.',
    bg: 'from-violet-500/10 to-purple-500/5',
    border: 'border-violet-500/20',
  },
  {
    icon: <FiSmartphone className="text-cyan-500 text-xl" />,
    title: 'Mobile Apps',
    desc: 'React Native for iOS & Android with smooth UX and secure payment integrations.',
    bg: 'from-cyan-500/10 to-blue-500/5',
    border: 'border-cyan-500/20',
  },
  {
    icon: <FiServer className="text-amber-500 text-xl" />,
    title: 'Backend & APIs',
    desc: 'Scalable REST APIs, MongoDB, MySQL, SAP BTP workflows and enterprise integrations.',
    bg: 'from-amber-500/10 to-orange-500/5',
    border: 'border-amber-500/20',
  },
  {
    icon: <FiCpu className="text-fuchsia-500 text-xl" />,
    title: 'AI Integration',
    desc: 'LLM-based features and AI-powered tools built into modern web applications.',
    bg: 'from-fuchsia-500/10 to-pink-500/5',
    border: 'border-fuchsia-500/20',
  },
]

const highlights = [
  'Led React Native migration — 40% stability gain',
  'Built enterprise SAP BTP workflow automation',
  'Delivered 10+ projects across 4 industries',
  'End-to-end client communication & delivery',
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-5 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Building scalable, secure{' '}
              <span className="gradient-text">digital products —</span>{' '}
              full stack, end to end.
            </h3>

            <div className={`space-y-3 text-sm md:text-base leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>
                Software Developer with <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>2.6+ years of professional experience</span> at{' '}
                <span className="text-violet-500 font-semibold">Singaji Software Solution</span>, delivering
                production-grade applications across web, mobile, and enterprise platforms. I've independently led
                10+ projects — from migrating a React Native app for an Australian client to architecting a
                Cyber Defense Portal with real-time threat detection.
              </p>
              <p>
                My stack spans <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>React, Angular, NestJS, Node.js, React Native, MongoDB, MySQL, TypeScript & SAP BTP</span>.
                I pair strong technical execution with direct client communication —
                gathering requirements, managing timelines, and delivering clean, maintainable solutions.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-2 mb-7">
              {highlights.map((h) => (
                <div key={h} className={`flex items-start gap-2 text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <FiCheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" />
                  {h}
                </div>
              ))}
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Location', value: 'India 🇮🇳' },
                { label: 'Experience', value: '2.6+ Years' },
                { label: 'Email', value: 'pinkimeena52913@gmail.com', small: true },
                { label: 'Phone', value: '+91 9009679126' },
              ].map((item) => (
                <div key={item.label} className={`glass-card rounded-xl p-4 border ${isDark ? 'border-white/5' : 'border-violet-100'}`}>
                  <div className={`text-xs font-mono uppercase tracking-wider mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</div>
                  <div className={`font-semibold ${item.small ? 'text-xs' : 'text-sm'} ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interest cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass-card rounded-2xl p-6 group transition-all duration-300 cursor-default border bg-gradient-to-br ${item.bg} ${item.border}`}
              >
                <div className={`mb-4 p-3 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-white/5' : 'bg-white/70'}`}>
                  {item.icon}
                </div>
                <h4 className={`font-bold text-sm mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.title}</h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
