import './Judges.css'

const judges = [
  { name: 'To Be Announced', role: 'Judge', org: 'Industry Expert', avatar: '👨‍💻' },
  { name: 'To Be Announced', role: 'Mentor', org: 'Tech Lead', avatar: '👩‍💻' },
  { name: 'To Be Announced', role: 'Judge', org: 'Startup Founder', avatar: '👨‍🔬' },
  { name: 'To Be Announced', role: 'Mentor', org: 'AI Researcher', avatar: '👩‍🔬' },
]

const Judges = () => {
  return (
    <section id="judges" className="judges section">
      <div className="container">
        <h2 className="section-title scroll-reveal" data-text="Judges & Mentors">Judges & Mentors</h2>
        <p className="judges-subtitle scroll-reveal">
          Industry experts guiding your innovation journey
        </p>
        
        <div className="judges-grid">
          {judges.map((judge, index) => (
            <div key={index} className="judge-card scroll-reveal">
              <div className="judge-avatar-ring">
                <div className="judge-avatar">
                  <span>{judge.avatar}</span>
                </div>
              </div>
              <h3 className="judge-name">{judge.name}</h3>
              <span className="judge-role">{judge.role}</span>
              <span className="judge-org">{judge.org}</span>
            </div>
          ))}
        </div>
        
        <p className="judges-cta scroll-reveal">
          🎤 Full lineup announced soon. Stay tuned!
        </p>
      </div>
    </section>
  )
}

export default Judges
