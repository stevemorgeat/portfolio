import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Voyage Japon',
    description:
      "Générateur de mini-site de voyage : itinéraire interactif, veille de prix de vols, budget. Déployé sur mon infra.",
    tags: ['React', 'MUI', 'Vite', 'CI/CD'],
    status: 'live',
    href: 'https://stevemorgeat.fr/projets/voyages/japon/',
    story:
      "Un terrain de jeu pour tester l'implémentation assistée par IA (Claude Code) sur un vrai projet de bout en bout : du schéma de données au déploiement. Itinéraire, veille de prix, budget — le tout piloté par un JSON destiné à être généré par une IA.",
    learned: ['Pair-programming avec une IA sur un projet réel', 'Archi data-driven (un JSON = un voyage)', 'Déploiement S3/CloudFront en OIDC'],
  },
  {
    title: 'Ce portfolio',
    description:
      "Le site que tu regardes : React 19 + React Compiler, tests, composants purs + hooks, CI OIDC. Open source.",
    tags: ['React 19', 'Tests', 'TanStack', 'Open source'],
    status: 'live',
    repo: 'https://github.com/stevemorgeat/portfolio',
    story:
      "Sorti à l'origine au moment de ma reconversion, il a évolué avec le temps — à chaque nouvelle compétence, une nouvelle version. Voici d'ailleurs à quoi ressemblait l'ancienne version. Aujourd'hui c'est aussi une démo de bonnes pratiques : React 19, tests, CI/CD, archi propre.",
    learned: ['Faire évoluer une base dans la durée', 'Bonnes pratiques front (tests, lint, CI)', 'Vitrine = preuve par le code'],
    images: ['portfolio-1.jpg', 'portfolio-2.jpg', 'portfolio-3.jpg'],
  },
  {
    title: 'svc-contact',
    description: "Micro-service serverless (AWS Lambda + SES) qui propulse le formulaire de contact de ce site.",
    tags: ['Serverless', 'AWS Lambda', 'SES'],
    status: 'soon',
    repo: 'https://github.com/stevemorgeat/svc-contact',
    story: "Le back du formulaire de contact : une petite Lambda + SES, déployée comme un vrai service, pour ne dépendre d'aucun tiers.",
    learned: ['Serverless Framework', 'AWS SES', 'Validation & anti-spam côté serveur'],
  },
  {
    title: 'Site couvreur',
    description: "Site vitrine réalisé pour un artisan couvreur — prestation client.",
    tags: ['Site vitrine', 'Client', 'SEO'],
    status: 'private',
    story:
      "Une prestation client de A à Z : site vitrine pensé pour le SEO local (être trouvé par ses prospects) avec accompagnement de l'artisan sur la prise en main et la visibilité.",
    learned: ['Relation & accompagnement client', 'SEO local', 'Livraison d\'un site vitrine pro'],
  },
  {
    title: 'KND',
    description: 'Site vitrine client (menuiserie / fenêtres), transformable en plateforme de configuration & commande.',
    tags: ['React', 'Client', 'Évolutif'],
    status: 'private',
    story:
      "Vitrine client aujourd'hui, mais pensée pour devenir une plateforme : configurer ses fenêtres/menuiseries et passer commande en ligne (à venir). Un projet qui montre comment une vitrine peut grandir en produit.",
    learned: ['Concevoir évolutif', 'Configurateur produit (à venir)', 'Du vitrine au transactionnel'],
  },
  {
    title: 'Richter & Cie',
    description: "Le site de mon employeur quand j'étais magasinier — mon tout premier site (HTML/CSS).",
    tags: ['HTML', 'CSS', 'Les débuts'],
    status: 'private',
    story:
      "Là où tout a commencé. Magasinier chez Richter & Cie pendant 7 ans mais toujours technophile, j'ai fini par construire le site de la boîte — du HTML/CSS appris sur le Site du Zéro (futur OpenClassrooms). Ce déclic m'a poussé à tenter la reconversion. Le petit samouraï du logo lui rend hommage.",
    learned: ['Les fondamentaux HTML/CSS', "L'étincelle de la reconversion", "Oser changer de voie à 100 %"],
    images: ['richter-1.jpg', 'richter-2.jpg', 'richter-3.jpg'],
  },
]
