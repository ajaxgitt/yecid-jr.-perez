import {
  DjangoSvg,
  DockerSvg,
  FastAPISvg,
  GitHubSvg,
  GitSvg,
  JavaScriptSvg,
  PostgreSQLSvg,
  PythonSvg,
  ReactSvg,
  TailwindSvg,
  TypescriptSvg,
} from "@/components/LanguagesSvg"
import type { ExpItem, NavSection, UniProject } from "@/types"
import { Briefcase, Code2, GraduationCap, Rocket, User } from "lucide-react"

export const NAV_SECTIONS: NavSection[] = [
  { id: "perfil", label: "Perfil", icon: <User size={13} /> },
  { id: "experiencia", label: "Experiencia", icon: <Briefcase size={13} /> },
  { id: "proyectos", label: "Proyectos", icon: <Rocket size={13} /> },
  { id: "habilidades", label: "Habilidades", icon: <Code2 size={13} /> },
  { id: "educación", label: "Educación", icon: <GraduationCap size={13} /> },
]

export const experiences: ExpItem[] = [
  {
    role: "Frontend Developer Lead",
    sector: "Freelance · Sector salud",
    date: "Ene 2025 - Ene 2026",
    desc: "Lideré el desarrollo frontend completo de una aplicación web. Responsable de arquitectura de componentes, diseño de interfaces y entrega final del producto.",
    pills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    sector: "Freelance · Sector tecnológico",
    date: "Nov 2024",
    desc: "Desarrollo del frontend completo de una aplicación para startup. Implementación de interfaces según requerimientos del cliente con entrega en tiempo.",
    pills: ["React", "JavaScript", "Tailwind CSS"],
  },
]

export const sherlockFeatures: string[] = [
  "Ejecución y evaluación de código en tiempo real con verificación automática por casos de prueba",
  "Soporte para 10+ lenguajes: Python, JavaScript, C, C++, Rust, Go, Java, PHP, C# y SQL",
  "Módulos de aprendizaje progresivo con lecciones adaptadas por nivel",
  "Comunidad integrada: compartir soluciones y colaboración entre usuarios",
  "Infraestructura para ejecución aislada y segura de código en el servidor",
]

export const uniProjects: UniProject[] = [
  {
    name: "Plataforma de encuestas",
    desc: "Creación, publicación y análisis de encuestas con resultados en tiempo real.",
    pills: ["Django"],
  },
  {
    name: "CRM",
    desc: "Gestión de contactos, seguimiento de interacciones y reportes para equipos comerciales.",
    pills: ["Django"],
  },
  {
    name: "Marketplace",
    desc: "Plataforma de compra/venta con catálogo de productos y gestión de usuarios.",
    pills: ["Django"],
  },
  {
    name: "Reconocimiento facial",
    desc: "Identificación de personas mediante visión por computadora integrada en app web.",
    pills: ["Django", "OpenCV"],
  },
]

export const skillGroups = [
  {
    cat: "Frontend — principal",
    skills: [
      {
        language: "JavaScript",
        icon: JavaScriptSvg,
      },
      {
        language: "TypeScript",
        icon: TypescriptSvg,
      },
      {
        language: "React",
        icon: ReactSvg,
      },
      {
        language: "Tailwind CSS",
        icon: TailwindSvg,
      },
    ],
  },
  {
    cat: "Backend — nociones prácticas",
    skills: [
      {
        language: "Python",
        icon: PythonSvg,
      },
      {
        language: "FastAPI",
        icon: FastAPISvg,
      },
      {
        language: "Django",
        icon: DjangoSvg,
      },
      {
        language: "PostgreSQL",
        icon: PostgreSQLSvg,
      },
    ],
  },
  {
    cat: "Infraestructura y herramientas",
    skills: [
      {
        language: "Docker",
        icon: DockerSvg,
      },
      {
        language: "Git",
        icon: GitSvg,
      },
      {
        language: "GitHub",
        icon: GitHubSvg,
      },
    ],
  },
]
