import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiMapPin } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const contactInfo = [
  {
    icon: <FiMail className="text-violet-400 text-xl" />,
    label: 'Email',
    value: 'pinkimeena52913@gmail.com',
    href: 'mailto:pinkimeena52913@gmail.com',
  },
  {
    icon: <FiPhone className="text-cyan-400 text-xl" />,
    label: 'Phone',
    value: '+91 9009679126',
    href: 'tel:+919009679126',
  },
  {
    icon: <FiLinkedin className="text-blue-400 text-xl" />,
    label: 'LinkedIn',
    value: 'pinki-meena-82776b25b',
    href: 'https://linkedin.com/in/pinki-meena-82776b25b',
  },
  {
    icon: <FiGithub className="text-slate-300 text-xl" />,
    label: 'GitHub',
    value: 'pinkimeena13',
    href: 'https://github.com/pinkimeena13',
  },
  {
    icon: <FiMapPin className="text-amber-400 text-xl" />,
    label: 'Location',
    value: 'India',
    href: null,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:pinkimeena52913@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Let's talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Have an interesting project, collaboration idea, or just want to talk tech?
            I'd love to hear from you — my inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className={`glass-card rounded-2xl p-4 flex items-center gap-4 group transition-all duration-300 ${isDark ? 'hover:bg-white/5' : 'hover:bg-violet-50'}`}>
                  <div className={`p-3 rounded-xl flex-shrink-0 ${isDark ? 'bg-white/5' : 'bg-violet-50'}`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-mono uppercase tracking-wider mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className={`text-sm font-medium hover:text-violet-500 transition-colors truncate block ${isDark ? 'text-slate-200' : 'text-slate-700'}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Status card */}
            <div className="glass-card glow-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-violet-400 font-semibold text-sm">Let's Build Something Great</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to exciting collaborations, freelance projects, and meaningful technical discussions.
                Always happy to connect with fellow developers and tech enthusiasts.
                Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card glow-border rounded-3xl p-8 space-y-5">
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2 block">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/50 transition-all duration-300 ${isDark ? 'bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600' : 'bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400'}`}
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/50 transition-all duration-300 ${isDark ? 'bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600' : 'bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400'}`}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2 block">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500/50 transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/50 transition-all duration-300 resize-none ${isDark ? 'bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600' : 'bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400'}`}
                />
              </div>

              <button
                type="submit"
                className={`btn-primary text-white w-full justify-center ${sent ? 'opacity-75' : ''}`}
              >
                {sent ? '✓ Message Sent!' : <><FiSend /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
