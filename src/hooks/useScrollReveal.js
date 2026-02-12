import { useEffect, useRef } from 'react'

/**
 * Custom hook that adds scroll-triggered reveal animations
 * to elements with the class 'scroll-reveal'.
 * 
 * Usage: call useScrollReveal() in any component.
 * Add className="scroll-reveal" to elements you want animated.
 */
const useScrollReveal = () => {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observerRef.current.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach(el => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])
}

export default useScrollReveal
