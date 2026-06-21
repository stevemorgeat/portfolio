import { z } from 'zod'

/**
 * Modèle de contenu du blog — source de vérité partagée (front + futur /draft).
 * Un seul type Post, discriminé par `format`. Validé au build : un frontmatter
 * invalide casse le build plutôt que de passer en prod silencieusement.
 */

export const POST_CATEGORIES = ['projet', 'techno', 'voyage', 'note'] as const

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const RESERVED = ['blog', 'contact', 'about', 'projets', 'feed', 'sitemap', 'robots']

const isoDate = z
  .string()
  .refine((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && !Number.isNaN(Date.parse(d)), 'date ISO invalide (AAAA-MM-JJ)')

const base = z
  .object({
    title: z.string().min(3),
    slug: z
      .string()
      .regex(SLUG, 'slug en kebab-case')
      .refine((s) => !RESERVED.includes(s), 'slug réservé'),
    description: z.string().min(20).max(200),
    date: isoDate,
    updated: isoDate.optional(),
    category: z.enum(POST_CATEGORIES),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  })
  .strict() // rejette tout champ inconnu (garde-fou anti-hallucination LLM)

export const frontmatterSchema = z.discriminatedUnion('format', [
  base.extend({ format: z.literal('article') }).strict(),
  base.extend({ format: z.literal('link'), href: z.string().url() }).strict(),
  base
    .extend({
      format: z.literal('gallery'),
      // 'grid' = galerie classique ; 'manga' = planche lue de droite à gauche.
      layout: z.enum(['grid', 'manga']).default('grid'),
      images: z
        .array(
          z.object({
            src: z.string(),
            caption: z.string().optional(),
            // Champs manga (optionnels) : taille de case, bulle de narration et onomatopée.
            size: z.enum(['wide', 'tall', 'sq']).optional(),
            narration: z.string().optional(),
            pos: z.enum(['tl', 'bl']).optional(),
            sfx: z.string().optional(),
            sfxPos: z.enum(['r', 't']).optional(),
          }),
        )
        .min(1),
    })
    .strict(),
])

export type Frontmatter = z.infer<typeof frontmatterSchema>
export type Post = Frontmatter & { content: string; readingMinutes: number; fileName: string }
