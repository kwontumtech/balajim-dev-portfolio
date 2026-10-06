export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl?: string
  liveUrl?: string
  repoUrl?: string
  featured: boolean
  client?: string
  highlights?: string[]
}

export interface Skill {
  name: string
  level: 'expert' | 'proficient' | 'familiar'
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}

export interface Certification {
  name: string
  issuer: string
  year?: string
}

export interface ExperienceEntry {
  id: string
  company: string
  role: string
  period: string
  location: string
  projects: {
    name: string
    client?: string
    techStack: string[]
    bullets: string[]
  }[]
}

export interface SocialLink {
  platform: string
  url: string
}
