import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const SITE = 'https://stevemorgeat.fr'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'Steve Morgeat — articles & projets', template: '%s — Steve Morgeat' },
  description: 'Je construis des trucs, je teste des technos, et j\'écris ce que j\'apprends. Serverless, React, domotique, voyages.',
  openGraph: { type: 'website', locale: 'fr_FR', siteName: 'Steve Morgeat' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="top">
          <div className="row">
            <a className="brand" href="/"><img className="logo" src="/logo.png" alt="Steve Morgeat" /></a>
            <nav><a href="/">Articles</a><a href="/about/">À propos</a></nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-foot">
          <div className="row">
            <span>© Steve Morgeat</span>
            <span>
              <a href="https://www.linkedin.com/in/steve-morgeat" target="_blank" rel="noopener">LinkedIn</a>
              {' · '}
              <a href="https://github.com/stevemorgeat" target="_blank" rel="noopener">GitHub</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
