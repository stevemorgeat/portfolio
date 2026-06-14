import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useProjectFilter } from './useProjectFilter'
import type { Project } from '../types'

const sample: Project[] = [
  { title: 'A', description: '', tags: ['React', 'MUI'], status: 'live' },
  { title: 'B', description: '', tags: ['Serverless'], status: 'soon' },
]

describe('useProjectFilter', () => {
  it('liste les tags uniques triés et renvoie tout par défaut', () => {
    const { result } = renderHook(() => useProjectFilter(sample))
    expect(result.current.tags).toEqual(['MUI', 'React', 'Serverless'])
    expect(result.current.filtered).toHaveLength(2)
  })

  it('filtre par tag puis toggle pour revenir à tout', () => {
    const { result } = renderHook(() => useProjectFilter(sample))
    act(() => result.current.toggle('Serverless'))
    expect(result.current.filtered.map((p) => p.title)).toEqual(['B'])
    act(() => result.current.toggle('Serverless'))
    expect(result.current.filtered).toHaveLength(2)
  })
})
