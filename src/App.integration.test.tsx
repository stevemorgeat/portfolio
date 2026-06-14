import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from './test/renderWithProviders'
import { App } from './App'

describe('App (intégration)', () => {
  it('assemble et rend les sections clés du portfolio', () => {
    renderWithProviders(<App />)

    // Navigation
    expect(screen.getByRole('link', { name: 'Réalisations' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Lab' })).toBeInTheDocument()

    // Parcours (vrai CV)
    expect(screen.getAllByText(/Skello/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Richter & Cie/).length).toBeGreaterThan(0)

    // Réalisations
    expect(screen.getAllByText(/Voyage Japon/).length).toBeGreaterThan(0)

    // Hors-code
    expect(screen.getByText('Jeux vidéo & rétro gaming')).toBeInTheDocument()

    // Contact (formulaire)
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument()
  })
})
