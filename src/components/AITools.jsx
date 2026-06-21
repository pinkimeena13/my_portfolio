import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { SiOpenai, SiGooglegemini, SiGithubcopilot, SiAnthropic } from 'react-icons/si'
import { FiZap } from 'react-icons/fi'

const tools = [
  {
    name: 'ChatGPT',
    brand: 'OpenAI',
    desc: 'Used daily across client projects for code generation, debugging, requirement analysis, and rapid prototyping.',
    icon: <SiOpenai />,
    color: '#10a37f',
    glow: 'rgba(16,163,127,0.3)',
    grad: 'from-emerald-600/20 to-teal-600/10',
  },
  {
    name: 'Gemini',
    brand: 'Google',
    desc: 'Leveraged for technical research, documentation generation, and multimodal code assistance during development.',
    icon: <SiGooglegemini />,
    color: '#4285f4',
    glow: 'rgba(66,133,244,0.3)',
    grad: 'from-blue-600/20 to-indigo-600/10',
  },
  {
    name: 'Claude Code',
    brand: 'Anthropic',
    desc: 'Primary AI coding agent used for architecture decisions, complex refactoring, and deep code reviews in production projects.',
    icon: <SiAnthropic />,
    color: '#d97706',
    glow: 'rgba(217,119,6,0.3)',
    grad: 'from-amber-600/20 to-orange-600/10',
  },
  {
    name: 'Antigravity',
    brand: 'Antigravity',
    desc: 'AI productivity tool used to automate repetitive dev workflows and accelerate creative problem solving.',
    icon: <FiZap />,
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.3)',
    grad: 'from-purple-600/20 to-violet-600/10',
  },
  {
    name: 'GitHub Copilot',
    brand: 'GitHub',
    desc: 'Integrated into daily IDE workflow for real-time code completions, boilerplate reduction, and faster feature delivery.',
    icon: <SiGithubcopilot />,
    color: '#6e40c9',
    glow: 'rgba(110,64,201,0.3)',
    grad: 'from-violet-600/20 to-purple-600/10',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.88 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
}

export default function AITools() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="ai-tools" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14 section-glow">
      <div className="w-full">

        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Tools I use at work</p>
          <h2 className="section-title">AI Tools I Use</h2>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.04, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden cursor-default group flex flex-col"
              style={{
                background: isDark
                  ? `linear-gradient(145deg, ${tool.color}16, ${tool.color}08)`
                  : `linear-gradient(145deg, #ffffff, ${tool.color}06)`,
                border: `1px solid ${tool.color}28`,
              }}
            >
              {/* Gradient top accent */}
              <div
                className="h-0.5"
                style={{ background: `linear-gradient(90deg, ${tool.color}, ${tool.color}50, transparent)` }}
              />

              {/* Hover inner glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: `inset 0 0 35px ${tool.glow}`, border: `1px solid ${tool.color}45` }}
              />

              <div className="p-6 flex flex-col flex-1 relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 flex-shrink-0"
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: `${tool.color}20`,
                    boxShadow: `0 8px 24px ${tool.glow}`,
                    border: `1px solid ${tool.color}35`,
                    color: tool.color,
                  }}
                >
                  {tool.icon}
                </motion.div>

                <div className="flex-1">
                  <p
                    className="text-[10px] font-mono uppercase tracking-widest mb-1"
                    style={{ color: `${tool.color}cc` }}
                  >
                    {tool.brand}
                  </p>
                  <h4 className={`text-base font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {tool.name}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    {tool.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="h-0.5 rounded-full mt-5"
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.35 }}
                  style={{ background: `linear-gradient(90deg, ${tool.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
