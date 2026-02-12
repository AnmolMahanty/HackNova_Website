import { useState, useEffect, useCallback } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)  
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY })
    if (!isVisible) setIsVisible(true)
  }, [isVisible])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', () => setIsClicking(true))
    window.addEventListener('mouseup', () => setIsClicking(false))

    // Detect hoverable elements
    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, .futuristic-card, .track-tile, .faq-item, .btn, .stat-card, .sponsor-slot, input, textarea')
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    // Run after DOM settles
    const timer = setTimeout(addHoverListeners, 1000)
    
    // Re-run on DOM changes (for dynamically added elements)
    const observer = new MutationObserver(() => {
      setTimeout(addHoverListeners, 100)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [handleMouseMove])

  // Don't render on touch devices
  if ('ontouchstart' in window) return null

  return (
    <>
      <div 
        className={`cursor-dot ${isClicking ? 'clicking' : ''}`}
        style={{ left: position.x, top: position.y }}
      />
      <div 
        className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'visible' : ''}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  )
}

export default CustomCursor
