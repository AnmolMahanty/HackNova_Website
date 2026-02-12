import './Format.css'

const Format = () => {
  return (
    <section id="format" className="format section">
      <div className="container">
        <h2 className="section-title">Hackathon Format</h2>
        
        <div className="format-timeline">
          {/* Phase 1 */}
          <div className="phase-card futuristic-card">
            <div className="phase-indicator">
              <span className="phase-num">01</span>
              <div className="phase-line"></div>
            </div>
            <div className="phase-content">
              <span className="phase-type online">ONLINE ROUND</span>
              <h3>Idea & Prototype Submission</h3>
              <div className="phase-details">
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span>2-3 weeks registration</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">👥</span>
                  <span>2-4 team members</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📝</span>
                  <span>Idea + PPT + Prototype</span>
                </div>
              </div>
              <div className="phase-result">
                <span className="result-icon">✨</span>
                <span>Top 30 teams shortlisted</span>
              </div>
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="phase-card futuristic-card featured">
            <div className="phase-indicator">
              <span className="phase-num">02</span>
            </div>
            <div className="phase-content">
              <span className="phase-type offline">OFFLINE FINALE</span>
              <h3>12-Hour Hackathon</h3>
              <div className="phase-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>SSJCOE Campus, Dombivli</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">⏱️</span>
                  <span>12 hours of coding</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🎤</span>
                  <span>Live demo & presentation</span>
                </div>
              </div>
              <div className="phase-result finale">
                <span className="result-icon">🏆</span>
                <span>Winners announced live!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Format
