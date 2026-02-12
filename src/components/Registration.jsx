import './Registration.css'

const steps = [
  { number: '01', title: 'Register', desc: 'Sign up on Unstop with your team', icon: '📝' },
  { number: '02', title: 'Submit', desc: 'Upload idea, PPT & prototype', icon: '📤' },
  { number: '03', title: 'Compete', desc: '12-hour offline finale at SSJCOE', icon: '🏆' },
]

const Registration = () => {
  const UNSTOP_URL = "https://unstop.com"

  return (
    <section id="register" className="registration section">
      <div className="container">
        {/* 3-Step Flow */}
        <div className="steps-flow scroll-reveal">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <span className="step-icon">{step.icon}</span>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
              {index < steps.length - 1 && <div className="step-connector">→</div>}
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="register-card scroll-reveal">
          <div className="register-bg-elements">
            <div className="bg-hex hex-1"></div>
            <div className="bg-hex hex-2"></div>
          </div>
          
          <div className="register-content">
            <span className="register-badge">🚀 REGISTRATIONS OPEN</span>
            <h2>Ready to Hack?</h2>
            <p>
              Join HACKNOVA 2026 and showcase your innovation. 
              Register exclusively on <span className="highlight">Unstop</span>.
            </p>
            
            <a 
              href={UNSTOP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary register-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Register on Unstop
            </a>
            
            <div className="deadline-info">
              <span className="deadline-label">Deadline</span>
              <span className="deadline-date">24 February 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
