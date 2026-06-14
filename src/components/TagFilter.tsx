import { Stack, Chip } from '@mui/material'

type Props = { tags: string[]; active: string | null; onToggle: (tag: string) => void; onClear: () => void }

export const TagFilter = ({ tags, active, onToggle, onClear }: Props) => (
  <Stack direction="row" gap={0.75} flexWrap="wrap" sx={{ mb: 3 }}>
    <Chip label="Tout" color={active === null ? 'primary' : 'default'} variant={active === null ? 'filled' : 'outlined'} onClick={onClear} />
    {tags.map((t) => (
      <Chip key={t} label={t} color={active === t ? 'primary' : 'default'} variant={active === t ? 'filled' : 'outlined'} onClick={() => onToggle(t)} />
    ))}
  </Stack>
)
