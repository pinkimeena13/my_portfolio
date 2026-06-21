import { Suspense, lazy } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load everything below the fold
const About         = lazy(() => import('./components/About'))
const AreaOfInterest = lazy(() => import('./components/AreaOfInterest'))
const Skills        = lazy(() => import('./components/Skills'))
// const AITools       = lazy(() => import('./components/AITools'))
const Experience = lazy(() => import('./components/Experience'))
const Projects   = lazy(() => import('./components/Projects'))
const LearningPlan = lazy(() => import('./components/LearningPlan'))
const Education  = lazy(() => import('./components/Education'))
const Contact    = lazy(() => import('./components/Contact'))
const Footer     = lazy(() => import('./components/Footer'))

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen themed-bg" style={{ transition: 'background 0.4s' }}>
        <div className="aurora" aria-hidden="true">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
        <div className="grid-pattern fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Suspense fallback={null}>
            <About />
            <AreaOfInterest />
            <Skills />
            {/* <AITools /> */}
            <Experience />
            <Projects />
            <LearningPlan />
            <Education />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
