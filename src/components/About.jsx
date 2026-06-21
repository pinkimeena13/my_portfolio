import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiSmartphone, FiServer, FiCpu, FiCheckCircle } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const interests = [
  {
    icon: <FiCode className="text-xl" />,
    title: 'Web Development',
    desc: 'React, Angular, Node.js & NestJS — pixel-perfect UIs to production-ready backends.',
    color: '#7c3aed',
    grad: 'from-violet-600/20 to-purple-600/10',
    border: 'rgba(124,58,237,0.3)',
  },
  {
    icon: <FiSmartphone className="text-xl" />,
    title: 'Mobile Apps',
    desc: 'React Native for iOS & Android with smooth UX and secure payment integrations.',
    color: '#06b6d4',
    grad: 'from-cyan-600/20 to-blue-600/10',
    border: 'rgba(6,182,212,0.3)',
  },
  {
    icon: <FiServer className="text-xl" />,
    title: 'Backend & APIs',
    desc: 'Scalable REST APIs, MongoDB, MySQL, Java backends and enterprise-grade integrations.',
    color: '#f59e0b',
    grad: 'from-amber-600/20 to-orange-600/10',
    border: 'rgba(245,158,11,0.3)',
  },
  {
    icon: <FiCpu className="text-xl" />,
    title: 'AI Integration',
    desc: 'LLM-based features and AI-powered tools built into modern web applications.',
    color: '#a855f7',
    grad: 'from-fuchsia-600/20 to-pink-600/10',
    border: 'rgba(168,85,247,0.3)',
  },
]

const highlights = [
  'Led React Native migration — 40% stability gain',
  'Built scalable Java & NestJS enterprise backends',
  'Delivered 8+ projects across 4 industries',
  'End-to-end client communication & delivery',
]

const infoItems = [
  { label: 'Location', value: 'India 🇮🇳' },
  { label: 'Experience', value: '2+ Years' },
  { label: 'Email', value: 'pinkimeena52913@gmail.com', small: true },
  { label: 'Phone', value: '+91 9009679126' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14 section-glow">
      <div className="w-full">

        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="divider-line w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-5 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Building scalable, secure{' '}
              <span className="gradient-text">digital products —</span>{' '}
              full stack, end to end.
            </h3>

            <div className={`space-y-3 text-sm md:text-base leading-relaxed mb-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>
                Software Developer with <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>2+ years at</span>{' '}
                <span className="text-violet-500 font-semibold">Singaji Software Solution</span>, delivering
                production-grade web, mobile & enterprise applications. Led 8+ projects — from React Native
                migration for an Australian client to architecting a Cyber Defense Portal.
              </p>
              <p>
                Stack: <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>React, Angular, NestJS, Node.js, React Native, MongoDB, MySQL, TypeScript & Java</span>{' '}
                — paired with direct client communication and clean, on-time delivery.
              </p>
            </div>

            {/* Highlights */}
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-2 mb-8"
            >
              {highlights.map((h) => (
                <motion.div
                  key={h}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                  className={`flex items-start gap-2 text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                >
                  <FiCheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" />
                  {h}
                </motion.div>
              ))}
            </motion.div>

            {/* Info grid */}
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-3"
            >
              {infoItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                  whileHover={{ y: -4 }}
                  className={`neo-card p-4`}
                >
                  <div className={`text-xs font-mono uppercase tracking-wider mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</div>
                  <div className={`font-semibold ${item.small ? 'text-xs' : 'text-sm'} ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Interest cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
                className="relative rounded-2xl overflow-hidden cursor-default group"
                style={{
                  background: isDark
                    ? `linear-gradient(145deg, ${item.color}18, ${item.color}08)`
                    : `linear-gradient(145deg, #ffffff, ${item.color}06)`,
                  border: `1px solid ${item.border}`,
                }}
              >
                {/* Top accent */}
                <div
                  className="h-0.5"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />

                {/* Hover inner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${item.color}15, transparent 65%)` }}
                />

                <div className="p-6 relative z-10">
                  <div
                    className="mb-4 p-3 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `${item.color}18`,
                      color: item.color,
                      boxShadow: `0 4px 16px ${item.color}25`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 className={`font-bold text-sm mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.title}</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
