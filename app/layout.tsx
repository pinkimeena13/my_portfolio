import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { profile, siteUrl } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const SITE_DESCRIPTION =
  'Full Stack Developer with 2+ years of experience building secure, scalable web and mobile applications with React, React Native, Node.js and Angular.'

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
    'React Developer',
    'React Native Developer',
    'Node.js Developer',
    'Angular Developer',
    'Next.js Developer',
    'Frontend Developer India',
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
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'NestJS',
    'Angular',
    'TypeScript',
    'MongoDB',
    'SAP BTP',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
