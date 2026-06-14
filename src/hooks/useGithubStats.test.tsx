import type { ReactNode } from 'react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGithubStats } from './useGithubStats'

const wrapper = ({ children }: { children: ReactNode }) => {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>
}

afterEach(() => vi.unstubAllGlobals())

describe('useGithubStats', () => {
  it('agrège user + repos : somme des stars, top sans les forks', async () => {
    const user = { login: 'x', name: 'X', avatar_url: '', html_url: '', public_repos: 3, followers: 5, bio: null }
    const repos = [
      { name: 'a', html_url: '', description: null, stargazers_count: 10, language: 'TS', fork: false },
      { name: 'fork', html_url: '', description: null, stargazers_count: 99, language: 'TS', fork: true },
      { name: 'b', html_url: '', description: null, stargazers_count: 2, language: 'JS', fork: false },
    ]
    vi.stubGlobal(
      'fetch',
      vi.fn((url: string) =>
        Promise.resolve({ ok: true, json: () => Promise.resolve(url.includes('/repos') ? repos : user) } as Response),
      ),
    )

    const { result } = renderHook(() => useGithubStats('x'), { wrapper })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.stars).toBe(111)
    expect(result.current.data?.followers).toBe(5)
    expect(result.current.data?.top.map((r) => r.name)).toEqual(['a', 'b'])
  })
})
