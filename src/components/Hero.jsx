import './Hero.css'

const Hero = () => {
  const UNSTOP_URL = "https://unstop.com" // Replace with actual Unstop registration URL

  return (
    <section id="home" className="hero">
      <div className="hero-bg-elements">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hex-grid"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          National Level Hackathon
        </div>
        
        <h1 className="hero-title">
          <span className="title-hack">HACK</span>
          <span className="title-nova">NOVA</span>
        </h1>
        
        <p className="hero-subtitle">
          Technova Hackathon 2026
        </p>
        
        <div className="hero-info">
          <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>SSJCOE, Dombivli (E)</span>
          </div>
          <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>17 March 2026</span>
          </div>
          <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Hybrid Format</span>
          </div>
        </div>
        
        <div className="hero-cta">
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
            Register on Unstop
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn More
          </a>
        </div>
        
        <div className="hero-organizer">
          <span>Organized by</span>
          <strong>Technova Club</strong>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
