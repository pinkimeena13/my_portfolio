/**
 * Single source of truth for every piece of portfolio content.
 * Sections read from here so copy changes never require touching JSX.
 */

/** Canonical origin. Override per-environment with NEXT_PUBLIC_SITE_URL. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pinkimeena.dev'

export const profile = {
  name: 'Pinki Meena',
  firstName: 'Pinki',
  role: 'Full Stack Developer',
  availability: 'Open to Opportunities',
  headline: {
    lead: "Hi, I'm",
    accent: 'Pinki',
    rest: 'I build web and mobile products with',
    emphasis: 'clarity.',
  },
  intro:
    'Full Stack Developer turning complex business requirements into secure, scalable web and mobile applications — from pixel-perfect React interfaces to production Java, Spring Boot and Node.js services.',
  location: 'India',
  email: 'pinkimeena52913@gmail.com',
  phone: '+91 9009679126',
  phoneHref: 'tel:+919009679126',
  github: 'https://github.com/pinkimeena13',
  githubHandle: 'pinkimeena13',
  linkedin: 'https://www.linkedin.com/in/pinki-meena-82776b25b/',
  linkedinHandle: 'pinki-meena-82776b25b',
  resume: '/resume/Pinki_Meena_Java_Developer_Resume.pdf',
  responseTime: 'Replies within 24 hours',
  workMode: 'Remote & hybrid friendly',
  engagement: 'Freelance & full-time',
} as const

export const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
  "Let's work together"
)}`

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
] as const

/** Floating glass stat cards around the hero portrait. */
export const heroStats = [
  { value: '2+', label: 'Years building' },
  { value: '12', label: 'Projects shipped' },
  { value: '5+', label: 'Clients served' },
  { value: '15+', label: 'Technologies' },
] as const

export const trustedBy = [
  'Singaji Software Solution',
  'Shouta · Australia',
  'CyberStash',
  'Setu AgriTech',
  'Bconnect',
] as const

/* ── Footer ──────────────────────────────────────────────────────────── */

export const footer = {
  tagline:
    'Building secure, scalable web and mobile products with clean code, great user experiences and a passion for solving real-world problems.',
  signature: 'Code for a better tomorrow',
  /** Stacked vertical mark down the left edge on very wide screens. */
  mantra: ['Learn', 'Build', 'Grow', 'Repeat'],
  aside: 'Good Ideas Take Time',
  values: ['Secure', 'Scalable', 'Modern', 'User Focused'],
} as const

/* ── About ───────────────────────────────────────────────────────────── */

export const aboutStatement =
  'I care about the craft behind the interface — structure that holds up, states that are handled, and performance you can feel. Most of my work sits where product intent meets engineering reality.'

export const aboutParagraphs = [
  'I started out building responsive interfaces with React and Angular, and quickly moved deeper into the stack — designing REST APIs, modelling data, and shipping features clients could actually rely on.',
  'Since then I have migrated a production React Native app for an Australian client, built NestJS and MongoDB backends for an AgriTech platform, and automated enterprise approval workflows across SAP BTP and Microsoft Outlook.',
]

export const aboutFacts = [
  { label: 'Based in', value: 'India' },
  { label: 'Experience', value: '2+ years' },
  { label: 'Focus', value: 'Java · MERN · MEAN' },
  { label: 'Currently', value: 'MCA @ RGPV Bhopal' },
] as const

export const timeline = [
  {
    year: '2024',
    title: 'Started Frontend Development',
    org: 'Singaji Software Solution',
    detail:
      'Joined as a Software Developer building production React and Angular interfaces, and moved into API integration and full-stack delivery.',
  },
  {
    year: '2025',
    title: 'Enterprise Dashboard Development',
    org: 'Singaji Software Solution',
    detail:
      'Shipped NestJS and MongoDB services for Setu AgriTech, an Angular cyber-defense portal, and automated SAP BTP approval workflows through Outlook Adaptive Cards.',
  },
  {
    year: '2026',
    title: 'Project Lead Responsibilities',
    org: 'Singaji Software Solution',
    detail:
      'Leading project delivery and code review across the team, owning the React Native migration for Shouta, and driving AI-assisted development practices.',
  },
] as const

/* ── Skills — category cards, no logos ───────────────────────────────── */

export const skillCategories = [
  {
    title: 'Frontend',
    summary: 'Accessible, responsive interfaces that hold up in production.',
    items: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Bootstrap'],
  },
  {
    title: 'Mobile',
    summary: 'Cross-platform apps with native-feeling performance.',
    items: ['React Native', 'iOS & Android delivery', 'Payment gateways', 'Push notifications', 'App store releases'],
  },
  {
    title: 'Backend & APIs',
    summary: 'Services designed around the data, not around the framework.',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Hibernate', 'Node.js', 'NestJS', 'Express', 'REST API design', 'GraphQL', 'Strapi CMS'],
  },
  {
    title: 'Data',
    summary: 'Schema design and queries that stay fast as data grows.',
    items: ['MongoDB', 'MySQL', 'Data modelling', 'Query optimisation', 'Migrations'],
  },
  {
    title: 'Enterprise & Cloud',
    summary: 'Workflow automation across enterprise platforms.',
    items: ['AWS', 'Docker', 'Maven', 'SAP BTP', 'Process automation', 'Outlook integration', 'Adaptive Cards', 'Vercel'],
  },
  {
    title: 'Practice & Tooling',
    summary: 'How the work actually gets shipped and reviewed.',
    items: ['Git & GitHub', 'Postman', 'JIRA', 'Claude Code', 'GitHub Copilot', 'Code review', 'Team collaboration', 'Project leadership', 'International clients'],
  },
] as const

/* ── Experience ──────────────────────────────────────────────────────── */

export const experience = [
  {
    role: 'Software Developer',
    company: 'Singaji Software Solution',
    period: '2024 — Present',
    location: 'India · Full Time',
    current: true,
    summary:
      'Own features end to end across web, mobile and enterprise platforms — from requirement calls with clients through to release.',
    achievements: [
      'Led the React Native migration for Shouta (v0.63 → v0.83), improving app stability by roughly 40% and unblocking new payment features.',
      'Built REST services in Java and Spring Boot, plus NestJS and MongoDB services for Setu AgriTech covering storage, livestock and water-resource management.',
      'Automated enterprise approvals by integrating SAP BTP with Microsoft Outlook via Adaptive Cards, keeping status in sync in real time.',
    ],
    stack: ['Java', 'Spring Boot', 'React.js', 'React Native', 'Angular', 'NestJS', 'Node.js', 'TypeScript', 'MongoDB', 'MySQL', 'SAP BTP'],
  },
] as const

/* ── Education ───────────────────────────────────────────────────────── */

export const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Indore International College',
    university: 'RGPV, Bhopal',
    period: '2025 — 2027',
    status: 'Pursuing',
    highlights: [
      'Advanced computer applications',
      'Software engineering principles',
      'Database management systems',
    ],
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Sant Singaji Institute of Science and Management',
    university: 'Vikram University',
    period: '2022 — 2025',
    status: 'Completed',
    highlights: [
      'Computer science fundamentals',
      'Programming foundations',
      'Web development basics',
    ],
  },
] as const

/* ── Projects ────────────────────────────────────────────────────────── */

const RELEASE = 'https://github.com/pinkimeena13/my_portfolio/releases/download/v1.0-media'

export type Media = { type: 'video' | 'image'; src: string }

export type Project = {
  slug: string
  title: string
  subtitle: string
  year: string
  category: 'Mobile' | 'Web' | 'Backend' | 'Enterprise'
  featured: boolean
  cover: string
  challenge: string
  role: string
  result: string
  stack: readonly string[]
  demo?: string
  github?: string
  media: readonly Media[]
}

export const projects: readonly Project[] = [
  {
    slug: 'shouta',
    title: 'Shouta',
    subtitle: 'Digital gifting app · Australia',
    year: '2025',
    category: 'Mobile',
    featured: true,
    cover: '/projects/shouta/1.png',
    challenge:
      'A production React Native app was stuck three years behind on v0.63 — blocking new payment features, breaking on newer devices, and increasingly unstable in the field.',
    role:
      'Owned the migration end to end: audited breaking changes, upgraded to v0.83 module by module, rebuilt the native payment integration, and coordinated release testing with the Australian client.',
    result:
      'Stability improved by roughly 40%, secure gift-payment transactions shipped, and the app was unblocked for ongoing feature work.',
    stack: ['React Native', 'TypeScript', 'Payment Gateways', 'iOS & Android'],
    media: [
      { type: 'video', src: `${RELEASE}/shouta-video.mp4` },
      { type: 'image', src: '/projects/shouta/1.png' },
      { type: 'image', src: '/projects/shouta/2.png' },
      { type: 'image', src: '/projects/shouta/3.png' },
      { type: 'image', src: '/projects/shouta/4.png' },
      { type: 'image', src: '/projects/shouta/5.png' },
      { type: 'image', src: '/projects/shouta/6.png' },
      { type: 'image', src: '/projects/shouta/7.png' },
    ],
  },
  {
    slug: 'sap-interview-management',
    title: 'SAP BTP Interview Management',
    subtitle: 'AI-powered hiring pipeline',
    year: '2025',
    category: 'Enterprise',
    featured: true,
    cover: '/projects/SAP BTP interviewManagement/1.png',
    challenge:
      'Interview coordination ran on manual email threads — resumes were re-read by hand, interviewers were notified late, and candidates were left without a clear status.',
    role:
      'Built the end-to-end flow on SAP BTP: resume upload and AI-driven extraction of candidate details, automated interviewer notification, and the accept/reject mail trigger back to the candidate.',
    result:
      'A single automated pipeline from application to decision — no manual resume parsing, and every candidate gets notified of their outcome.',
    stack: ['SAP BTP', 'AI Document Processing', 'Email Automation', 'Node.js'],
    media: [
      { type: 'video', src: `${RELEASE}/sap-interview-video.mp4` },
      ...Array.from({ length: 13 }, (_, i) => ({
        type: 'image' as const,
        src: `/projects/SAP BTP interviewManagement/${i + 1}.png`,
      })),
    ],
  },
  {
    slug: 'cyberstash',
    title: 'CyberStash',
    subtitle: 'Cyber defense portal',
    year: '2024',
    category: 'Web',
    featured: true,
    cover: '/projects/CDP/home.png',
    challenge:
      'Security teams needed threats surfaced and blocked across a mixed network estate, but detection and response lived in separate tools with manual handoffs between them.',
    role:
      'Built the Angular portal for threat and vulnerability detection, and wired third-party APIs so IP and domain blocking could be triggered directly from the dashboard.',
    result:
      'Detection and response moved into one console — automated IP/domain blocking across endpoints and network environments.',
    stack: ['Angular', 'Spring Boot', 'TypeScript', 'REST APIs', 'Cybersecurity'],
    media: [
      { type: 'video', src: `${RELEASE}/cdp-video.mp4` },
      { type: 'image', src: '/projects/CDP/home.png' },
      { type: 'image', src: '/projects/CDP/2.png' },
      { type: 'image', src: '/projects/CDP/3.png' },
      { type: 'image', src: '/projects/CDP/4.png' },
    ],
  },
  {
    slug: 'bconnect',
    title: 'Bconnect',
    subtitle: 'Lighting product platform',
    year: '2024',
    category: 'Web',
    featured: true,
    cover: '/projects/BCONNECT/HomePage.png',
    challenge:
      'The product catalogue was hardcoded — every new lighting product or datasheet meant a developer change and a redeploy.',
    role:
      'Rebuilt the site on a Spring Boot backend with API-driven routing, so pages, categories and datasheet downloads render from live content.',
    result:
      'The team publishes products themselves with real-time updates, and static content dependencies were removed entirely.',
    stack: ['React.js', 'Spring Boot', 'Tailwind CSS', 'MySQL'],
    media: [
      { type: 'video', src: `${RELEASE}/bconnect-video.mp4` },
      { type: 'image', src: '/projects/BCONNECT/HomePage.png' },
      { type: 'image', src: '/projects/BCONNECT/CategoryPage.png' },
      { type: 'image', src: '/projects/BCONNECT/ProductDetailPage.png' },
      { type: 'image', src: '/projects/BCONNECT/BconnectBackendContendManager.png' },
    ],
  },
  {
    slug: 'sap-outlook',
    title: 'SAP BTP Outlook Integration',
    subtitle: 'Enterprise process automation',
    year: '2025',
    category: 'Enterprise',
    featured: true,
    cover: '/projects/SAP BTP Outlook/1.png',
    challenge:
      'Approvals stalled because approvers had to leave their inbox, log into SAP, and find the right request before acting on it.',
    role:
      'Integrated SAP BTP with Microsoft Outlook using Adaptive Cards so approve/reject happens inside the email, and synced the action back to the BTP Control Tower.',
    result:
      'Approvals complete in one click from the inbox, with request status staying accurate in real time on both sides.',
    stack: ['SAP BTP', 'Microsoft Outlook', 'Adaptive Cards', 'Node.js'],
    media: [
      { type: 'video', src: `${RELEASE}/sap-outlook-video.mp4` },
      ...Array.from({ length: 8 }, (_, i) => ({
        type: 'image' as const,
        src: `/projects/SAP BTP Outlook/${i + 1}.png`,
      })),
    ],
  },
  {
    slug: 'hashproma',
    title: 'Hashproma',
    subtitle: 'Project management training platform',
    year: '2024',
    category: 'Web',
    featured: true,
    cover: '/projects/Hashproma/home.png',
    challenge:
      'Training, written content and book sales were scattered across separate tools, leaving learners without one place to actually progress.',
    role:
      'Built the full-stack platform — online class management with structured learning paths, an article and blog publishing system, and an integrated book purchase flow.',
    result:
      'One responsive platform covering the whole learner journey, from first class through to buying the course material.',
    stack: ['React.js', 'Spring Boot', 'Tailwind CSS', 'MySQL'],
    media: Array.from({ length: 6 }, (_, i) => ({
      type: 'image' as const,
      src: i === 0 ? '/projects/Hashproma/home.png' : `/projects/Hashproma/${i + 1}.png`,
    })),
  },
  {
    slug: 'setu',
    title: 'Setu',
    subtitle: 'Farmer-focused AgriTech platform',
    year: '2024',
    category: 'Backend',
    featured: false,
    cover: '/projects/Setu/1.png',
    challenge:
      'Farmers had no single digital record of storage, livestock and water resources — the data lived on paper and in memory.',
    role:
      'Designed and built the NestJS + MongoDB backend covering storage management, livestock tracking and water/soil resource records.',
    result:
      'A scalable service layer giving farmers structured digital access to the resources their productivity depends on.',
    stack: ['NestJS', 'MongoDB', 'Node.js', 'REST APIs'],
    media: [
      { type: 'video', src: `${RELEASE}/setu-video.mp4` },
      { type: 'image', src: '/projects/Setu/1.png' },
    ],
  },
  {
    slug: 'sketchnote',
    title: 'SketchNote',
    subtitle: 'Smart note & alert management',
    year: '2025',
    category: 'Web',
    featured: false,
    cover: '/projects/SketchNote/home.png',
    challenge:
      'Users were drowning in an unfiltered alert list and had no way to get their notes out of the product.',
    role:
      'Contributed as Frontend Developer — built the real-time word counter, category-wise alert filtering, and one-click PDF export for new alerts.',
    result:
      'Alerts became navigable by category and notes became shareable documents, without slowing the editor down.',
    stack: ['React.js', 'TypeScript', 'PDF Generation'],
    media: Array.from({ length: 4 }, (_, i) => ({
      type: 'image' as const,
      src: i === 0 ? '/projects/SketchNote/home.png' : `/projects/SketchNote/${i + 1}.png`,
    })),
  },
  {
    slug: '6meal',
    title: '6Meal Web',
    subtitle: 'Subscription meal delivery',
    year: '2025',
    category: 'Web',
    featured: false,
    cover: '/projects/6meal/1.png',
    challenge:
      'A subscription meal service needed pricing that reacted live to plan duration, meals per day and dietary preference — and a cart that survived a refresh.',
    role:
      'Built the Angular 19 app with a dynamic pricing engine, plan customisation, localStorage-persisted cart, server-side rendering via Express and a scroll-aware navbar.',
    result:
      'Customers see accurate pricing as they configure a plan, and the SSR setup keeps the marketing pages fast and indexable.',
    stack: ['Angular 19', 'Tailwind CSS', 'Angular Material', 'SSR'],
    media: [
      { type: 'video', src: `${RELEASE}/6meal-video.mp4` },
      ...Array.from({ length: 8 }, (_, i) => ({ type: 'image' as const, src: `/projects/6meal/${i + 1}.png` })),
    ],
  },
  {
    slug: 'restaurant',
    title: 'Restaurant Management',
    subtitle: 'Reservations & digital menu',
    year: '2023',
    category: 'Web',
    featured: false,
    cover: '/projects/restaurant/1.png',
    challenge:
      'A restaurant needed bookings, menu browsing and guest feedback handled on the site instead of over the phone.',
    role:
      'Built the multi-page app with a validated table reservation flow, a modal-based digital menu, a live theme switcher and a feedback & ratings module.',
    result:
      'Guests reserve tables, browse and order from the menu, and leave ratings without anyone picking up the phone.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    media: [
      { type: 'video', src: `${RELEASE}/restaurant-video.mp4` },
      ...Array.from({ length: 5 }, (_, i) => ({ type: 'image' as const, src: `/projects/restaurant/${i + 1}.png` })),
    ],
  },
  {
    slug: 'ssec',
    title: 'SSEC College Website',
    subtitle: 'Educational institution site',
    year: '2023',
    category: 'Web',
    featured: false,
    cover: '/projects/SSEC/home.png',
    challenge:
      'The college had no proper digital presence — prospective students could not find course or admission information online.',
    role:
      'Built the fully responsive site with structured Home, Courses, About, Admission and Contact sections.',
    result:
      'A complete institutional web presence that works across devices and made course information publicly accessible.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    media: [
      { type: 'video', src: `${RELEASE}/ssec-video.mp4` },
      { type: 'image', src: '/projects/SSEC/home.png' },
      { type: 'image', src: '/projects/SSEC/courses.png' },
      { type: 'image', src: '/projects/SSEC/about.png' },
      { type: 'image', src: '/projects/SSEC/admission.png' },
    ],
  },
  {
    slug: 'digital-notice-board',
    title: 'Digital Notice Board',
    subtitle: 'Smart notice management',
    year: '2023',
    category: 'Web',
    featured: false,
    cover: '',
    challenge:
      'Campus notices lived on paper boards — slow to update, easy to miss, and impossible to track.',
    role:
      'Built the Angular app for creating and managing digital notices, with preview templates, customisable themes and real-time updates.',
    result:
      'Paper boards were fully replaced by a digital system staff can update instantly.',
    stack: ['Angular', 'TypeScript'],
    media: [{ type: 'video', src: `${RELEASE}/digital-bord-video.mp4` }],
  },
]

export const projectFilters = ['All', 'Web', 'Mobile', 'Enterprise', 'Backend'] as const

/* ── Learning ────────────────────────────────────────────────────────── */

export const learning = [
  {
    title: 'System Design',
    pathway: 'Learning pathway',
    progress: 100,
    eta: 'Completed',
    tone: 'sky',
    description:
      'Designing systems that stay correct and fast as they grow — the data model, the caching, and the trade-off behind each choice.',
    topics: [
      { name: 'Scalability & load balancing', done: true },
      { name: 'Caching strategies & Redis', done: true },
      { name: 'Database design & indexing', done: true },
      { name: 'Message queues & event-driven design', done: true },
      { name: 'Microservice patterns', done: true },
      { name: 'High-availability architecture', done: true },
    ],
    tools: ['Redis', 'Kafka', 'Docker', 'AWS'],
  },
  {
    title: 'Artificial Intelligence',
    pathway: 'Learning pathway',
    progress: 35,
    eta: 'In progress',
    tone: 'lavender',
    description:
      'Building toward AI features I can put in production — not demos. Prompt design, API integration, then the retrieval and agent layers underneath.',
    topics: [
      { name: 'Prompt engineering & LLMs', done: true },
      { name: 'OpenAI / Gemini API integration', done: true },
      { name: 'AI-powered app development', done: false },
      { name: 'Machine learning basics (Python)', done: false },
      { name: 'LangChain & RAG systems', done: false },
      { name: 'AI agents & automation', done: false },
    ],
    tools: ['OpenAI API', 'Gemini', 'LangChain', 'Python'],
  },
  {
    title: 'SAP BTP & Enterprise',
    pathway: 'Learning pathway',
    progress: 60,
    eta: 'In progress',
    tone: 'sky',
    description:
      'Deepening enterprise platform expertise — process automation, integration patterns, and the certification to back it up.',
    topics: [
      { name: 'SAP BTP fundamentals', done: true },
      { name: 'Process automation & workflows', done: true },
      { name: 'Outlook integration & Adaptive Cards', done: true },
      { name: 'SAP CAPM (Cloud Application Programming)', done: false },
      { name: 'SAP Integration Suite', done: false },
      { name: 'SAP BTP certification', done: false },
    ],
    tools: ['SAP BTP', 'SAP CAPM', 'SAP Fiori', 'Adaptive Cards'],
  },
] as const
