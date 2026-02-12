import { useState, useCallback } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import SectionDivider from './components/SectionDivider'
import Tracks from './components/Tracks'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Judges from './components/Judges'
import Sponsors from './components/Sponsors'
import Registration from './components/Registration'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import TerminalView from './components/TerminalView'
import useScrollReveal from './hooks/useScrollReveal'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('classic') // 'classic' | 'terminal'

  useScrollReveal()

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'classic' ? 'terminal' : 'classic')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Terminal view — completely separate UI
  if (!isLoading && theme === 'terminal') {
    return <TerminalView onToggleTheme={toggleTheme} />
  }

  // Classic view
  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`app ${isLoading ? 'app-loading' : 'app-loaded'}`}>
        <CustomCursor />

        {/* Background Layers */}
        <div className="cosmic-bg"></div>
        <div className="bg-image"></div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>
        
        <Navbar />

        {/* Theme Toggle — floating button */}
        <button className="floating-theme-toggle" onClick={toggleTheme} title="Switch to Terminal View">
          &gt;_ terminal
        </button>

        <main>
          <Hero />
          <Marquee />
          <About />
          <SectionDivider />
          <Tracks />
          <SectionDivider variant="purple" />
          <Timeline />
          <SectionDivider />
          <Prizes />
          <SectionDivider variant="purple" />
          <Judges />
          <SectionDivider />
          <Sponsors />
          <SectionDivider variant="purple" />
          <Registration />
          <SectionDivider />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
