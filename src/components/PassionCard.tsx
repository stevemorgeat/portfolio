import { Paper, Typography, Stack, Chip, Box } from '@mui/material'
import type { Passion } from '../data/passions'

export const PassionCard = ({ passion }: { passion: Passion }) => (
  <Paper sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
    <Box sx={{ fontSize: 32, lineHeight: 1 }}>{passion.icon}</Box>
    <Typography variant="h6">{passion.title}</Typography>
    <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>{passion.text}</Typography>
    <Stack direction="row" gap={0.5} flexWrap="wrap">
      {passion.tags.map((t) => (
        <Chip key={t} size="small" label={t} variant="outlined" />
      ))}
    </Stack>
  </Paper>
)
