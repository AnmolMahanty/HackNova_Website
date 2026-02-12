import './Tracks.css'

const tracks = [
  {
    id: 'edtech',
    name: 'EdTech',
    description: 'Education & Learning Solutions',
    longDesc: 'Revolutionize how students learn with AI tutors, smart classrooms, gamified platforms, or accessible education tools.',
    icon: '📚',
    color: 'purple'
  },
  {
    id: 'aiml',
    name: 'AI / ML',
    description: 'Artificial Intelligence & ML',
    longDesc: 'Build intelligent systems — from NLP to computer vision, recommendation engines to generative AI applications.',
    icon: '🤖',
    color: 'cyan'
  },
  {
    id: 'cybertech',
    name: 'CyberTech',
    description: 'Cybersecurity & Privacy',
    longDesc: 'Tackle phishing detection, encryption tools, vulnerability scanners, or privacy-first authentication systems.',
    icon: '🔐',
    color: 'pink'
  },
  {
    id: 'webapp',
    name: 'Web / App',
    description: 'Scalable Digital Products',
    longDesc: 'Create full-stack solutions — SaaS platforms, mobile apps, real-time collaboration tools, or developer utilities.',
    icon: '💻',
    color: 'orange'
  },
  {
    id: 'open',
    name: 'Open Innovation',
    description: 'Beyond Listed Tracks',
    longDesc: 'Got an idea that doesn\'t fit the tracks? We love bold thinking. Build anything that solves a real-world problem.',
    icon: '💡',
    color: 'gradient'
  }
]

const Tracks = () => {
  return (
    <section id="tracks" className="tracks section">
      <div className="container">
        <h2 className="section-title scroll-reveal" data-text="Technology Tracks">Technology Tracks</h2>
        
        <div className="tracks-showcase">
          {tracks.map((track) => (
            <div key={track.id} className={`track-tile futuristic-card color-${track.color} scroll-reveal`}>
              <div className="track-front">
                <div className="track-icon-wrapper">
                  <span className="track-icon">{track.icon}</span>
                </div>
                <h3 className="track-name">{track.name}</h3>
                <p className="track-desc">{track.description}</p>
                <div className="track-prize">
                  <span>🏆</span>
                  <span>₹10,000</span>
                </div>
              </div>
              <div className="track-back">
                <span className="track-back-icon">{track.icon}</span>
                <p className="track-long-desc">{track.longDesc}</p>
                <span className="track-explore">Hover to explore ↗</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="tracks-note scroll-reveal">
          <div className="note-glow"></div>
          <span className="note-icon">⚡</span>
          <div className="note-text">
            <strong>No predefined problems.</strong>
            <span>Identify real-world challenges and build innovative solutions.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracks
