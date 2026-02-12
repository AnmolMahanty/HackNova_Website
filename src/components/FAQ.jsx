import { useState } from 'react'
import './FAQ.css'

const faqData = [
  {
    question: 'Who can participate in HACKNOVA?',
    answer: 'Any undergraduate or postgraduate student from engineering, technology, or allied disciplines across India can participate. Inter-college teams are allowed.'
  },
  {
    question: 'What is the team size?',
    answer: 'Teams must have 2 to 4 members. Solo participation is not allowed. You can form inter-college teams.'
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Registration details and fees (if any) will be communicated through the official Unstop registration page.'
  },
  {
    question: 'What should we submit in Round 1?',
    answer: 'You need to submit your idea description, a PPT presentation, and a working prototype via the Unstop platform during the online round.'
  },
  {
    question: 'How many teams will be shortlisted?',
    answer: 'Top 30 teams from the online round will be shortlisted for the 12-hour offline finale at SSJCOE Campus.'
  },
  {
    question: 'What should I bring to the offline round?',
    answer: 'Bring your laptop, charger, college ID card, and any hardware required for your project. Food and Wi-Fi will be provided at the venue.'
  },
  {
    question: 'Are there any predefined problem statements?',
    answer: 'No! HACKNOVA encourages you to identify real-world challenges and build innovative solutions within the given tracks.'
  },
  {
    question: 'What are the prizes?',
    answer: 'The total prize pool is ₹50,000+ with cash prizes of ₹10,000 per track. Winners also receive trophies, certificates, internship opportunities, and swags.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2 className="section-title scroll-reveal" data-text="FAQ">FAQ</h2>
        
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <span className="faq-q-text">{item.question}</span>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
