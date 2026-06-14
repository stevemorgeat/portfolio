const BASE = 'https://api.github.com'

export interface GithubUser {
  login: string
  name: string | null
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  bio: string | null
}

export interface GithubRepo {
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  fork: boolean
}

export async function fetchUser(login: string): Promise<GithubUser> {
  const res = await fetch(`${BASE}/users/${login}`)
  if (!res.ok) throw new Error(`GitHub user ${res.status}`)
  return res.json()
}

export async function fetchRepos(login: string): Promise<GithubRepo[]> {
  const res = await fetch(`${BASE}/users/${login}/repos?per_page=100&sort=updated`)
  if (!res.ok) throw new Error(`GitHub repos ${res.status}`)
  return res.json()
}
