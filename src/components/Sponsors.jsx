import './Sponsors.css'

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsors section">
      <div className="container">
        <h2 className="section-title scroll-reveal" data-text="Our Sponsors">Our Sponsors</h2>
        
        {/* Sponsor Tiers */}
        <div className="sponsor-tiers">
          {/* Title Sponsor */}
          <div className="sponsor-tier scroll-reveal">
            <h3 className="tier-label tier-title">✦ Title Sponsor</h3>
            <div className="tier-slots">
              <div className="sponsor-slot premium">
                <span className="slot-text">Coming Soon</span>
                <div className="slot-shimmer"></div>
              </div>
            </div>
          </div>
          
          {/* Gold Sponsors */}
          <div className="sponsor-tier scroll-reveal">
            <h3 className="tier-label tier-gold">Gold Sponsors</h3>
            <div className="tier-slots">
              <div className="sponsor-slot gold">
                <span className="slot-text">Coming Soon</span>
              </div>
              <div className="sponsor-slot gold">
                <span className="slot-text">Coming Soon</span>
              </div>
            </div>
          </div>
          
          {/* Silver Sponsors */}
          <div className="sponsor-tier scroll-reveal">
            <h3 className="tier-label tier-silver">Silver Sponsors</h3>
            <div className="tier-slots">
              <div className="sponsor-slot silver">
                <span className="slot-text">Coming Soon</span>
              </div>
              <div className="sponsor-slot silver">
                <span className="slot-text">Coming Soon</span>
              </div>
              <div className="sponsor-slot silver">
                <span className="slot-text">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Card */}
        <div className="sponsors-cta futuristic-card scroll-reveal">
          <div className="cta-glow"></div>
          <div className="cta-icon">🤝</div>
          <h3>Partner With Us</h3>
          <p>
            Support innovation and connect with talented developers from across India.
          </p>
          <a 
            href="mailto:technova24@gmail.com?subject=Sponsorship%20Inquiry%20-%20HACKNOVA%202026" 
            className="btn btn-secondary"
          >
            Contact for Sponsorship
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
