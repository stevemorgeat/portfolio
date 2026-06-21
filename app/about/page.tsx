import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Steve Morgeat — Engineering Manager et développeur. Serverless, React, et tout ce que je teste en chemin.',
}

export default function AboutPage() {
  return (
    <article>
      <div className="crumb">À propos</div>
      <h1>Salut, moi c&apos;est Steve.</h1>
      <div className="prose">
        <p>
          Engineering Manager le jour, dev curieux le reste du temps. Je bricole des projets, je teste des
          technos (serverless, React, un peu de 3D, de la domotique…), et j&apos;écris ici ce que j&apos;en retiens —
          les réussites comme les galères.
        </p>
        <p>
          Ce site n&apos;est pas un CV : ce sont mes projets et mes notes. Si un sujet vous parle, ou si vous voulez
          travailler ensemble, le plus simple est de me laisser un message.
        </p>
        <p>
          <a href="https://www.linkedin.com/in/steve-morgeat" target="_blank" rel="noopener">LinkedIn</a>
          {' · '}
          <a href="https://github.com/stevemorgeat" target="_blank" rel="noopener">GitHub</a>
        </p>
      </div>
      <a className="backlink" href="/">← Tous les articles</a>
    </article>
  )
}
