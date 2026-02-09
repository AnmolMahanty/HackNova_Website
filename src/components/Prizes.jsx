import './Prizes.css'

const trackPrizes = [
  { track: 'EdTech', prize: '₹10,000' },
  { track: 'AI / ML', prize: '₹10,000' },
  { track: 'CyberTech', prize: '₹10,000' },
  { track: 'Web / App Development', prize: '₹10,000' },
  { track: 'Open Innovation', prize: '₹10,000' }
]

const Prizes = () => {
  return (
    <section id="prizes" className="prizes section">
      <div className="container">
        <h2 className="section-title">Prizes & Awards</h2>
        
        <div className="prize-pool">
          <div className="pool-amount">₹60,000</div>
          <div className="pool-label">Total Prize Pool</div>
        </div>
        
        <div className="prizes-grid">
          {/* Track Winners */}
          <div className="prize-category">
            <div className="category-header">
              <div className="category-icon">🏆</div>
              <div>
                <h3>Track-Wise Winners</h3>
                <span className="category-amount">₹50,000 Guaranteed</span>
              </div>
            </div>
            
            <div className="prize-table">
              <div className="table-header">
                <span>Track</span>
                <span>Winner Prize</span>
              </div>
              {trackPrizes.map((item, index) => (
                <div key={index} className="table-row">
                  <span>{item.track}</span>
                  <span className="prize-amount">{item.prize}</span>
                </div>
              ))}
            </div>
            
            <div className="prize-note">
              <span className="note-badge">+</span>
              One winner per track • Runner-up receives certificate + trophy
            </div>
          </div>
          
          {/* Jury Awards */}
          <div className="prize-category jury">
            <div className="category-header">
              <div className="category-icon">⭐</div>
              <div>
                <h3>Cross-Track Jury Awards</h3>
                <span className="category-amount">Up to ₹10,000 • Discretionary</span>
              </div>
            </div>
            
            <div className="jury-prizes">
              <div className="jury-prize-card">
                <div className="jury-prize-label">Reserved Prize 1</div>
                <div className="jury-prize-amount">₹5,000</div>
              </div>
              <div className="jury-prize-card">
                <div className="jury-prize-label">Reserved Prize 2</div>
                <div className="jury-prize-amount">₹5,000</div>
              </div>
            </div>
            
            <div className="jury-disclaimer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>Jury may choose not to award these prizes if solutions do not meet expectations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
