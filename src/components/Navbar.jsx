import { useState, useEffect, useCallback } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#faq', label: 'FAQ' },
    { href: '#register', label: 'Register' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0
      setScrollProgress(progress)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="navbar-brand">
            <img 
              src="/technova_logo_without_name_and_Background.png" 
              alt="Technova" 
              className="brand-logo"
            />
            <div className="brand-text">
              <span className="brand-name">TECHNOVA</span>
              <span className="brand-sub">CLUB</span>
            </div>
          </a>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
