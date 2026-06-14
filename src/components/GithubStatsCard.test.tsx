import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GithubStatsCard } from './GithubStatsCard'

const base = {
  login: 'stevemorgeat',
  profileUrl: 'https://github.com/stevemorgeat',
  name: 'Steve Morgeat',
  repoCount: 12,
  followers: 8,
  stars: 34,
  topRepos: [{ name: 'portfolio', url: 'https://github.com/stevemorgeat/portfolio', stars: 5, description: 'Mon portfolio' }],
}

describe('GithubStatsCard', () => {
  it('affiche les stats et le top repo (status ready)', () => {
    render(<GithubStatsCard {...base} status="ready" />)
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('34')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'portfolio' })).toBeInTheDocument()
  })

  it("affiche un message quand l'API est indisponible (status error)", () => {
    render(<GithubStatsCard {...base} status="error" />)
    expect(screen.getByText(/indisponibles/i)).toBeInTheDocument()
  })
})
