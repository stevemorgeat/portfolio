// Génère sitemap.xml + feed.xml (RSS) + robots.txt dans out/ après le build Next.
// Lit content/blog/*.mdx (mêmes règles que lib/posts : on exclut les brouillons).
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'

const SITE = 'https://stevemorgeat.fr'
const OUT = 'out'
const BLOG = join('content', 'blog')

if (!existsSync(OUT)) {
  console.error('[seo] dossier out/ absent — lance "next build" d\'abord.')
  process.exit(1)
}

const posts = readdirSync(BLOG)
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => matter(readFileSync(join(BLOG, f), 'utf8')).data)
  .filter((d) => !d.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1))

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const url = (slug) => `${SITE}/blog/${slug}/`

// sitemap
const urls = [`${SITE}/`, `${SITE}/about/`, ...posts.map((p) => url(p.slug))]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`
writeFileSync(join(OUT, 'sitemap.xml'), sitemap)

// RSS
const items = posts
  .map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${url(p.slug)}</link>
      <guid>${url(p.slug)}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`,
  )
  .join('\n')
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
    <title>Steve Morgeat — articles &amp; projets</title>
    <link>${SITE}/</link>
    <description>Serverless, React, domotique, voyages.</description>
    <language>fr-FR</language>
${items}
</channel></rss>
`
writeFileSync(join(OUT, 'feed.xml'), rss)

// robots
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)

console.log(`[seo] sitemap (${urls.length} urls) + feed (${posts.length} articles) + robots → out/`)
