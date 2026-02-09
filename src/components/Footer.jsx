import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">HACK</span>
              <span className="logo-accent">NOVA</span>
            </div>
            <p className="footer-tagline">
              National Level Student Innovation Hackathon
            </p>
            <div className="footer-date">
              <span>17 March 2026</span>
            </div>
          </div>
          
          {/* Organizer */}
          <div className="footer-section">
            <h4>Organizer</h4>
            <p className="organizer-name">Technova Club</p>
            <p className="college-name">
              Shivajirao S. Jondhale College of Engineering
            </p>
            <p className="college-location">Dombivli (E), Maharashtra</p>
          </div>
          
          {/* Contact */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-links">
              <a href="mailto:technova24@gmail.com" className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                technova24@gmail.com
              </a>
              <a href="https://instagram.com/technova_club" target="_blank" rel="noopener noreferrer" className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                @technova_club
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#about">About</a>
              <a href="#format">Format</a>
              <a href="#tracks">Tracks</a>
              <a href="#prizes">Prizes</a>
              <a href="#register">Register</a>
            </nav>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2026 HACKNOVA. Organized by Technova Club, SSJCOE.
            </p>
            <p className="made-with">
              Made with 💙 for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
