import { useGithubStats } from '../hooks/useGithubStats'
import { GithubStatsCard } from './GithubStatsCard'

const LOGIN = 'stevemorgeat'

/** Conteneur : branche le hook (TanStack Query) au composant pur. */
export const GithubStats = () => {
  const { data, isLoading, isError } = useGithubStats(LOGIN)

  return (
    <GithubStatsCard
      login={LOGIN}
      profileUrl={`https://github.com/${LOGIN}`}
      name={data?.user.name ?? undefined}
      avatarUrl={data?.user.avatar_url}
      repoCount={data?.repoCount ?? 0}
      followers={data?.followers ?? 0}
      stars={data?.stars ?? 0}
      topRepos={(data?.top ?? []).map((r) => ({
        name: r.name,
        url: r.html_url,
        stars: r.stargazers_count,
        description: r.description,
        language: r.language,
      }))}
      status={isLoading ? 'loading' : isError ? 'error' : 'ready'}
    />
  )
}
