import { useState, useEffect } from 'react'
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const match = window.matchMedia(query)
    setMatches(match.matches)

    const handler = (event) => setMatches(event.matches)

    // Add listener to handle media query changes
    match.addEventListener('change', handler)

    // Cleanup listener on component unmount
    return () => {
      match.removeEventListener('change', handler)
    }
  }, [query])

  return matches
}

export default useMediaQuery
