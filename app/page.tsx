import { getAllPosts, getAllTags } from '../lib/posts'
import { getGithubStats } from '../lib/github'
import { Feed, type PostLite } from './Feed'

export default async function HomePage() {
  const all = getAllPosts()
  const posts: PostLite[] = all.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    tags: p.tags,
    format: p.format,
    readingMinutes: p.readingMinutes,
  }))
  const featured = all.find((p) => p.featured)
  const gh = await getGithubStats()

  return (
    <>
      <section className="hero">
        <img className="avatar" src="/avatar.jpg" alt="Steve Morgeat" />
        <div className="hero-txt">
          <h1>Je construis des trucs, je teste des technos, et j&apos;écris ce que j&apos;apprends.</h1>
          <p>EM le jour, dev curieux le reste du temps. Serverless, React, domotique, voyages.</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/steve-morgeat" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/stevemorgeat" target="_blank" rel="noopener">GitHub</a>
            {gh && (
              <span className="ghchips">
                <span className="ghc">{gh.repos} repos</span>
                <span className="ghc">★ {gh.stars}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {featured && (
        <a className="featured" href={`/blog/${featured.slug}/`}>
          <span className="kicker">À la une</span>
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          <span className="more">Lire l&apos;article →</span>
        </a>
      )}

      <Feed posts={posts} tags={getAllTags()} />
    </>
  )
}
