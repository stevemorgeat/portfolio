import { useState } from 'react'
import { Container, Box, Typography } from '@mui/material'
import { SectionTitle } from '../components/SectionTitle'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectDialog } from '../components/ProjectDialog'
import { TagFilter } from '../components/TagFilter'
import { useProjectFilter } from '../hooks/useProjectFilter'
import { projects } from '../data/projects'
import type { Project } from '../types'

export const Realisations = () => {
  const [selected, setSelected] = useState<Project | null>(null)
  const { tags, active, toggle, clear, filtered } = useProjectFilter(projects)

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
      <SectionTitle id="realisations" kicker="Réalisations" title="Ce que je construis" />
      <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 640 }}>
        Des projets que je conçois, code et déploie moi-même. Filtre par stack, et clique sur <em>Détails</em> pour l'histoire de chacun.
      </Typography>
      <TagFilter tags={tags} active={active} onToggle={toggle} onClear={clear} />
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
        {filtered.map((p) => (
          <ProjectCard key={p.title} project={p} onOpen={setSelected} />
        ))}
      </Box>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Container>
  )
}
