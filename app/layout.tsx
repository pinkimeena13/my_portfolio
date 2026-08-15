import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pinki Meena — Full Stack Developer | React, Node.js & Mobile Apps',
  description: 'Full Stack Developer with 2.6+ years of experience building secure, scalable web and mobile applications. Expert in React, Node.js, Angular, and modern JavaScript.',
  keywords: 'Pinki Meena, Full Stack Developer, React Developer, Node.js Developer, Angular Developer, Mobile App Developer, JavaScript Developer, Web Developer India, Software Engineer',
  authors: [{ name: 'Pinki Meena' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Pinki Meena — Full Stack Developer',
    description: 'Full Stack Developer building secure, scalable web & mobile applications with React, Node.js, and Angular. 2.6+ years of experience.',
    siteName: 'Pinki Meena Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Pinki Meena — Full Stack Developer',
    description: 'Full Stack Developer building secure, scalable web & mobile applications with React, Node.js, and Angular.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Pinki Meena',
              jobTitle: 'Full Stack Developer',
              description: 'Full Stack Developer with 2.6+ years of experience specializing in React, Node.js, Angular, and mobile applications.',
              email: 'pinkimeena52913@gmail.com',
              sameAs: [
                'https://github.com/pinkimeena13',
                'https://www.linkedin.com/in/pinki-meena-82776b25b/',
              ],
              knowsAbout: [
                'React',
                'Node.js',
                'Angular',
                'JavaScript',
                'TypeScript',
                'Mobile App Development',
                'Full Stack Development',
                'Web Security',
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
