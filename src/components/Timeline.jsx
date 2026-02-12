import { useState, useEffect, useRef } from 'react'
import './Timeline.css'

const timelineEvents = [
  { date: '10 FEB', title: 'Registration Opens', icon: '🚀', desc: 'Sign up on Unstop' },
  { date: '24 FEB', title: 'Registration Closes', icon: '📝', desc: 'Final day to register' },
  { date: '1 MAR', title: 'Submission Deadline', icon: '📤', desc: 'Idea + PPT + Prototype' },
  { date: '7 MAR', title: 'Shortlist Announced', icon: '📋', desc: 'Top 30 teams selected' },
  { date: 'TBD', title: 'Mentorship Session', icon: '🎓', desc: 'Guidance from experts' },
  { date: '17 MAR', title: 'Grand Finale', icon: '🏆', desc: '12-hour offline hackathon', highlight: true }
]

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems(prev => new Set([...prev, index]))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -30px 0px' }
    )

    itemRefs.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" className="timeline section">
      <div className="container">
        <h2 className="section-title scroll-reveal" data-text="Event Timeline">Event Timeline</h2>
        
        <div className="timeline-vertical">
          <div className="timeline-line"></div>
          
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
                visibleItems.has(index) ? 'visible' : ''
              } ${event.highlight ? 'highlight' : ''}`}
            >
              {/* Connector dot on the line */}
              <div className="timeline-dot">
                <span className="dot-icon">{event.icon}</span>
              </div>
              
              {/* Content card */}
              <div className="timeline-card">
                <span className="timeline-date">{event.date}</span>
                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
