import { Paper, Typography, Chip, Stack, Box } from '@mui/material'
import type { Job } from '../types'

export const TimelineItem = ({ job }: { job: Job }) => (
  <Paper sx={{ p: 2.5, borderLeft: `4px solid ${job.accent}`, display: 'flex', flexDirection: 'column', gap: 1 }}>
    <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={1}>
      <Typography variant="h6">
        {job.company} <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>· {job.role}</Box>
      </Typography>
      <Typography variant="body2" color="text.secondary">{job.period}</Typography>
    </Stack>
    <Typography variant="body2" color="text.secondary">{job.summary}</Typography>
    <Stack direction="row" gap={0.75} flexWrap="wrap">
      {job.tags.map((t) => (
        <Chip key={t} size="small" label={t} variant="outlined" />
      ))}
    </Stack>
  </Paper>
)
