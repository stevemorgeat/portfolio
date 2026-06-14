import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectCard } from './ProjectCard'

describe('ProjectCard', () => {
  it('affiche le titre, le statut et le lien pour un projet en ligne', () => {
    render(<ProjectCard project={{ title: 'Voyage Japon', description: 'desc', tags: ['React'], status: 'live', href: 'https://x.fr' }} />)
    expect(screen.getByText('Voyage Japon')).toBeInTheDocument()
    expect(screen.getByText('En ligne')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /voir/i })).toHaveAttribute('href', 'https://x.fr')
  })

  it('marque un projet privé et n\'affiche pas de lien "Voir"', () => {
    render(<ProjectCard project={{ title: 'KND', description: 'd', tags: [], status: 'private' }} />)
    expect(screen.getByText('Privé')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /voir/i })).toBeNull()
  })
})
