import './Timeline.css'

const timelineEvents = [
  {
    date: '10 Feb',
    title: 'Registration Opens',
    description: 'Start forming your teams and register on Unstop',
    status: 'upcoming'
  },
  {
    date: '24 Feb',
    title: 'Registration Closes',
    description: 'Last date to register your team',
    status: 'upcoming'
  },
  {
    date: '1 March',
    title: 'Submission Deadline',
    description: 'Submit your idea, PPT, and prototype',
    status: 'upcoming'
  },
  {
    date: '7 March',
    title: 'Shortlist Announced',
    description: 'Top 30 teams announced & project building begins',
    status: 'upcoming'
  },
  {
    date: 'TBD',
    title: 'Mentorship Session',
    description: 'Guidance from industry experts',
    status: 'upcoming'
  },
  {
    date: '17 March',
    title: 'Offline Hackathon',
    description: '12-hour grand finale at SSJCOE campus',
    status: 'highlight'
  }
]

const Timeline = () => {
  return (
    <section id="timeline" className="timeline section">
      <div className="container">
        <h2 className="section-title">Event Timeline</h2>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item ${event.status}`}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{event.date}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
