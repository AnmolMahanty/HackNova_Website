import './Marquee.css'

const stats = [
  '₹50,000+ PRIZES',
  '12 HOURS',
  '30 TEAMS',
  '5 TRACKS',
  '1 CAMPUS',
  'PAN INDIA',
  'OFFLINE FINALE',
  '₹10K PER TRACK',
]

const Marquee = () => {
  const repeatedStats = [...stats, ...stats]

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {repeatedStats.map((stat, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">◆</span>
            {stat}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
