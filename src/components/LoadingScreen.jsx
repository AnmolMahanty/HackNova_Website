import { useState, useEffect } from 'react'
import './LoadingScreen.css'

const bootLines = [
  { text: '> SYSTEM BOOT INITIATED...', delay: 0 },
  { text: '> LOADING NEURAL NETWORK...', delay: 400 },
  { text: '> CONNECTING TO TECHNOVA_MAINFRAME...', delay: 800 },
  { text: '> DECRYPTING CHALLENGE_MODULES...', delay: 1200 },
  { text: '> INITIALIZING HACKNOVA v2.0...', delay: 1600 },
  { text: '> STATUS: ██████████ READY', delay: 2000 },
]

const LoadingScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState(0)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show lines sequentially
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1)
      }, line.delay)
    })

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Fade out and complete
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 2800)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, 3300)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="terminal-title">HACKNOVA_TERMINAL</span>
        </div>
        
        <div className="terminal-body">
          {bootLines.slice(0, visibleLines).map((line, index) => (
            <div 
              key={index} 
              className={`terminal-line ${index === visibleLines - 1 ? 'typing' : ''}`}
            >
              {line.text}
            </div>
          ))}
          <div className="cursor-blink">_</div>
        </div>
        
        <div className="terminal-progress">
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
