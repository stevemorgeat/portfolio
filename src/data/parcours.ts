import type { Job } from '../types'

export const parcours: Job[] = [
  {
    company: 'Skello',
    role: 'Engineering Manager & dev fullstack',
    period: 'déc. 2022 → aujourd’hui',
    summary:
      "Scale-up SaaS RH (Platform Team). D'abord 1 équipe, puis 2 pendant 1 an et demi, et de nouveau 1 équipe en mode hands-on — focus scalabilité, qualité et fiabilité. Côté tech : migration Vue 2 → React 19 (single-spa, MUI, atomic design, tests front), badgeuse offline-first (SQLite), upgrade Expo/React Native, refonte svc-documents v2, optimisation CI/CD & coûts AWS, archi event-driven.",
    tags: ['Engineering Manager', 'Vue 2 → React 19', 'Single-spa / MUI', 'React Native', 'Serverless AWS', 'Scalabilité'],
    accent: '#1f8a5b',
  },
  {
    company: 'BimBamJob',
    role: 'Dev fullstack → Lead Developer',
    period: 'oct. 2019 → déc. 2022',
    summary:
      "La mission sociale me faisait lever le matin : faire les choses bien, pour une bonne cause. J'y ai industrialisé ma façon de travailler et je suis passé Lead/manager d'une équipe de 14 (5-6 devs fullstack JS) : microservices serverless AWS, microfront (single-spa, CloudFront/S3/Route53), environnements client & tests, agile avec PO/PM, et management (1:1, entretiens annuels).",
    tags: ['Impact social', 'Lead Developer', 'Microservices serverless', 'Microfront (single-spa)', 'Management'],
    accent: '#2f8f5b',
  },
  {
    company: 'Otodo',
    role: 'Développeur fullstack JS',
    period: 'déc. 2017 → nov. 2019',
    summary:
      "Startup domotique que j'ai kiffée pour sa liberté — le terrain idéal pour monter fort en compétences. Certification Alexa / Google Home, microservices Node.js, back-office Angular & React, refonte de l'app mobile. Accessoirement fan de domotique (Home Assistant, maison full équipée) : le job rejoignait la passion.",
    tags: ['Startup', 'Domotique', 'Alexa / Google Home', 'Node.js', 'Mobile'],
    accent: '#2f6f8f',
  },
  {
    company: 'Richter & Cie',
    role: 'Vendeur / magasinier → le déclic',
    period: 'févr. 2011 → janv. 2018 (7 ans)',
    summary:
      "7 ans magasinier, mais toujours technophile. J'ai fini par construire le site de la boîte (HTML/CSS appris sur le Site du Zéro, futur OpenClassrooms) — et ce déclic m'a poussé à tenter la reconversion vers le développement. Le point de départ de tout le reste (et l'origine du petit samouraï du logo).",
    tags: ['Reconversion', 'Magasinier 7 ans', 'HTML / CSS', 'Le déclic'],
    accent: '#c89b3c',
  },
]
