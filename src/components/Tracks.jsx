import './Tracks.css'

const tracks = [
  {
    id: 'edtech',
    name: 'EdTech',
    description: 'Education, learning, and skill development solutions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    color: 'cyan'
  },
  {
    id: 'aiml',
    name: 'AI / ML',
    description: 'Artificial Intelligence & Machine Learning applications',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
        <circle cx="7.5" cy="14.5" r="1.5"></circle>
        <circle cx="16.5" cy="14.5" r="1.5"></circle>
      </svg>
    ),
    color: 'purple'
  },
  {
    id: 'cybertech',
    name: 'CyberTech',
    description: 'Cybersecurity, privacy, and digital safety',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
    color: 'orange'
  },
  {
    id: 'webapp',
    name: 'Web / App Dev',
    description: 'Scalable web & mobile products',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="12" y1="2" x2="12" y2="22"></line>
      </svg>
    ),
    color: 'cyan'
  },
  {
    id: 'open',
    name: 'Open Innovation',
    description: 'Any innovative idea beyond listed tracks',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6"></path>
        <path d="M12 17v6"></path>
        <path d="M4.22 4.22l4.24 4.24"></path>
        <path d="M15.54 15.54l4.24 4.24"></path>
        <path d="M1 12h6"></path>
        <path d="M17 12h6"></path>
        <path d="M4.22 19.78l4.24-4.24"></path>
        <path d="M15.54 8.46l4.24-4.24"></path>
      </svg>
    ),
    color: 'purple'
  }
]

const Tracks = () => {
  return (
    <section id="tracks" className="tracks section">
      <div className="container">
        <h2 className="section-title">Technology Tracks</h2>
        
        <div className="tracks-grid">
          {tracks.map((track) => (
            <div key={track.id} className={`track-card track-${track.color}`}>
              <div className="track-icon">
                {track.icon}
              </div>
              <h3 className="track-name">{track.name}</h3>
              <p className="track-desc">{track.description}</p>
            </div>
          ))}
        </div>
        
        <div className="tracks-note">
          <div className="note-icon">💡</div>
          <div className="note-content">
            <strong>No predefined problem statements.</strong>
            <p>Teams must identify real-world problems and propose original solutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracks
