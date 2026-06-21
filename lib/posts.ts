import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { frontmatterSchema, type Post } from './frontmatter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// Mémoïsation au niveau module : un seul parcours du FS, réutilisé par toutes
// les pages (liste, article, sitemap, RSS…).
let cache: Post[] | null = null

export function getAllPosts(): Post[] {
  if (cache) return cache

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files.map((fileName): Post => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8')
    const { data, content } = matter(raw)
    const fm = frontmatterSchema.parse(data) // throw → casse le build si invalide
    return { ...fm, content, readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)), fileName }
  })

  const visible = posts
    .filter((p) => (process.env.NODE_ENV === 'production' ? !p.draft : true))
    .sort((a, b) => (a.date < b.date ? 1 : -1)) // plus récent d'abord

  cache = visible
  return visible
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function getAllTags(): string[] {
  return [...new Set(getAllPosts().flatMap((p) => p.tags))].sort()
}

/** Réinitialise le cache (tests). */
export function _resetPostsCache(): void {
  cache = null
}
