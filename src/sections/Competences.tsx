import { Container, Box } from '@mui/material'
import { SectionTitle } from '../components/SectionTitle'
import { SkillGroupCard } from '../components/SkillGroupCard'
import { skills } from '../data/skills'

export const Competences = () => (
  <Container maxWidth="md" sx={{ py: { xs: 6, md: 9 } }}>
    <SectionTitle id="competences" kicker="Ce que j'apporte" title="Deux casquettes : tech & management" />
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' } }}>
      {skills.map((group) => (
        <SkillGroupCard key={group.label} group={group} />
      ))}
    </Box>
  </Container>
)
