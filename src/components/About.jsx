import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About HACKNOVA</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              HACKNOVA is a <span className="highlight">Pan-India student innovation hackathon</span> that 
              brings together the brightest minds from across the nation to solve real-world challenges.
            </p>
            
            <p>
              Focused on fostering creativity, collaboration, and technical excellence, HACKNOVA provides 
              a platform for students across all disciplines and institutions to showcase their innovative 
              solutions and transform ideas into impactful projects.
            </p>
            
            <p>
              Whether you're a seasoned developer or just starting your coding journey, HACKNOVA welcomes 
              all passionate problem-solvers ready to make a difference.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-value">2-4</div>
              <div className="stat-label">Team Members</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="stat-value">12</div>
              <div className="stat-label">Hour Final</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="stat-value">5</div>
              <div className="stat-label">Tech Tracks</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="stat-value">₹60K</div>
              <div className="stat-label">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
