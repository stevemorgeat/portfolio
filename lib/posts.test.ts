import { describe, it, expect } from 'vitest'
import { frontmatterSchema } from './frontmatter'
import { getAllPosts, getPostBySlug, getAllTags } from './posts'

describe('content layer — seeds réels', () => {
  const posts = getAllPosts()

  it('parse tous les articles seed sans erreur', () => {
    expect(posts.length).toBeGreaterThanOrEqual(5)
    for (const p of posts) {
      expect(p.slug).toMatch(/^[a-z0-9-]+$/)
      expect(p.readingMinutes).toBeGreaterThanOrEqual(1)
      expect(p.content.length).toBeGreaterThan(0)
    }
  })

  it('trie par date décroissante (plus récent en premier)', () => {
    const dates = posts.map((p) => p.date)
    expect([...dates].sort((a, b) => (a < b ? 1 : -1))).toEqual(dates)
  })

  it('retrouve un article par slug + expose les tags', () => {
    expect(getPostBySlug('refonte-site-couvreur')?.category).toBe('projet')
    expect(getAllTags()).toContain('nestjs')
  })
})

describe('frontmatterSchema — validation', () => {
  const base = {
    title: 'Un titre correct',
    slug: 'un-slug-correct',
    description: 'Une description suffisamment longue pour passer la validation.',
    date: '2026-06-01',
    category: 'techno',
    tags: ['x'],
  }

  it('accepte un article valide', () => {
    expect(frontmatterSchema.safeParse({ ...base, format: 'article' }).success).toBe(true)
  })

  it('exige href pour un lien et images pour une galerie', () => {
    expect(frontmatterSchema.safeParse({ ...base, format: 'link' }).success).toBe(false)
    expect(frontmatterSchema.safeParse({ ...base, format: 'link', href: 'https://x.fr' }).success).toBe(true)
    expect(frontmatterSchema.safeParse({ ...base, format: 'gallery' }).success).toBe(false)
    expect(frontmatterSchema.safeParse({ ...base, format: 'gallery', images: [{ src: '/a.jpg' }] }).success).toBe(true)
  })

  it('rejette date invalide, slug réservé, champ inconnu', () => {
    expect(frontmatterSchema.safeParse({ ...base, format: 'article', date: '2026-13-40' }).success).toBe(false)
    expect(frontmatterSchema.safeParse({ ...base, format: 'article', slug: 'blog' }).success).toBe(false)
    expect(frontmatterSchema.safeParse({ ...base, format: 'article', oops: 1 }).success).toBe(false)
  })
})
