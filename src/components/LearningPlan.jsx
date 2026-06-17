import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCpu, FiCloud, FiSend, FiCheckCircle, FiClock, FiTarget, FiBook } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const learningPaths = [
  {
    category: 'Artificial Intelligence',
    icon: <FiCpu className="text-2xl" />,
    color: '#a855f7',
    gradient: 'from-fuchsia-600 via-violet-600 to-purple-700',
    status: 'In Progress',
    statusColor: 'bg-amber-400',
    progress: 35,
    description: 'Exploring AI/ML fundamentals to build smarter applications and integrate AI into web products.',
    topics: [
      { name: 'Prompt Engineering & LLMs', done: true },
      { name: 'OpenAI / Gemini API Integration', done: true },
      { name: 'AI-powered App Development', done: false },
      { name: 'Machine Learning Basics (Python)', done: false },
      { name: 'LangChain & RAG Systems', done: false },
      { name: 'AI Agents & Automation', done: false },
    ],
    tools: ['OpenAI API', 'Gemini', 'LangChain', 'Python', 'Hugging Face'],
    eta: 'Q3 2025',
  },
  {
    category: 'SAP BTP & Enterprise',
    icon: <FiCloud className="text-2xl" />,
    color: '#06b6d4',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    status: 'Active',
    statusColor: 'bg-emerald-400',
    progress: 60,
    description: 'Deepening expertise in SAP Business Technology Platform — process automation, integrations, and enterprise workflows.',
    topics: [
      { name: 'SAP BTP Fundamentals', done: true },
      { name: 'Process Automation & Workflows', done: true },
      { name: 'Outlook Integration & Adaptive Cards', done: true },
      { name: 'SAP CAPM (Cloud Application Programming)', done: false },
      { name: 'SAP Integration Suite', done: false },
      { name: 'SAP BTP Certification', done: false },
    ],
    tools: ['SAP BTP', 'SAP CAPM', 'SAP Fiori', 'Adaptive Cards', 'Node.js'],
    eta: 'Q2 2025',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function LearningPlan() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [form, setForm] = useState({ name: '', email: '', suggestion: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Learning Suggestion from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Hi Pinki,\n\nI have a learning suggestion for you!\n\nFrom: ${form.name}\nEmail: ${form.email}\n\nSuggestion:\n${form.suggestion}\n\nLooking forward to seeing you grow! 🚀`
    )
    window.location.href = `mailto:pinkimeena52913@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', suggestion: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="learning" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Always growing</p>
          <h2 className="section-title">Future Learning Plan</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="divider-line w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4"
          />
          <p className={`mt-4 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Actively expanding skills in AI & SAP BTP to stay ahead in the evolving tech landscape.
          </p>
        </motion.div>

        {/* Learning path cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {learningPaths.map((path) => (
            <motion.div
              key={path.category}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass-card glow-border rounded-3xl overflow-hidden group"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${path.gradient}`} />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${path.color}20`, color: path.color }}
                    >
                      {path.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{path.category}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${path.statusColor} animate-pulse`} />
                        <span className="text-xs font-mono" style={{ color: path.color }}>{path.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs glass-card rounded-xl px-2.5 py-1.5">
                    <FiClock className="text-violet-400 text-xs" />
                    <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{path.eta}</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {path.description}
                </p>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Progress</span>
                    <span className="text-xs font-bold" style={{ color: path.color }}>{path.progress}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${path.progress}%` } : { width: 0 }}
                      transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
                      style={{ background: `linear-gradient(90deg, ${path.color}, ${path.color}99)` }}
                    />
                  </div>
                </div>

                {/* Topics checklist */}
                <div className="space-y-2 mb-5">
                  {path.topics.map((topic) => (
                    <div key={topic.name} className="flex items-center gap-2.5">
                      {topic.done ? (
                        <FiCheckCircle className="text-emerald-400 text-sm flex-shrink-0" />
                      ) : (
                        <FiTarget className="text-slate-600 text-sm flex-shrink-0" />
                      )}
                      <span className={`text-xs ${topic.done ? (isDark ? 'text-slate-300' : 'text-slate-700') : (isDark ? 'text-slate-500' : 'text-slate-400')} ${topic.done ? '' : 'line-through opacity-60'}`}>
                        {topic.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className={`pt-4 border-t ${isDark ? 'border-white/5' : 'border-violet-100'}`}>
                  <div className="flex flex-wrap gap-2">
                    {path.tools.map((tool) => (
                      <span key={tool} className="tag-cyan tag text-xs">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Suggestion section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card glow-border rounded-3xl overflow-hidden"
        >
          <div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500" />
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center">
                    <FiBook className="text-amber-400 text-lg" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Suggest Something to Learn</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Your suggestion will be sent to my email directly</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Got a technology, tool, framework, or resource you think I should explore? I'd love to hear it!
                  Whether it's a trending library, AI tool, or career advice — share it below and I'll get your message right in my inbox.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: '🤖', text: 'AI frameworks or tools you use' },
                    { icon: '🛠️', text: 'Libraries & technologies worth learning' },
                    { icon: '📚', text: 'Books, courses, or learning resources' },
                    { icon: '💡', text: 'Career advice or industry insights' },
                  ].map((tip) => (
                    <div key={tip.text} className="flex items-center gap-3">
                      <span className="text-base">{tip.icon}</span>
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{tip.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs font-mono uppercase tracking-wider mb-2 block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300"
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(124,58,237,0.2)'}`,
                        color: isDark ? '#e2e8f0' : '#1e293b',
                      }}
                    />
                  </div>
                  <div>
                    <label className={`text-xs font-mono uppercase tracking-wider mb-2 block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Your Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300"
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(124,58,237,0.2)'}`,
                        color: isDark ? '#e2e8f0' : '#1e293b',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className={`text-xs font-mono uppercase tracking-wider mb-2 block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Your Suggestion</label>
                  <textarea
                    name="suggestion"
                    value={form.suggestion}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="e.g. You should learn Next.js — it pairs perfectly with React and is great for SEO. Here's a great course: ..."
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 resize-none"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(124,58,237,0.2)'}`,
                      color: isDark ? '#e2e8f0' : '#1e293b',
                    }}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`btn-primary w-full justify-center ${sent ? 'opacity-80' : ''}`}
                >
                  {sent
                    ? <><FiCheckCircle /> Suggestion Sent! Check your email.</>
                    : <><FiSend /> Send Suggestion to Pinki</>
                  }
                </motion.button>
                {sent && (
                  <p className="text-center text-xs text-emerald-400">
                    ✅ Your email client has opened — please send the message!
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
