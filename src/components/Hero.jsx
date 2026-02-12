import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const UNSTOP_URL = "https://unstop.com" // Replace with actual URL
  const EVENT_DATE = new Date('2026-03-17T09:00:00+05:30')

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const diff = EVENT_DATE - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Floating Particles */}
      <div className="particles">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          ></div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="hero-bg-elements">
        <div className="circuit-line line-1"></div>
        <div className="circuit-line line-2"></div>
        <div className="circuit-line line-3"></div>
      </div>

      <div className="container hero-content">
        {/* Technova Presents */}
        <div className="presents-wrapper scroll-reveal">
          <div className="technova-badge">
            <img 
              src="/technova_logo_without_name_and_Background.png" 
              alt="Technova" 
              className="technova-logo"
            />
            <span className="technova-text">TECHNOVA CLUB</span>
          </div>
          <span className="presents-text">PRESENTS</span>
        </div>
        
        {/* Main Title with Glitch */}
        <div className="hero-title-wrapper scroll-reveal">
          <h1 className="hero-title glitch" data-text="HACKNOVA">
            <span className="title-line">
              <span className="letter" style={{animationDelay: '0.1s'}}>H</span>
              <span className="letter" style={{animationDelay: '0.15s'}}>A</span>
              <span className="letter" style={{animationDelay: '0.2s'}}>C</span>
              <span className="letter" style={{animationDelay: '0.25s'}}>K</span>
              <span className="letter accent" style={{animationDelay: '0.3s'}}>N</span>
              <span className="letter accent" style={{animationDelay: '0.35s'}}>O</span>
              <span className="letter accent" style={{animationDelay: '0.4s'}}>V</span>
              <span className="letter accent" style={{animationDelay: '0.4s'}}>A</span>
            </span>
          </h1>
          <div className="title-underline"></div>
        </div>
        
        {/* Typewriter Tagline */}
        <p className="hero-tagline typewriter scroll-reveal">NATIONAL LEVEL HACKATHON</p>
        
        {/* Countdown Timer */}
        <div className="countdown scroll-reveal">
          <div className="countdown-item">
            <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="countdown-label">DAYS</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">HOURS</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">MINS</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">SECS</span>
          </div>
        </div>

        {/* Event Stats */}
        <div className="hero-stats scroll-reveal">
          <div className="stat-item">
            <span className="stat-value">₹50K+</span>
            <span className="stat-label">Prize Pool</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">17 MAR</span>
            <span className="stat-label">Event Date</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">12 HRS</span>
            <span className="stat-label">Hackathon</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="hero-cta scroll-reveal">
          <a 
            href={UNSTOP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Register Now
          </a>
          <a href="#about" className="btn btn-secondary">
            Explore More
          </a>
        </div>
        
        {/* Venue */}
        <div className="venue-badge scroll-reveal">
          <span className="venue-icon">📍</span>
          <span>SSJCOE Campus, Dombivli (E)</span>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
