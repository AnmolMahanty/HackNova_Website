import './Registration.css'

const Registration = () => {
  const UNSTOP_URL = "https://unstop.com" // Replace with actual Unstop registration URL

  return (
    <section id="register" className="registration section">
      <div className="container">
        <div className="registration-card">
          <div className="reg-glow reg-glow-1"></div>
          <div className="reg-glow reg-glow-2"></div>
          
          <div className="registration-content">
            <div className="reg-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            
            <h2 className="reg-title">Ready to Innovate?</h2>
            
            <p className="reg-description">
              Registrations are handled exclusively via <strong>Unstop</strong>. 
              Form your team, pick your track, and join the innovation revolution!
            </p>
            
            <a 
              href={UNSTOP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary reg-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Register on Unstop
            </a>
            
            <div className="reg-deadline">
              <span className="deadline-label">Registration Closes</span>
              <span className="deadline-date">24 February 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
