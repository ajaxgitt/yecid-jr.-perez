import Section from "@/components/Section"
import SectionLabel from "@/components/SectionLabel"
import { User } from "lucide-react"

const IntroProfile = () => {
  return (
    <Section id="perfil" className="relative">
      <SectionLabel icon={<User size={14} />}>Perfil</SectionLabel>
      <p className="text-sm text-slate-400 leading-relaxed">
        Desarrollador Frontend con buen dominio de React y TypeScript, cursando
        el 9no semestre de Ingeniería en Sistemas en UNIFRANZ Santa Cruz. A lo
        largo de proyectos reales para clientes de distintos sectores adquirí
        nociones prácticas de backend, infraestructura y despliegue en
        producción. Fundador de{" "}
        <a
          href="https://sherlock-ts.vercel.app/"
          target="_blank"
          className="text-blue-400 cursor-pointer"
        >
          Sherlock
        </a>
        , plataforma educativa activa con más de 250 usuarios, donde resolví
        desafíos de arquitectura, gestión de servidores y ejecución segura de
        código. Destaco en el frontend, pero con una sólida comprensión de todo
        el ciclo de desarrollo.
      </p>
    </Section>
  )
}

export default IntroProfile
