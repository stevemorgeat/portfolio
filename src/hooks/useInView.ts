import { useEffect, useRef, useState } from 'react'

/** Détecte quand un élément entre dans le viewport (one-shot). */
export function useInView<T extends Element>(rootMargin = '250px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { rootMargin },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [inView, rootMargin])

  return { ref, inView }
}
