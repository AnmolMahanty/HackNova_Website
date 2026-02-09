import './Format.css'

const Format = () => {
  return (
    <section id="format" className="format section">
      <div className="container">
        <h2 className="section-title">Hackathon Format</h2>
        
        <div className="format-intro">
          <p>HACKNOVA follows a <span className="highlight">two-phase hybrid structure</span> — 
          an online ideation round followed by an intensive offline finale.</p>
        </div>
        
        <div className="format-phases">
          {/* Phase 1 */}
          <div className="phase-card phase-online">
            <div className="phase-header">
              <div className="phase-number">01</div>
              <div className="phase-badge online">Online Round</div>
            </div>
            
            <h3 className="phase-title">Idea & Prototype Submission</h3>
            
            <ul className="phase-details">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span><strong>Duration:</strong> 2–3 weeks registration period</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span><strong>Team Size:</strong> 2–4 members</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span><strong>Track Selection:</strong> Mandatory during registration</span>
              </li>
            </ul>
            
            <div className="submission-box">
              <h4>Submission Requirements</h4>
              <div className="submission-items">
                <div className="submission-item">
                  <span className="item-icon">📝</span>
                  <span>Idea Brief</span>
                </div>
                <div className="submission-item">
                  <span className="item-icon">📊</span>
                  <span>Presentation (PPT)</span>
                </div>
                <div className="submission-item">
                  <span className="item-icon">🔗</span>
                  <span>Prototype / Demo Link</span>
                </div>
              </div>
            </div>
            
            <div className="phase-outcome">
              <strong>Outcome:</strong> Top 30 teams shortlisted (track-wise) based on 
              innovation, feasibility, and relevance.
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="phase-card phase-offline">
            <div className="phase-header">
              <div className="phase-number">02</div>
              <div className="phase-badge offline">Offline Final</div>
            </div>
            
            <h3 className="phase-title">On-Campus Grand Finale</h3>
            
            <ul className="phase-details">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span><strong>Venue:</strong> SSJCOE Campus, Dombivli (E)</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span><strong>Duration:</strong> 12-hour on-campus hackathon</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span><strong>Format:</strong> Final solution presentation + live demo</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                <span><strong>Evaluation:</strong> Expert jury panel</span>
              </li>
            </ul>
            
            <div className="phase-highlight">
              <div className="highlight-icon">🏆</div>
              <div className="highlight-text">
                Winners announced on the same day with live awards ceremony!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Format
