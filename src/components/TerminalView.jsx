import { useState, useEffect, useRef, useCallback } from 'react'
import './TerminalView.css'

/* ── tiny typing hook ── */
const useTyping = (text, speed = 30, startDelay = 0, shouldStart = true) => {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!shouldStart) return
    setDisplayed('')
    setDone(false)
    let i = 0
    const delay = setTimeout(() => {
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(iv); setDone(true) }
      }, speed)
      return () => clearInterval(iv)
    }, startDelay)
    return () => clearTimeout(delay)
  }, [text, speed, startDelay, shouldStart])

  return { displayed, done }
}

/* ── Terminal Window wrapper ── */
const TermWindow = ({ title, children, delay = 0 }) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect() }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div className={`term-window ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="term-titlebar">
        <span className="term-dot red"></span>
        <span className="term-dot yellow"></span>
        <span className="term-dot green"></span>
        <span className="term-title">{title}</span>
      </div>
      <div className="term-body">{children}</div>
    </div>
  )
}

/* ── ASCII Logo ── */
const ASCII_LOGO = `
██╗  ██╗ █████╗  ██████╗██╗  ██╗███╗   ██╗ ██████╗ ██╗   ██╗ █████╗ 
██║  ██║██╔══██╗██╔════╝██║ ██╔╝████╗  ██║██╔═══██╗██║   ██║██╔══██╗
███████║███████║██║     █████╔╝ ██╔██╗ ██║██║   ██║██║   ██║███████║
██╔══██║██╔══██║██║     ██╔═██╗ ██║╚██╗██║██║   ██║╚██╗ ██╔╝██╔══██║
██║  ██║██║  ██║╚██████╗██║  ██╗██║ ╚████║╚██████╔╝ ╚████╔╝ ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝   ╚═══╝  ╚═╝  ╚═╝`

/* ── Boot Sequence ── */
const BootHero = () => {
  const lines = [
    { cmd: true, text: '> ./init_hacknova --mode=COMPETE' },
    { cmd: false, text: '[OK] Loading hackathon kernel v2.0 ...' },
    { cmd: false, text: '[OK] Initializing neural networks ...' },
    { cmd: false, text: '[OK] Connecting to innovation servers ...' },
    { cmd: false, text: '[OK] Mounting /tracks /prizes /timeline ...' },
    { cmd: false, text: '[OK] System ready. Welcome, hacker.' },
  ]
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    let i = 0
    const iv = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= lines.length) clearInterval(iv)
    }, 400)
    return () => clearInterval(iv)
  }, [])

  return (
    <section id="home" className="term-section term-hero">
      <pre className="ascii-logo">{ASCII_LOGO}</pre>
      <div className="boot-lines">
        {lines.slice(0, visibleLines).map((l, i) => (
          <p key={i} className={l.cmd ? 'term-cmd' : 'term-output'}>{l.text}</p>
        ))}
      </div>
      {visibleLines >= lines.length && (
        <div className="hero-meta">
          <p className="term-accent">12-HOUR NATIONAL LEVEL HYBRID HACKATHON</p>
          <p className="term-muted">Shivajirao S. Jondhle College of Engineering, Dombivli East</p>
          <p className="term-muted">Organized by Technova Club</p>
          <a href="https://unstop.com/hackathons/hacknova-shivajirao-s-jondhale-college-of-engineering-dombivli-1455869" 
             target="_blank" rel="noopener noreferrer" className="term-btn">
            {'>'} REGISTER_NOW --team-size=2-4 _
          </a>
        </div>
      )}
    </section>
  )
}

/* ── About Section ── */
const AboutSection = () => (
  <section id="about" className="term-section">
    <TermWindow title="~/hacknova/about.txt">
      <p className="term-cmd">$ cat about.txt</p>
      <br />
      <p className="term-output">
        HACKNOVA is a 12-hour National Level Hybrid Hackathon organized by
        Technova Club, Shivajirao S. Jondhle College of Engineering, Dombivli
        East — aimed at empowering students to build innovative, real-world
        technology solutions through creativity, collaboration, and
        problem-solving.
      </p>
      <br />
      <p className="term-output">
        The event brings together young innovators from across India to ideate,
        prototype, and present impactful solutions across multiple emerging
        technology domains.
      </p>
      <br />
      <div className="stat-row">
        <div className="term-stat"><span className="term-accent">₹50,000+</span><span className="term-muted">PRIZE_POOL</span></div>
        <div className="term-stat"><span className="term-accent">12</span><span className="term-muted">HOURS</span></div>
        <div className="term-stat"><span className="term-accent">5</span><span className="term-muted">TRACKS</span></div>
        <div className="term-stat"><span className="term-accent">2-4</span><span className="term-muted">TEAM_SIZE</span></div>
      </div>
    </TermWindow>
  </section>
)

/* ── Tracks Section ── */
const tracks = [
  { name: 'EdTech',      icon: '📚', desc: 'AI tutors, smart classrooms, gamified platforms' },
  { name: 'AI / ML',     icon: '🤖', desc: 'NLP, computer vision, recommendation engines' },
  { name: 'FinTech',     icon: '💳', desc: 'Digital payments, blockchain, fraud detection' },
  { name: 'HealthTech',  icon: '🏥', desc: 'Telemedicine, wearables, health analytics' },
  { name: 'Open Innovation', icon: '🚀', desc: 'Wild ideas, moonshot projects, anything goes' },
]

const TracksSection = () => (
  <section id="tracks" className="term-section">
    <TermWindow title="~/hacknova/tracks/">
      <p className="term-cmd">$ ls -la /tracks/</p>
      <br />
      <table className="term-table">
        <thead>
          <tr>
            <th>PERMISSIONS</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRIZE</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((t, i) => (
            <tr key={i}>
              <td className="term-muted">drwxr-xr-x</td>
              <td className="term-accent">{t.icon} {t.name}/</td>
              <td>{t.desc}</td>
              <td className="term-warn">₹10,000</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <p className="term-muted">5 directories, 0 files — ₹50,000 total prize pool</p>
    </TermWindow>
  </section>
)

/* ── Timeline Section ── */
const timeline = [
  { time: '09:00 AM', event: 'Registration & Check-in', hash: 'a1b2c3d' },
  { time: '10:00 AM', event: 'Opening Ceremony', hash: 'e4f5g6h' },
  { time: '10:30 AM', event: 'Hacking Begins!', hash: 'i7j8k9l' },
  { time: '01:00 PM', event: 'Mentor Sessions', hash: 'm0n1o2p' },
  { time: '04:30 PM', event: 'Midpoint Review', hash: 'q3r4s5t' },
  { time: '07:00 PM', event: 'Final Submissions', hash: 'u6v7w8x' },
  { time: '08:00 PM', event: 'Judging & Demos', hash: 'y9z0a1b' },
  { time: '09:30 PM', event: 'Awards & Closing', hash: 'c2d3e4f' },
]

const TimelineSection = () => (
  <section id="timeline" className="term-section">
    <TermWindow title="~/hacknova/timeline">
      <p className="term-cmd">$ git log --oneline --all</p>
      <br />
      {timeline.map((t, i) => (
        <p key={i} className="git-log-line">
          <span className="term-warn">{t.hash}</span>{' '}
          <span className="term-accent">[{t.time}]</span>{' '}
          <span>{t.event}</span>
        </p>
      ))}
      <br />
      <p className="term-muted">8 commits, 1 branch (main) — 12 hours of innovation</p>
    </TermWindow>
  </section>
)

/* ── Prizes Section ── */
const PrizesSection = () => (
  <section id="prizes" className="term-section">
    <TermWindow title="~/hacknova/prizes.json">
      <p className="term-cmd">$ cat prizes.json | jq .</p>
      <br />
      <pre className="term-json">{`{
  "grand_prize": {
    "position": "🥇 1st Place",
    "amount": "₹20,000",
    "extras": ["Trophy", "Certificates", "Internship Offers"]
  },
  "runner_up": {
    "position": "🥈 2nd Place",
    "amount": "₹12,000",
    "extras": ["Trophy", "Certificates"]
  },
  "second_runner_up": {
    "position": "🥉 3rd Place",
    "amount": "₹8,000",
    "extras": ["Trophy", "Certificates"]
  },
  "bonus": {
    "best_freshman_team": "₹5,000",
    "most_innovative": "₹5,000",
    "all_participants": "Certificates + Swags"
  }
}`}</pre>
    </TermWindow>
  </section>
)

/* ── Registration Section ── */
const RegisterSection = () => {
  const { displayed } = useTyping(
    'Ready to hack? Register your team on Unstop and join 30+ teams competing for ₹50,000+ in prizes.',
    25, 300
  )

  return (
    <section id="register" className="term-section">
      <TermWindow title="~/hacknova/register">
        <p className="term-cmd">$ ./register --help</p>
        <br />
        <p className="term-output">{displayed}<span className="cursor-blink">█</span></p>
        <br />
        <div className="register-steps">
          <p><span className="term-accent">Step 1:</span> <span className="term-cmd">$ git clone team --members=2-4</span></p>
          <p><span className="term-accent">Step 2:</span> <span className="term-cmd">$ npm run submit --track=chosen</span></p>
          <p><span className="term-accent">Step 3:</span> <span className="term-cmd">$ ./compete --duration=12h</span></p>
        </div>
        <br />
        <a href="https://unstop.com/hackathons/hacknova-shivajirao-s-jondhale-college-of-engineering-dombivli-1455869"
           target="_blank" rel="noopener noreferrer" className="term-btn">
          {'>'} EXECUTE register.sh _
        </a>
        <br />
        <p className="term-muted">⚠ Deadline: February 28, 2026 • Team size: 2-4 members</p>
      </TermWindow>
    </section>
  )
}

/* ── FAQ Section ── */
const faqs = [
  { q: 'Who can participate?', a: 'Any college student from India. Teams of 2-4 members.' },
  { q: 'Is it online or offline?', a: 'Hybrid — participate from campus or remotely.' },
  { q: 'What should I bring?', a: 'Your laptop, charger, and ideas. We provide WiFi, snacks, and mentors.' },
  { q: 'Is there a registration fee?', a: 'Absolutely free. Zero cost to participate.' },
  { q: 'Do I need a team?', a: 'Yes, teams of 2-4 members. Solo participants can find teams on our Discord.' },
  { q: 'What tech stack can I use?', a: 'Any language, framework, or platform. Use whatever solves the problem best.' },
]

const FAQSection = () => {
  const [expandedIdx, setExpandedIdx] = useState(null)
  return (
    <section id="faq" className="term-section">
      <TermWindow title="~/hacknova/faq — man hacknova">
        <p className="term-cmd">$ man hacknova</p>
        <br />
        <p className="term-accent">HACKNOVA(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frequently Asked Questions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HACKNOVA(1)</p>
        <br />
        {faqs.map((f, i) => (
          <div key={i} className="faq-entry" onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}>
            <p className="faq-q">
              <span className="term-accent">[{expandedIdx === i ? '-' : '+'}]</span>{' '}
              {f.q}
            </p>
            {expandedIdx === i && (
              <p className="faq-a">&nbsp;&nbsp;&nbsp;&nbsp;→ {f.a}</p>
            )}
          </div>
        ))}
      </TermWindow>
    </section>
  )
}

/* ── Footer ── */
const TermFooter = () => (
  <footer className="term-footer">
    <p className="term-muted">
      <span className="term-accent">hacknova@technova</span>:<span className="term-output">~</span>$ echo "Made with 💜 by Technova Club"
    </p>
    <p className="term-output">Made with 💜 by Technova Club</p>
    <p className="term-muted">© 2026 Technova Club — SSJCE, Dombivli East</p>
    <div className="footer-links">
      <a href="https://instagram.com/technova_ssjce" target="_blank" rel="noopener noreferrer">Instagram</a>
      <span className="term-muted">|</span>
      <a href="https://linkedin.com/company/technova-ssjce" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <span className="term-muted">|</span>
      <a href="mailto:technova@ssjce.edu.in">Email</a>
    </div>
  </footer>
)

/* ── Nav ── */
const TermNav = ({ onToggleTheme }) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const sections = ['home', 'about', 'tracks', 'timeline', 'prizes', 'register', 'faq']

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0)

      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="term-progress" style={{ width: `${scrollProgress}%` }} />
      <nav className="term-nav">
        <span className="term-nav-brand">
          <span className="term-accent">hacknova</span>
          <span className="term-muted">@technova:~$</span>
        </span>
        <div className="term-nav-links">
          {sections.map(id => (
            <a key={id} href={`#${id}`} onClick={e => scrollTo(e, id)}
               className={activeSection === id ? 'active' : ''}>
              {id}
            </a>
          ))}
        </div>
        <button className="theme-toggle-btn" onClick={onToggleTheme} title="Switch to Classic View">
          ⬡ classic
        </button>
      </nav>
    </>
  )
}

/* ── Main Export ── */
const TerminalView = ({ onToggleTheme }) => {
  return (
    <div className="terminal-app">
      <TermNav onToggleTheme={onToggleTheme} />
      <main>
        <BootHero />
        <AboutSection />
        <TracksSection />
        <TimelineSection />
        <PrizesSection />
        <RegisterSection />
        <FAQSection />
      </main>
      <TermFooter />
    </div>
  )
}

export default TerminalView
