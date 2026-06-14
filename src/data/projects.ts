import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Voyage Japon',
    description:
      "Générateur de mini-site de voyage (React/MUI) : itinéraire interactif, veille de prix de vols, budget. Déployé sur mon infra.",
    tags: ['React', 'MUI', 'Vite', 'CI/CD'],
    status: 'live',
    href: 'https://stevemorgeat.fr/projets/voyages/japon/',
  },
  {
    title: 'Ce portfolio',
    description:
      "Le site que tu regardes : React 19 + React Compiler, tests unitaires, composants purs + hooks, CI OIDC. Open source.",
    tags: ['React 19', 'Tests', 'Open source'],
    status: 'live',
    repo: 'https://github.com/stevemorgeat/portfolio',
  },
  {
    title: 'svc-contact',
    description:
      "Micro-service serverless (AWS Lambda + SES) qui propulse le formulaire de contact de ce site.",
    tags: ['Serverless', 'AWS Lambda', 'SES'],
    status: 'soon',
    repo: 'https://github.com/stevemorgeat/svc-contact',
  },
  {
    title: 'Site couvreur',
    description: "Site vitrine réalisé pour un artisan couvreur — exemple de prestation client.",
    tags: ['Site vitrine', 'Client'],
    status: 'private',
  },
  {
    title: 'KND',
    description: 'Projet perso (menuiserie / fenêtres).',
    tags: ['React'],
    status: 'private',
  },
]
