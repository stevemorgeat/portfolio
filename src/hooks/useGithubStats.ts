import { useQuery } from '@tanstack/react-query'
import { fetchUser, fetchRepos } from '../api/github'

/** Stats GitHub agrégées (user + repos) via TanStack Query. */
export function useGithubStats(login: string) {
  return useQuery({
    queryKey: ['github', login],
    queryFn: async () => {
      const [user, repos] = await Promise.all([fetchUser(login), fetchRepos(login)])
      const stars = repos.reduce((acc, r) => acc + r.stargazers_count, 0)
      const top = repos
        .filter((r) => !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 3)
      return { user, stars, top, repoCount: user.public_repos, followers: user.followers }
    },
    staleTime: 1000 * 60 * 30,
    retry: 1,
  })
}
