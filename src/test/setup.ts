import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom n'implémente pas ces API utilisées par le code/MUI.
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// Pas d'appel réseau réel en test (GitHub API, etc.).
vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('réseau désactivé en test'))))

vi.stubGlobal('matchMedia', (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
}))
