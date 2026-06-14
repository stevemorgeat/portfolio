import { Card, CardContent, Typography, Chip, Stack, Button, Box } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import type { Project } from '../types'

const STATUS_CHIP: Record<Project['status'], { label: string; color: 'success' | 'secondary' | 'default'; icon?: React.ReactElement }> = {
  live: { label: 'En ligne', color: 'success' },
  soon: { label: 'Bientôt', color: 'secondary' },
  private: { label: 'Privé', color: 'default', icon: <LockIcon /> },
}

type Props = { project: Project; onOpen?: (project: Project) => void }

export const ProjectCard = ({ project, onOpen }: Props) => {
  const badge = STATUS_CHIP[project.status]
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
          <Typography variant="h6">{project.title}</Typography>
          <Chip size="small" label={badge.label} color={badge.color} icon={badge.icon} />
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>{project.description}</Typography>
        <Stack direction="row" gap={0.5} flexWrap="wrap">
          {project.tags.map((t) => (
            <Chip key={t} size="small" label={t} variant="outlined" />
          ))}
        </Stack>
        <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
          {project.story && onOpen && (
            <Button size="small" startIcon={<InfoOutlinedIcon />} onClick={() => onOpen(project)}>Détails</Button>
          )}
          {project.href && (
            <Button size="small" variant="contained" endIcon={<LaunchIcon />} href={project.href} target="_blank" rel="noopener">Voir</Button>
          )}
          {project.repo && (
            <Button size="small" variant="outlined" startIcon={<GitHubIcon />} href={project.repo} target="_blank" rel="noopener">Code</Button>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}
