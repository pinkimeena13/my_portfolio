import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiSmartphone, FiGlobe, FiShield, FiDatabase, FiMonitor, FiBell, FiCloud, FiCpu, FiUmbrella } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    id: 1,
    title: 'Shouta',
    subtitle: 'Digital Gifting App',
    description:
      'Australian-based digital gifting mobile application. Migrated from React Native v0.63 to v0.83 with significant performance improvements. Implemented secure payment features for seamless digital gift transactions.',
    gradient: 'from-violet-600 via-purple-700 to-pink-600',
    icon: <FiSmartphone className="text-4xl" />,
    tags: ['React Native', 'Payment Gateways', 'Mobile'],
    highlights: [
      'Migrated RN v0.63 → v0.83 improving stability by 40%',
      'Secure payment integration for gift transactions',
      'International client collaboration & delivery',
    ],
    category: 'Mobile',
    color: '#7c3aed',
  },
  {
    id: 2,
    title: 'Bconnect',
    subtitle: 'Lighting Product Platform',
    description:
      'Dynamic lighting product e-commerce platform powered by Strapi CMS. API-driven routing with real-time backend updates, datasheet downloads, and scalable content management.',
    gradient: 'from-blue-600 via-cyan-600 to-teal-500',
    icon: <FiGlobe className="text-4xl" />,
    tags: ['React.js', 'Tailwind CSS', 'Strapi CMS', 'MySQL'],
    highlights: [
      'Strapi CMS for dynamic multi-product management',
      'API-driven routing for dynamic page rendering',
      'Eliminated static dependencies → real-time updates',
    ],
    category: 'Web',
    color: '#06b6d4',
  },
  {
    id: 3,
    title: 'CyberStash',
    subtitle: 'Cyber Defense Portal',
    description:
      'Versatile Cyber Defense Portal (CDP) that detects system threats and vulnerabilities. Integrates third-party APIs for automated IP/domain blocking and management across network environments.',
    gradient: 'from-red-700 via-orange-600 to-amber-500',
    icon: <FiShield className="text-4xl" />,
    tags: ['Angular', 'REST APIs', 'Cybersecurity'],
    highlights: [
      'Real-time threat and vulnerability detection',
      'Automated IP/domain blocking via third-party APIs',
      'Endpoint and network environment management',
    ],
    category: 'Web',
    color: '#ef4444',
  },
  {
    id: 4,
    title: 'Setu',
    subtitle: 'Farmer-Focused AgriTech App',
    description:
      'Robust backend platform for farmers covering storage management, livestock tracking, and water/soil resource management. Empowering agricultural productivity through digital tools.',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    icon: <FiDatabase className="text-4xl" />,
    tags: ['NestJS', 'MongoDB', 'Backend'],
    highlights: [
      'Backend services for storage, livestock & water management',
      'Digital resource access for agricultural productivity',
      'Scalable NestJS architecture with MongoDB',
    ],
    category: 'Backend',
    color: '#10b981',
  },
  {
    id: 5,
    title: 'SSEC College Website',
    subtitle: 'Educational Institution Site',
    description:
      'Fully responsive and informative college website enhancing user engagement and digital accessibility. Includes structured sections for Home, Courses, About, and Contact.',
    gradient: 'from-indigo-600 via-purple-600 to-violet-600',
    icon: <FiMonitor className="text-4xl" />,
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    highlights: [
      'Fully responsive cross-device design',
      'Complete institutional digital presence',
      'Enhanced user engagement & accessibility',
    ],
    category: 'Web',
    color: '#6366f1',
  },
  {
    id: 6,
    title: 'Digital Notice Board',
    subtitle: 'Smart Notice Management',
    description:
      'Intuitive interface for creating and managing digital notices in educational institutions. Features preview templates, customizable themes, and real-time updates — replacing traditional paper boards.',
    gradient: 'from-orange-600 via-amber-500 to-yellow-500',
    icon: <FiBell className="text-4xl" />,
    tags: ['Angular', 'TypeScript'],
    highlights: [
      'Preview templates & customizable themes',
      'Real-time notice updates and management',
      'Fully digitized replacement for paper boards',
    ],
    category: 'Web',
    color: '#f59e0b',
  },
  {
    id: 8,
    title: 'AI Resume Builder',
    subtitle: 'AI-Powered Smart Resume Tool',
    description:
      'Smart web application that helps users create professional resumes with AI assistance. Features AI-generated summaries & project descriptions, multiple themes, PDF download, and shareable link generation.',
    gradient: 'from-fuchsia-600 via-violet-600 to-indigo-600',
    icon: <FiCpu className="text-4xl" />,
    tags: ['React.js', 'Strapi', 'AI', 'PDF Generation'],
    highlights: [
      'AI-generated professional summaries & project descriptions',
      'Multiple resume themes with live preview',
      'PDF download & shareable link generation',
    ],
    category: 'AI',
    color: '#a855f7',
    featured: true,
  },
  {
    id: 9,
    title: 'Food Website',
    subtitle: 'Static Food & Restaurant App',
    description:
      'Static web application built with Angular 19. Features Home, Contact, Product pages and more. Key features include search functionality, product browsing, and a clean modern UI.',
    gradient: 'from-rose-500 via-pink-500 to-orange-400',
    icon: <FiUmbrella className="text-4xl" />,
    tags: ['Angular 19', 'TypeScript', 'Frontend'],
    highlights: [
      'Built with Angular 19 latest features',
      'Product search & browsing functionality',
      'Multi-page: Home, Contact, Products & more',
    ],
    category: 'Web',
    color: '#f43f5e',
  },
  {
    id: 7,
    title: 'SAP BTP Outlook Integration',
    subtitle: 'Enterprise Process Automation',
    description:
      'Automated workflow integrating SAP BTP with Microsoft Outlook using Adaptive Cards for email-based approvals. Real-time data sync between Outlook actions and SAP BTP Control Tower.',
    gradient: 'from-blue-700 via-blue-600 to-violet-600',
    icon: <FiCloud className="text-4xl" />,
    tags: ['SAP BTP', 'Microsoft Outlook', 'Adaptive Cards'],
    highlights: [
      'Email-based approval/rejection via Adaptive Cards',
      'Real-time status sync with SAP BTP Control Tower',
      'Automated enterprise process workflow',
    ],
    category: 'Enterprise',
    color: '#3b82f6',
  },
]

const categories = ['All', 'AI', 'Web', 'Mobile', 'Backend', 'Enterprise']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-8 lg:px-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4 mb-8" />

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25'
                    : isDark
                      ? 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
                      : 'glass-card text-slate-500 hover:text-violet-700 hover:bg-violet-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl flex flex-col ${
                project.featured ? 'ring-2 ring-violet-500/40' : ''
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    ✨ Featured
                  </span>
                </div>
              )}

              {/* Banner */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
                <div className="text-white/80 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <p className={`text-xs font-mono mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{project.subtitle}</p>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                </div>

                <div className="space-y-2 mb-5 flex-1">
                  {project.highlights.map((h) => (
                    <div key={h} className={`flex items-start gap-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span style={{ color: project.color }} className="mt-0.5 flex-shrink-0 font-bold">▸</span>
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>

                <div className={`flex gap-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-violet-100'}`}>
                  <a
                    href="https://github.com/pinkimeena13"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 text-xs transition-colors duration-300 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href="https://github.com/pinkimeena13"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-violet-500 hover:text-violet-400 transition-colors duration-300"
                  >
                    <FiExternalLink /> View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
