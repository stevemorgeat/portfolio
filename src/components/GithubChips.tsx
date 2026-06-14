import type { ReactElement } from 'react'
import { Stack, Chip, Skeleton } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import StarIcon from '@mui/icons-material/Star'
import { useGithubStats } from '../hooks/useGithubStats'

const LOGIN = 'stevemorgeat'

/** Stats GitHub live, en chips discrets (intro). API propre : api → hook → ce composant. */
export const GithubChips = () => {
  const { data, isLoading, isError } = useGithubStats(LOGIN)
  if (isError) return null

  if (isLoading) {
    return (
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} variant="rounded" width={94} height={28} />
        ))}
      </Stack>
    )
  }

  const chip = (icon: ReactElement, label: string) => (
    <Chip size="small" icon={icon} label={label} variant="outlined" sx={{ bgcolor: 'rgba(255,255,255,0.6)' }} />
  )

  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
      {chip(<CodeIcon />, `${data!.repoCount} repos`)}
      {chip(<PeopleAltIcon />, `${data!.followers} followers`)}
      {chip(<StarIcon />, `${data!.stars} ★`)}
    </Stack>
  )
}
