export interface NavSection {
  id: string
  label: string
  icon: React.ReactNode
}

export interface ExpItem {
  role: string
  sector: string
  date: string
  desc: string
  pills: string[]
}

export interface UniProject {
  name: string
  desc: string
  pills: string[]
}

export interface SkillGroup {
  cat: string
  skills: {
    language: string
    icon: string
  }[]
}
