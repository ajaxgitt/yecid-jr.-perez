import Section from "@/components/Section"
import SectionLabel from "@/components/SectionLabel"
import { User } from "lucide-react"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="min-h-screen  bg-black text-slate-300 font-sans">
      <Navbar />
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-12">
        <Section id="perfil">
          <SectionLabel icon={<User size={14} />}>Perfil</SectionLabel>
          <p className="text-sm text-slate-400 leading-relaxed">
            Frontend specialist con sólido dominio de React y TypeScript,
            cursando el 8vo semestre de Ingeniería en Sistemas en UNIFRANZ Santa
            Cruz. A lo largo de proyectos reales para clientes de distintos
            sectores adquirí nociones prácticas de backend, infraestructura y
            despliegue en producción. Fundador de{" "}
            <a href="https://sherlock-ts.vercel.app/" target="_blank"  className="text-blue-400 cursor-pointer">Sherlock</a>, plataforma
            educativa activa con más de 250 usuarios que me llevó a resolver
            desafíos de arquitectura, servidores y ejecución segura de código.
            Me muevo mejor en el frontend pero entiendo el sistema completo.
          </p>
        </Section>
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>

      <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-slate-800 mt-4">
        <p className="text-xs text-slate-600 text-center">
          Yecid Junior Perez Paucara · Santa Cruz, Bolivia ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
export default App
