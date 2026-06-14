import { Container, Box, Typography } from '@mui/material'
import { SectionTitle } from '../components/SectionTitle'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export const Realisations = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
    <SectionTitle id="realisations" kicker="Réalisations" title="Ce que je construis" />
    <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 640 }}>
      Des projets que je conçois, code et déploie moi-même — certains publics, d'autres sur demande.
    </Typography>
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </Box>
  </Container>
)
