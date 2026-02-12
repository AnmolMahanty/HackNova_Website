import { useState, useEffect, useRef } from 'react'
import './About.css'

const useCountUp = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!shouldStart) return
    
    let startTime = null
    const numEnd = parseInt(end.replace(/[^0-9]/g, '')) || 0
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numEnd))
      
      if (progress < 1) requestAnimationFrame(animate)
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, shouldStart])
  
  return count
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const prizeCount = useCountUp('50000', 2000, isVisible)
  const hoursCount = useCountUp('12', 1500, isVisible)
  const tracksCount = useCountUp('5', 1000, isVisible)

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title scroll-reveal" data-text="About HACKNOVA">About HACKNOVA</h2>
        
        {/* Hero description block */}
        <div className="about-hero scroll-reveal">
          <div className="about-hero-glow"></div>
          <div className="about-hero-content">
            <p className="about-lead">
              <span className="highlight">HACKNOVA</span> is a <span className="highlight">12-hour National Level Hybrid Hackathon</span> organized 
              by <span className="highlight">Technova Club</span>, Shivajirao S. Jondhle College of Engineering, Dombivli East — 
              aimed at empowering students to build innovative, real-world technology solutions through 
              creativity, collaboration, and problem-solving.
            </p>
            <p className="about-sub">
              The event brings together young innovators from across India to ideate, prototype, 
              and present impactful solutions across multiple emerging technology domains.
            </p>
          </div>
        </div>

        {/* Stats Cards with Animated Counters */}
        <div className="stats-grid scroll-reveal" ref={statsRef}>
          <div className="stat-card futuristic-card">
            <div className="scan-line"></div>
            <div className="stat-icon">💰</div>
            <div className="stat-number">₹{isVisible ? prizeCount.toLocaleString() : '0'}+</div>
            <div className="stat-text">Prize Pool</div>
          </div>
          
          <div className="stat-card futuristic-card">
            <div className="scan-line"></div>
            <div className="stat-icon">👥</div>
            <div className="stat-number">2-4</div>
            <div className="stat-text">Team Size</div>
          </div>
          
          <div className="stat-card futuristic-card">
            <div className="scan-line"></div>
            <div className="stat-icon">⏱️</div>
            <div className="stat-number">{isVisible ? hoursCount : '0'}</div>
            <div className="stat-text">Hours</div>
          </div>
          
          <div className="stat-card futuristic-card">
            <div className="scan-line"></div>
            <div className="stat-icon">🎯</div>
            <div className="stat-number">{isVisible ? tracksCount : '0'}</div>
            <div className="stat-text">Tracks</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
