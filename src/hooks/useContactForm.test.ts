import { describe, it, expect } from 'vitest'
import { contactSchema } from './useContactForm'

describe('contactSchema', () => {
  it('accepte un message valide', () => {
    const r = contactSchema.safeParse({ name: 'Steve', email: 'a@b.fr', message: 'Bonjour, projet de site.' })
    expect(r.success).toBe(true)
  })

  it('rejette un email invalide', () => {
    const r = contactSchema.safeParse({ name: 'Steve', email: 'pas-un-email', message: 'Bonjour le monde !' })
    expect(r.success).toBe(false)
  })

  it('rejette un nom trop court et un message trop court', () => {
    const r = contactSchema.safeParse({ name: 'S', email: 'a@b.fr', message: 'court' })
    expect(r.success).toBe(false)
  })

  it('rejette si le honeypot (company) est rempli', () => {
    const r = contactSchema.safeParse({ name: 'Bot', email: 'a@b.fr', message: 'message de spam ici', company: 'x' })
    expect(r.success).toBe(false)
  })
})
