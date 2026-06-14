import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['TypeScript', 'React 19 / hooks', 'React Native', 'Vue.js', 'MUI', 'Atomic design', 'Single-spa (microfront)'],
  },
  {
    label: 'Backend / Serverless',
    items: ['Node.js', 'TypeScript', 'Ruby on Rails', 'AWS Lambda / Serverless', 'SQS / SNS', 'Architecture event-driven'],
  },
  {
    label: 'Cloud & Data',
    items: ['AWS (S3, CloudFront, IAM/OIDC)', 'DynamoDB', 'Aurora PostgreSQL', 'Kinesis / DMS', 'MongoDB / Atlas'],
  },
  {
    label: 'Qualité & DevOps',
    items: ['Tests (Vitest / front)', 'CI/CD (GitHub Actions)', 'Datadog', 'Sentry', 'Optimisation coûts AWS'],
  },
  {
    label: 'Management',
    items: ['Engineering Management', 'Faire grandir les équipes', '1:1 & entretiens annuels', 'Agile (PO / PM)', 'Recrutement', 'Scaling & migration de stack'],
  },
]
