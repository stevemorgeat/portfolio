import { Paper, Typography, Chip, Stack } from '@mui/material'
import type { SkillGroup } from '../types'

export const SkillGroupCard = ({ group }: { group: SkillGroup }) => (
  <Paper sx={{ p: 2.5 }}>
    <Typography variant="overline" color="secondary.main" sx={{ fontWeight: 700 }}>{group.label}</Typography>
    <Stack direction="row" gap={0.75} flexWrap="wrap" sx={{ mt: 1 }}>
      {group.items.map((i) => (
        <Chip key={i} label={i} />
      ))}
    </Stack>
  </Paper>
)
