import { Dialog, DialogTitle, DialogContent, Typography, Chip, Stack, Button, Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import type { Project } from '../types'

export const ProjectDialog = ({ project, onClose }: { project: Project | null; onClose: () => void }) => (
  <Dialog open={Boolean(project)} onClose={onClose} maxWidth="sm" fullWidth>
    {project && (
      <>
        <DialogTitle sx={{ pr: 6 }}>
          {project.title}
          <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }} aria-label="Fermer">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" gap={0.5} flexWrap="wrap" sx={{ mb: 2 }}>
            {project.tags.map((t) => (
              <Chip key={t} size="small" label={t} variant="outlined" />
            ))}
          </Stack>
          {project.story && <Typography variant="body2" sx={{ mb: 2 }}>{project.story}</Typography>}
          {project.learned?.length ? (
            <>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>Ce que j'y fais / apprends</Typography>
              <Stack spacing={0.75} sx={{ mb: 2 }}>
                {project.learned.map((l, i) => (
                  <Stack key={i} direction="row" spacing={1} alignItems="flex-start">
                    <CheckCircleIcon color="primary" fontSize="small" sx={{ mt: 0.25 }} />
                    <Typography variant="body2">{l}</Typography>
                  </Stack>
                ))}
              </Stack>
            </>
          ) : null}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {project.href && (
              <Button variant="contained" endIcon={<LaunchIcon />} href={project.href} target="_blank" rel="noopener">Voir le projet</Button>
            )}
            {project.repo && (
              <Button variant="outlined" startIcon={<GitHubIcon />} href={project.repo} target="_blank" rel="noopener">Code</Button>
            )}
          </Box>
        </DialogContent>
      </>
    )}
  </Dialog>
)
