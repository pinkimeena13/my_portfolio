import BackgroundDecor from '@/components/layout/BackgroundDecor'
import CursorSpotlight from '@/components/layout/CursorSpotlight'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/layout/ScrollProgress'
import SmoothScroll from '@/components/layout/SmoothScroll'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Hero from '@/components/sections/Hero'
import Learning from '@/components/sections/Learning'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <BackgroundDecor />
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />

      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Learning />
        <Contact />
      </main>

      <Footer />
      <MobileCta />
    </>
  )
}
