import type { Metadata, Viewport } from 'next'
import { Caveat, Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { profile, siteUrl } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '500'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const SITE_DESCRIPTION =
  'Full Stack Developer building secure, scalable web and mobile applications with Java, Spring Boot, React, React Native and Node.js.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Pinki Meena',
    'Full Stack Developer',
    'Java Developer',
    'Spring Boot Developer',
    'React Developer',
    'React Native Developer',
    'Node.js Developer',
    'Angular Developer',
    'Full Stack Developer India',
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: `${profile.name} — ${profile.role}`,
    description: SITE_DESCRIPTION,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: '/images/portrait-smiling.jpg', width: 1400, height: 1400, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description: SITE_DESCRIPTION,
    images: ['/images/portrait-smiling.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFDF8',
  width: 'device-width',
  initialScale: 1,
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  description: SITE_DESCRIPTION,
  email: profile.email,
  image: '/images/portrait-smiling.jpg',
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'NestJS',
    'Angular',
    'TypeScript',
    'MySQL',
    'MongoDB',
    'SAP BTP',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      {/* Browser extensions (Grammarly, dark-mode tools) write attributes onto
          <body> before hydration. This suppresses only <body>'s own attribute
          diff — mismatches in the tree below still surface normally. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
