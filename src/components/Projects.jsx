import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiSmartphone, FiGlobe, FiShield, FiDatabase, FiMonitor, FiBell, FiCloud, FiCpu, FiUmbrella, FiUsers, FiEdit3, FiChevronLeft, FiChevronRight, FiVideo, FiUserCheck } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

// BCONNECT
import bc1 from '../assets/projects/BCONNECT/HomePage.png'
import bc2 from '../assets/projects/BCONNECT/CategoryPage.png'
import bc3 from '../assets/projects/BCONNECT/ProductDetailPage.png'
import bc4 from '../assets/projects/BCONNECT/BconnectBackendContendManager.png'
import bcVideo from '../assets/projects/BCONNECT/video.mov'
// CDP
import cdp1 from '../assets/projects/CDP/home.png'
import cdp2 from '../assets/projects/CDP/2.png'
import cdp3 from '../assets/projects/CDP/3.png'
import cdp4 from '../assets/projects/CDP/4.png'
import cdpVideo from '../assets/projects/CDP/video.mov'
// SSEC
import ssec1 from '../assets/projects/SSEC/home.png'
import ssec2 from '../assets/projects/SSEC/courses.png'
import ssec3 from '../assets/projects/SSEC/about.png'
import ssec4 from '../assets/projects/SSEC/admission.png'
import ssecVideo from '../assets/projects/SSEC/video.mov'
// Hashproma
import hp1 from '../assets/projects/Hashproma/home.png'
import hp2 from '../assets/projects/Hashproma/2.png'
import hp3 from '../assets/projects/Hashproma/3.png'
import hp4 from '../assets/projects/Hashproma/4.png'
import hp5 from '../assets/projects/Hashproma/5.png'
import hp6 from '../assets/projects/Hashproma/6.png'
// SketchNote
import sk1 from '../assets/projects/SketchNote/home.png'
import sk2 from '../assets/projects/SketchNote/2.png'
import sk3 from '../assets/projects/SketchNote/3.png'
import sk4 from '../assets/projects/SketchNote/4.png'
// Restaurco
import rest1 from '../assets/projects/restaurant/1.png'
import rest2 from '../assets/projects/restaurant/2.png'
import rest3 from '../assets/projects/restaurant/3.png'
import rest4 from '../assets/projects/restaurant/4.png'
import rest5 from '../assets/projects/restaurant/5.png'
import restVideo from '../assets/projects/restaurant/video.mov'
// 6Meal Web
import meal1 from '../assets/projects/6meal/1.png'
import meal2 from '../assets/projects/6meal/2.png'
import meal3 from '../assets/projects/6meal/3.png'
import meal4 from '../assets/projects/6meal/4.png'
import meal5 from '../assets/projects/6meal/5.png'
import meal6 from '../assets/projects/6meal/6.png'
import meal7 from '../assets/projects/6meal/7.png'
import meal8 from '../assets/projects/6meal/8.png'
import mealVideo from '../assets/projects/6meal/video.mov'
// Digital Board
import dbVideo from '../assets/projects/Digital Bord/video.mp4'
// Shouta
import sh1 from '../assets/projects/shouta/1.png'
import sh2 from '../assets/projects/shouta/2.png'
import sh3 from '../assets/projects/shouta/3.png'
import sh4 from '../assets/projects/shouta/4.png'
import sh5 from '../assets/projects/shouta/5.png'
import sh6 from '../assets/projects/shouta/6.png'
import sh7 from '../assets/projects/shouta/7.png'
import shVideo from '../assets/projects/shouta/video.mp4'
// SAP BTP Interview Management
import im1 from '../assets/projects/SAP BTP interviewManagement/1.png'
import im2 from '../assets/projects/SAP BTP interviewManagement/2.png'
import im3 from '../assets/projects/SAP BTP interviewManagement/3.png'
import im4 from '../assets/projects/SAP BTP interviewManagement/4.png'
import im5 from '../assets/projects/SAP BTP interviewManagement/5.png'
import im6 from '../assets/projects/SAP BTP interviewManagement/6.png'
import im7 from '../assets/projects/SAP BTP interviewManagement/7.png'
import im8 from '../assets/projects/SAP BTP interviewManagement/8.png'
import im9 from '../assets/projects/SAP BTP interviewManagement/9.png'
import im10 from '../assets/projects/SAP BTP interviewManagement/10.png'
import im11 from '../assets/projects/SAP BTP interviewManagement/11.png'
import im12 from '../assets/projects/SAP BTP interviewManagement/12.png'
import im13 from '../assets/projects/SAP BTP interviewManagement/13.png'
import imVideo from '../assets/projects/SAP BTP interviewManagement/video.mov'
// Setu
import setu1 from '../assets/projects/Setu/1.png'
import setuVideo from '../assets/projects/Setu/video.mov'
// SAP BTP Outlook
import sap1 from '../assets/projects/SAP BTP Outlook/1.png'
import sap2 from '../assets/projects/SAP BTP Outlook/2.png'
import sap3 from '../assets/projects/SAP BTP Outlook/3.png'
import sap4 from '../assets/projects/SAP BTP Outlook/4.png'
import sap5 from '../assets/projects/SAP BTP Outlook/5.png'
import sap6 from '../assets/projects/SAP BTP Outlook/6.png'
import sap7 from '../assets/projects/SAP BTP Outlook/7.png'
import sap8 from '../assets/projects/SAP BTP Outlook/8.png'
import sapVideo from '../assets/projects/SAP BTP Outlook/video.mov'

const projects = [
  // ── 1. Shouta
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
    media: [
      { t: 'vid', src: shVideo },
      { t: 'img', src: sh1 },
      { t: 'img', src: sh2 },
      { t: 'img', src: sh3 },
      { t: 'img', src: sh4 },
      { t: 'img', src: sh5 },
      { t: 'img', src: sh6 },
      { t: 'img', src: sh7 },
    ],
  },
  // ── 2. Bconnect
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
    media: [
      { t: 'vid', src: bcVideo },
      { t: 'img', src: bc1 },
      { t: 'img', src: bc2 },
      { t: 'img', src: bc3 },
      { t: 'img', src: bc4 },
    ],
  },
  // ── 3. CyberStash
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
    media: [
      { t: 'vid', src: cdpVideo },
      { t: 'img', src: cdp1 },
      { t: 'img', src: cdp2 },
      { t: 'img', src: cdp3 },
      { t: 'img', src: cdp4 },
    ],
  },
  // ── 4. SAP BTP Outlook Integration
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
    media: [
      { t: 'vid', src: sapVideo },
      { t: 'img', src: sap1 },
      { t: 'img', src: sap2 },
      { t: 'img', src: sap3 },
      { t: 'img', src: sap4 },
      { t: 'img', src: sap5 },
      { t: 'img', src: sap6 },
      { t: 'img', src: sap7 },
      { t: 'img', src: sap8 },
    ],
  },
  // ── 5. SAP BTP Interview Management
  {
    id: 12,
    title: 'SAP BTP Interview Management',
    subtitle: 'AI-Powered Interview Pipeline',
    description:
      'End-to-end AI-driven interview management system built on SAP BTP. Candidates upload their resume, AI extracts key information and notifies the interviewer via email. The interviewer reviews and sends an acceptance or rejection mail — the candidate is automatically notified of their status.',
    gradient: 'from-sky-700 via-blue-600 to-indigo-600',
    icon: <FiUserCheck className="text-4xl" />,
    tags: ['SAP BTP', 'AI', 'Email Automation', 'Document Processing'],
    highlights: [
      'AI extracts candidate info from uploaded resume',
      'Automated email notification to interviewer on submission',
      'Interviewer triggers accept/reject mail to candidate',
    ],
    category: 'Enterprise',
    color: '#0ea5e9',
    media: [
      { t: 'vid', src: imVideo },
      { t: 'img', src: im1 },
      { t: 'img', src: im2 },
      { t: 'img', src: im3 },
      { t: 'img', src: im4 },
      { t: 'img', src: im5 },
      { t: 'img', src: im6 },
      { t: 'img', src: im7 },
      { t: 'img', src: im8 },
      { t: 'img', src: im9 },
      { t: 'img', src: im10 },
      { t: 'img', src: im11 },
      { t: 'img', src: im12 },
      { t: 'img', src: im13 },
    ],
  },
  // ── 6. AI Resume Builder
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
  // ── 7. Hashproma
  {
    id: 10,
    title: 'Hashproma',
    subtitle: 'Project Management Training Platform',
    description:
      'A full-stack training platform designed to help individuals become skilled project managers. Features online classes, article & blog publishing, and an integrated book purchase system — all in one responsive web application.',
    gradient: 'from-teal-600 via-emerald-500 to-cyan-500',
    icon: <FiUsers className="text-4xl" />,
    tags: ['React.js', 'Strapi', 'Tailwind CSS', 'MySQL'],
    highlights: [
      'Online class management with structured learning paths',
      'Article & blog upload system for knowledge sharing',
      'Integrated book purchase & e-commerce feature',
    ],
    category: 'Web',
    color: '#14b8a6',
    media: [
      { t: 'img', src: hp1 },
      { t: 'img', src: hp2 },
      { t: 'img', src: hp3 },
      { t: 'img', src: hp4 },
      { t: 'img', src: hp5 },
      { t: 'img', src: hp6 },
    ],
  },
  // ── 8. Setu
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
    media: [
      { t: 'vid', src: setuVideo },
      { t: 'img', src: setu1 },
    ],
  },
  // ── 9. SketchNote
  {
    id: 11,
    title: 'SketchNote',
    subtitle: 'Smart Note & Alert Management App',
    description:
      'Contributed as a Frontend Developer on SketchNote — a smart productivity application. Implemented a real-time word counter, a category-wise alert filtering system, and a PDF generation feature that allows users to export newly created alerts as downloadable documents.',
    gradient: 'from-slate-700 via-indigo-700 to-violet-700',
    icon: <FiEdit3 className="text-4xl" />,
    tags: ['React.js', 'Frontend', 'PDF Generation', 'TypeScript'],
    highlights: [
      'Real-time word counting feature for notes',
      'Category-wise alert filtering & management',
      'PDF export for new alerts with one click',
    ],
    category: 'Web',
    color: '#6366f1',
    role: 'Frontend Developer',
    media: [
      { t: 'img', src: sk1 },
      { t: 'img', src: sk2 },
      { t: 'img', src: sk3 },
      { t: 'img', src: sk4 },
    ],
  },
  // ── 10. SSEC College Website
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
    media: [
      { t: 'vid', src: ssecVideo },
      { t: 'img', src: ssec1 },
      { t: 'img', src: ssec2 },
      { t: 'img', src: ssec3 },
      { t: 'img', src: ssec4 },
    ],
  },
  // ── 11. Digital Notice Board
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
    media: [
      { t: 'vid', src: dbVideo },
    ],
  },
  // ── 12. Restaurant Management
  {
    id: 13,
    title: 'Restaurant Management',
    subtitle: 'Restaurant Web Application',
    description:
      'Responsive multi-page restaurant web app focused on user engagement. Features an interactive table reservation system, real-time custom theme switcher, digital menu with modal-based ordering, and a feedback & ratings module.',
    gradient: 'from-orange-500 via-red-500 to-rose-600',
    icon: <FiUmbrella className="text-4xl" />,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    highlights: [
      'Interactive reservation system with form validation',
      'Real-time custom theme switcher for color personalization',
      'Digital menu with modal ordering & feedback ratings',
    ],
    category: 'Web',
    color: '#f97316',
    media: [
      { t: 'vid', src: restVideo },
      { t: 'img', src: rest1 },
      { t: 'img', src: rest2 },
      { t: 'img', src: rest3 },
      { t: 'img', src: rest4 },
      { t: 'img', src: rest5 },
    ],
  },
  // ── 13. 6Meal Web (clone)
  {
    id: 9,
    title: '6Meal Web',
    subtitle: 'Subscription-Based Meal Delivery App',
    description:
      'Clone of a subscription-based healthy meal delivery web app serving Delhi NCR. Features a dynamic pricing engine, plan customization by duration & dietary preference, localStorage-persisted cart, SSR with Angular + Express, and a scroll-aware navbar.',
    gradient: 'from-rose-500 via-pink-500 to-orange-400',
    icon: <FiUmbrella className="text-4xl" />,
    tags: ['Angular 19', 'TailwindCSS', 'Angular Material', 'SSR'],
    highlights: [
      'Plan customization — duration, meals/day & dietary preference',
      'Dynamic pricing engine with real-time price calculation',
      'Cart with localStorage persistence + Angular SSR (Express)',
    ],
    category: 'Web',
    color: '#f43f5e',
    media: [
      { t: 'vid', src: mealVideo },
      { t: 'img', src: meal1 },
      { t: 'img', src: meal2 },
      { t: 'img', src: meal3 },
      { t: 'img', src: meal4 },
      { t: 'img', src: meal5 },
      { t: 'img', src: meal6 },
      { t: 'img', src: meal7 },
      { t: 'img', src: meal8 },
    ],
  },
]

function ProjectBanner({ project }) {
  const [idx, setIdx] = useState(0)
  const media = project.media || []

  if (!media.length) {
    return (
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
        <div className="text-white/80 group-hover:scale-110 transition-transform duration-500">{project.icon}</div>
        <div className="absolute top-3 right-3">
          <span className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium border border-white/20">{project.category}</span>
        </div>
      </div>
    )
  }

  const current = media[idx]
  const total = media.length
  const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + total) % total) }
  const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % total) }

  const blockContext = (e) => e.preventDefault()

  return (
    <div
      className="relative h-48 overflow-hidden bg-black group/banner select-none"
      onContextMenu={blockContext}
    >
      {current.t === 'img' ? (
        <>
          <img
            src={current.src}
            alt=""
            draggable="false"
            onContextMenu={blockContext}
            onDragStart={blockContext}
            className="w-full h-full object-cover object-top transition-opacity duration-300 pointer-events-none"
          />
          {/* transparent shield blocks right-click & drag on image */}
          <div className="absolute inset-0 z-[1]" onContextMenu={blockContext} />
        </>
      ) : (
        <video
          key={current.src}
          src={current.src}
          className="w-full h-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          controls
          controlsList="nodownload nofullscreen"
          disablePictureInPicture
          onContextMenu={blockContext}
        />
      )}

      {current.t === 'img' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-[2]" />
      )}

      {/* Prev / Next arrows */}
      {total > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/banner:opacity-100 transition-opacity z-20">
            <FiChevronLeft className="text-sm" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/banner:opacity-100 transition-opacity z-20">
            <FiChevronRight className="text-sm" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {total > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {media.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i) }}
              className={`rounded-full transition-all duration-200 ${
                i === idx ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      {/* Video badge */}
      {current.t === 'vid' && (
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-black/50 backdrop-blur-sm text-violet-300 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 border border-violet-400/30">
            <FiVideo className="text-[9px]" /> Demo
          </span>
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-3 right-3 z-20">
        <span className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium border border-white/20">{project.category}</span>
      </div>
    </div>
  )
}

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
              {/* Role badge */}
              {project.role && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    👩‍💻 {project.role}
                  </span>
                </div>
              )}

              {/* Banner */}
              <ProjectBanner project={project} />

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
