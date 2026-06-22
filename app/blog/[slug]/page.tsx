import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import type { PluggableList } from 'unified'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { getAllPosts, getPostBySlug } from '../../../lib/posts'
import { ThreeDemo } from '../../../components/ThreeDemo'

// Composants custom utilisables dans le MDX (ex. <ThreeDemo /> dans l'article 3D).
const mdxComponents = { ThreeDemo }

const SITE = 'https://stevemorgeat.fr'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const url = `${SITE}/blog/${post.slug}/`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

const rehypePlugins: PluggableList = [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins,
  },
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { '@type': 'Person', name: 'Steve Morgeat' },
    keywords: post.tags.join(', '),
    url: `${SITE}/blog/${post.slug}/`,
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="crumb">Articles · {post.category}</div>
      <h1>{post.title}</h1>
      <div className="ameta">
        {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readingMinutes} min
        {post.tags.length > 0 && <> · {post.tags.map((t) => `#${t}`).join(' ')}</>}
      </div>
      <div className="prose">
        <MDXRemote source={post.content} options={mdxOptions} components={mdxComponents} />
      </div>
      {post.format === 'gallery' && post.layout === 'manga' && (
        <div className="manga">
          <div className="manga-kicker">第一話 · Carnet de voyage</div>
          <div className="manga-grid">
            {post.images.map((img, i) => (
              <div className={`mcell ${img.size ?? 'sq'}`} key={i}>
                <img src={img.src} alt={img.caption ?? post.title} loading="lazy" />
                {img.narration && <div className={`narr ${img.pos ?? 'bl'}`}>{img.narration}</div>}
                {img.sfx && <div className={`sfx ${img.sfxPos ?? 'r'}`}>{img.sfx}</div>}
              </div>
            ))}
          </div>
          <div className="manga-foot">— à lire de droite à gauche —</div>
        </div>
      )}
      {post.format === 'gallery' && post.layout !== 'manga' && (
        <div className="gallery">
          {post.images.map((img, i) => (
            <figure key={i}>
              <img src={img.src} alt={img.caption ?? post.title} loading="lazy" />
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      <a className="backlink" href="/">← Tous les articles</a>
    </article>
  )
}
