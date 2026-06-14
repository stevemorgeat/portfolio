import type { ReactElement } from 'react'
import { Chip, Skeleton } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import StarIcon from '@mui/icons-material/Star'
import { useGithubStats } from '../hooks/useGithubStats'

const LOGIN = 'stevemorgeat'

/**
 * Stats GitHub live, en chips — rendues en fragment pour s'aligner À LA SUITE
 * des boutons (GitHub / LinkedIn) dans le même Stack. API propre : api → hook → ici.
 */
export const GithubChips = () => {
  const { data, isLoading, isError } = useGithubStats(LOGIN)
  if (isError) return null

  if (isLoading) {
    return (
      <>
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} variant="rounded" width={94} height={30} />
        ))}
      </>
    )
  }

  const chip = (icon: ReactElement, label: string) => (
    <Chip icon={icon} label={label} variant="outlined" sx={{ bgcolor: 'rgba(255,255,255,0.6)' }} />
  )

  return (
    <>
      {chip(<CodeIcon />, `${data!.repoCount} repos`)}
      {chip(<PeopleAltIcon />, `${data!.followers} followers`)}
      {chip(<StarIcon />, `${data!.stars} ★`)}
    </>
  )
}
