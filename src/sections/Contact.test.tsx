import { describe, it, expect } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '../test/renderWithProviders'
import { Contact } from './Contact'

describe('Contact', () => {
  it('affiche les erreurs de validation (zod) au submit vide', async () => {
    renderWithProviders(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }))
    expect(await screen.findByText('Email invalide')).toBeInTheDocument()
    expect(screen.getByText(/Ton nom/)).toBeInTheDocument()
    expect(screen.getByText(/Message un peu plus long/)).toBeInTheDocument()
  })
})
