import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['TypeScript', 'React 19 / React Native', 'MUI', 'react-hook-form', 'TanStack (Query/Table/Virtual)'],
  },
  {
    label: 'Backend / Serverless',
    items: ['Node.js', 'AWS Lambda', 'SES', 'API REST', 'Serverless Framework'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (S3, CloudFront, IAM/OIDC)', 'GitHub Actions CI/CD', 'Vite', 'Déploiement auto'],
  },
  {
    label: 'Qualité',
    items: ['Tests (Vitest / Testing Library)', 'ESLint + Prettier', 'Composants purs + hooks', 'React Compiler'],
  },
  {
    label: 'Management',
    items: ['Engineering Management', 'Faire grandir les équipes', 'Industrialisation', 'Recrutement', "Scaling & migration de stack"],
  },
]
