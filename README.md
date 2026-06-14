# stevemorgeat.fr — portfolio

Site perso + CV de **Steve Morgeat** (Engineering Manager & builder). Pensé comme
une vitrine *et* comme une démo de bonnes pratiques front.

🔗 Live : https://stevemorgeat.fr

## Stack

- **Vite + React 19 + TypeScript**, **MUI v7**
- **React Compiler** (mémoïsation automatique — pas de `useMemo`/`useCallback` manuels)
- **react-hook-form + zod** (formulaire de contact validé)
- **TanStack Query** (envoi du formulaire via `useMutation`)
- **Vitest + Testing Library** (tests unitaires composants & schémas)
- **ESLint + Prettier**

## Architecture

```
src/
├── App.tsx                 composition des sections (fin)
├── main.tsx                providers (Theme, QueryClient)
├── theme.ts
├── types/                  modèles (Job, Project, SkillGroup)
├── data/                   contenu (profil, parcours, projets, compétences)
├── components/             composants PURS (SectionTitle, TimelineItem, ProjectCard, SkillGroupCard)
├── hooks/                  logique métier (useContactForm = RHF + zod + mutation)
└── sections/              sections fines (Hero, Parcours, Competences, Realisations, Contact, TopBar)
```

Principe : **pages/sections = composition**, **composants purs** = affichage,
**hooks** = logique. Aucune logique métier dans les composants d'affichage.

## Scripts

```bash
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run typecheck
npm run lint
npm test           # vitest
```

## Déploiement

GitHub Actions (OIDC, sans clé AWS stockée) :
- `ci.yml` : lint + typecheck + tests + build sur chaque push/PR.
- `deploy.yml` : build → sync `dist/` vers la **racine** du bucket S3, en
  **excluant `projets/*`** (pour ne pas écraser les projets déployés type
  `/projets/voyages/japon`), puis invalidation CloudFront.

Variables d'env :
- `VITE_CONTACT_ENDPOINT` — URL du micro-service de contact (repo `svc-contact`,
  AWS Lambda + SES). Sans elle, le formulaire propose un repli `mailto:`.

## Licence

Code open source — réutilisable comme base de portfolio.
