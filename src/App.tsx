import { TopBar } from './sections/TopBar'
import { Hero } from './sections/Hero'
import { Parcours } from './sections/Parcours'
import { Competences } from './sections/Competences'
import { Realisations } from './sections/Realisations'
import { Passions } from './sections/Passions'
import { Contact } from './sections/Contact'

export const App = () => (
  <>
    <TopBar />
    <Hero />
    <Parcours />
    <Competences />
    <Realisations />
    <Passions />
    <Contact />
  </>
)
