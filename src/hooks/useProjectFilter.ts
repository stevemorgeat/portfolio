import { useState } from 'react'
import type { Project } from '../types'

/** Filtre des projets par tag/stack (logique isolée du rendu). */
export function useProjectFilter(projects: Project[]) {
  const [active, setActive] = useState<string | null>(null)

  const tags = [...new Set(projects.flatMap((p) => p.tags))].sort((a, b) => a.localeCompare(b))
  const filtered = active ? projects.filter((p) => p.tags.includes(active)) : projects
  const toggle = (tag: string) => setActive((prev) => (prev === tag ? null : tag))
  const clear = () => setActive(null)

  return { tags, active, toggle, clear, filtered }
}
