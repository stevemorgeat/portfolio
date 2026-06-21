export type GithubStats = { repos: number; stars: number; followers: number }

/**
 * Stats GitHub publiques, récupérées AU BUILD (rendu statique) → pas d'appel
 * runtime ni de rate-limit côté visiteur. Retourne null si l'API échoue (fallback).
 */
export async function getGithubStats(user = 'stevemorgeat'): Promise<GithubStats | null> {
  try {
    const headers = { Accept: 'application/vnd.github+json' }
    const u = await fetch(`https://api.github.com/users/${user}`, { headers }).then((r) => r.json())
    const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`, { headers }).then((r) => r.json())
    const stars = Array.isArray(repos) ? repos.reduce((s, r) => s + (r.stargazers_count ?? 0), 0) : 0
    return { repos: u.public_repos ?? 0, stars, followers: u.followers ?? 0 }
  } catch {
    return null
  }
}
