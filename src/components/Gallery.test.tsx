import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Gallery } from './Gallery'
import { gallery } from '../data/gallery'

describe('Gallery', () => {
  it('affiche une vignette par photo', () => {
    render(<Gallery />)
    expect(screen.getAllByRole('img')).toHaveLength(gallery.length)
  })

  it('ouvre la lightbox avec la légende au clic', () => {
    render(<Gallery />)
    fireEvent.click(screen.getByRole('button', { name: gallery[0].caption }))
    // la légende apparaît dans la lightbox (en plus de l'alt de la vignette)
    expect(screen.getByText(gallery[0].caption)).toBeInTheDocument()
  })
})
