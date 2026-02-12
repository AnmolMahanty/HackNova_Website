import './Prizes.css'

const Prizes = () => {
  return (
    <section id="prizes" className="prizes section">
      <div className="container">
        <h2 className="section-title scroll-reveal" data-text="Prizes & Awards">Prizes & Awards</h2>
        
        {/* Prize Pool Banner */}
        <div className="prize-pool-display">
          <div className="pool-glow"></div>
          <span className="pool-label">TOTAL PRIZE POOL</span>
          <div className="pool-amount">
            <span className="currency">₹</span>
            <span className="value">50,000</span>
            <span className="plus">+</span>
          </div>
        </div>
        
        {/* Track Prizes */}
        <div className="prizes-grid">
          <div className="prize-card futuristic-card">
            <div className="prize-icon">📚</div>
            <h3>EdTech</h3>
            <div className="prize-amount">₹10,000</div>
          </div>
          
          <div className="prize-card futuristic-card">
            <div className="prize-icon">🤖</div>
            <h3>AI / ML</h3>
            <div className="prize-amount">₹10,000</div>
          </div>
          
          <div className="prize-card futuristic-card">
            <div className="prize-icon">🔐</div>
            <h3>CyberTech</h3>
            <div className="prize-amount">₹10,000</div>
          </div>
          
          <div className="prize-card futuristic-card">
            <div className="prize-icon">💻</div>
            <h3>Web / App</h3>
            <div className="prize-amount">₹10,000</div>
          </div>
          
          <div className="prize-card futuristic-card">
            <div className="prize-icon">💡</div>
            <h3>Open Innovation</h3>
            <div className="prize-amount">₹10,000</div>
          </div>
        </div>
        
        {/* Extra Rewards */}
        <div className="extra-rewards">
          <div className="reward-item">
            <span className="reward-icon">🏆</span>
            <span>Trophies for Winners</span>
          </div>
          <div className="reward-item">
            <span className="reward-icon">📜</span>
            <span>Certificates for All</span>
          </div>
          <div className="reward-item">
            <span className="reward-icon">🎁</span>
            <span>Swags & Goodies</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
