'use client'
import { useState, type CSSProperties } from 'react'

export type PostLite = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  format: string
  readingMinutes: number
}

const FORMAT_LABEL: Record<string, string> = { article: 'article', link: 'lien', gallery: 'galerie' }

// Chaque tag appartient à un domaine ; chaque domaine a sa couleur.
// On garde ainsi deux lectures : la sélection (état « action ») et le type (la couleur).
const DOMAIN_COLOR: Record<string, string> = {
  front: '#4f5bd5', // react, vite, mui, typescript
  cloud: '#8a3ffc', // aws, nestjs, serverless, fastify
  voyage: '#c2772f', // japon, voyage
  photo: '#c2407a', // photo
  maison: '#0f9b9b', // domotique, maison connectée
  meta: '#1f8a5b', // seo, perf, freelance — couleur de base du site
}
const TAG_DOMAIN: Record<string, keyof typeof DOMAIN_COLOR> = {
  react: 'front', vite: 'front', mui: 'front', typescript: 'front', three: 'front', webgl: 'front', '3d': 'front',
  aws: 'cloud', nestjs: 'cloud', serverless: 'cloud', fastify: 'cloud',
  japon: 'voyage', voyage: 'voyage',
  photo: 'photo',
  domotique: 'maison', homeassistant: 'maison', legrand: 'maison', netatmo: 'maison', maison: 'maison',
}
const tagColor = (tag: string) => DOMAIN_COLOR[TAG_DOMAIN[tag] ?? 'meta']
const colorVar = (color: string) => ({ '--c': color }) as CSSProperties

export function Feed({ posts, tags }: { posts: PostLite[]; tags: string[] }) {
  const [active, setActive] = useState<string | null>(null)
  const shown = active ? posts.filter((p) => p.tags.includes(active)) : posts

  return (
    <>
      <div className="tagbar">
        <button className={`chip${active === null ? ' on' : ''}`} onClick={() => setActive(null)} type="button">tout</button>
        {tags.map((t) => (
          <button
            className={`chip${active === t ? ' on' : ''}`}
            key={t}
            onClick={() => setActive(t)}
            style={colorVar(tagColor(t))}
            type="button"
          >
            {t}
          </button>
        ))}
      </div>
      <div className="feed">
        {shown.map((p) => (
          <a className="post" key={p.slug} href={`/blog/${p.slug}/`}>
            <div className="meta">
              <span className="fmt">{FORMAT_LABEL[p.format] ?? p.format}</span>
              <span>{new Date(p.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>· {p.readingMinutes} min</span>
            </div>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="t" key={t} style={colorVar(tagColor(t))}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
