import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { useInView } from './useInView'

type IOCallback = (entries: { isIntersecting: boolean }[]) => void

function Probe() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return <div ref={ref}>{inView ? 'visible' : 'caché'}</div>
}

afterEach(() => vi.unstubAllGlobals())

describe('useInView', () => {
  it("passe à visible quand l'élément entre dans le viewport", () => {
    let trigger: IOCallback | null = null
    class IO {
      constructor(cb: IOCallback) {
        trigger = cb
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', IO)

    render(<Probe />)
    expect(screen.getByText('caché')).toBeInTheDocument()

    act(() => trigger?.([{ isIntersecting: true }]))
    expect(screen.getByText('visible')).toBeInTheDocument()
  })
})
