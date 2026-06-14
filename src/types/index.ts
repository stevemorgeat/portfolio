export interface Job {
  company: string
  role: string
  period: string
  summary: string
  tags: string[]
  accent: string
}

export type ProjectStatus = 'live' | 'private' | 'soon'

export interface Project {
  title: string
  description: string
  tags: string[]
  status: ProjectStatus
  /** URL publique (si status live). */
  href?: string
  /** Lien repo public éventuel. */
  repo?: string
}

export interface SkillGroup {
  label: string
  items: string[]
}
