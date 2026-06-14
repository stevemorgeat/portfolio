import type { ReactNode } from 'react'
import { Paper, Box, Stack, Avatar, Typography, Link, Skeleton, Alert, Chip, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import GitHubIcon from '@mui/icons-material/GitHub'

export interface TopRepo {
  name: string
  url: string
  stars: number
  description?: string | null
  language?: string | null
}

export interface GithubStatsCardProps {
  login: string
  profileUrl: string
  name?: string
  avatarUrl?: string
  repoCount: number
  followers: number
  stars: number
  topRepos: TopRepo[]
  status: 'loading' | 'error' | 'ready'
}

const Stat = ({ label, value }: { label: string; value: ReactNode }) => (
  <Box sx={{ textAlign: 'center', flex: 1 }}>
    <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>{value}</Typography>
    <Typography variant="caption" color="text.secondary">{label}</Typography>
  </Box>
)

export const GithubStatsCard = (p: GithubStatsCardProps) => {
  const num = (v: number) => (p.status === 'loading' ? <Skeleton width={32} sx={{ mx: 'auto' }} /> : v)

  return (
    <Paper sx={{ p: 3, boxShadow: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Avatar src={p.avatarUrl} alt={p.login}><GitHubIcon /></Avatar>
        <Box>
          <Typography variant="h6">{p.name ?? p.login}</Typography>
          <Link href={p.profileUrl} target="_blank" rel="noopener">@{p.login}</Link>
        </Box>
      </Stack>

      {p.status === 'error' ? (
        <Alert severity="info">Stats GitHub momentanément indisponibles (quota de l'API atteint).</Alert>
      ) : (
        <>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} sx={{ mb: p.topRepos.length ? 2 : 0 }}>
            <Stat label="repos publics" value={num(p.repoCount)} />
            <Stat label="followers" value={num(p.followers)} />
            <Stat label="★ stars" value={num(p.stars)} />
          </Stack>
          {p.topRepos.length > 0 && (
            <Stack spacing={1.25}>
              {p.topRepos.map((r) => (
                <Box key={r.name} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, alignItems: 'center' }}>
                  <Box sx={{ minWidth: 0 }}>
                    <Link href={r.url} target="_blank" rel="noopener" sx={{ fontWeight: 600 }}>{r.name}</Link>
                    {r.description && (
                      <Typography variant="caption" color="text.secondary" noWrap sx={{ display: 'block' }}>{r.description}</Typography>
                    )}
                  </Box>
                  <Chip size="small" icon={<StarIcon />} label={r.stars} />
                </Box>
              ))}
            </Stack>
          )}
        </>
      )}
    </Paper>
  )
}
