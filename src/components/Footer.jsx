import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-row">
              <img 
                src="/technova_logo_without_name_and_Background.png" 
                alt="Technova" 
                className="footer-logo"
              />
              <div className="brand-info">
                <span className="brand-title">TECHNOVA CLUB</span>
                <span className="brand-sub">Presents HACKNOVA 2026</span>
              </div>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#tracks">Tracks</a>
              <a href="#prizes">Prizes</a>
              <a href="#faq">FAQ</a>
            </div>
            
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:technova24@gmail.com">📧 technova24@gmail.com</a>
              <a href="https://instagram.com/technova_club" target="_blank" rel="noopener noreferrer">📷 @technova_club</a>
            </div>
            
            <div className="footer-col">
              <h4>Venue</h4>
              <p>SSJCOE, Dombivli (E)</p>
              <p>Maharashtra, India</p>
            </div>
          </div>
        </div>
        
        {/* Social Row */}
        <div className="footer-social">
          <a href="https://instagram.com/technova_club" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="mailto:technova24@gmail.com" className="social-link" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>
          </a>
          <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Code of Conduct">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </a>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-bottom-content">
            <span>© 2026 HACKNOVA • Technova Club, SSJCOE</span>
            <span className="made-with">Made with <span className="heart">💜</span> by Technova Team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
