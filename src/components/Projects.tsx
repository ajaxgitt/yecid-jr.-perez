import { Pill } from "@/components/Pill"
import Section from "@/components/Section"
import SectionLabel from "@/components/SectionLabel"
import { StatCard } from "@/components/StatCard"
import { sherlockFeatures, uniProjects } from "@/constants"
import { Check, ExternalLink, Rocket } from "lucide-react"
const Projects = () => {
  return (
    <Section id="proyectos">
      <SectionLabel icon={<Rocket size={14} />}>Proyectos</SectionLabel>
      <div className="flex flex-col gap-4">
        <div className="bg-black border border-blue-900/40 rounded-xl p-5">
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
            <div className="flex items-center gap-2">
              <h3 className="flex items-center gap-2 text-base font-medium text-slate-100"> 
                <img src="https://sherlock-ts.vercel.app/svg/log.svg" alt="logo sherlock" className="h-4" />
                  Sherlock</h3>
              <span className="text-[11px] text-blue-400 bg-blue-900/25 border border-blue-800/40 px-2 py-0.5 rounded-full">
                v4.0.0
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://sherlock-ts.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={12} /> Demo
              </a>
           
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <StatCard num="250+" label="Usuarios " />
            <StatCard num="10+" label="Lenguajes" />
            <StatCard num="En vivo" label="Producción" />
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Plataforma educativa interactiva para aprender programación. Los
            usuarios avanzan a través de módulos con ejercicios evaluados
            automáticamente en tiempo real mediante casos de prueba, sin salir
            del navegador.
          </p>

          <ul className="flex flex-col gap-2 mb-4">
            {sherlockFeatures.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-xs text-slate-400"
              >
                <Check size={12} className="text-blue-400 mt-0.5 shrink-0" />{" "}
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "FastAPI",
              "PostgreSQL",
              "Docker",
            ].map((p) => (
              <Pill key={p} sm>
                {p}
              </Pill>
            ))}
          </div>
        </div>

        <div className="bg-black border border-slate-700/50 rounded-xl p-5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-slate-200">
              Proyectos universitarios
            </h3>
            <span className="text-xs text-slate-500">
              Arquitectura monolítica · Django
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Aplicaciones web desarrolladas durante la carrera usando Python y
            Django como stack principal.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {uniProjects.map((proj) => (
              <div
                key={proj.name}
                className="bg-slate-950 border border-slate-700/40 rounded-lg p-3"
              >
                <p className="text-xs font-medium text-slate-300 mb-1">
                  {proj.name}
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-2">
                  {proj.desc}
                </p>
                <div className="flex gap-1 flex-wrap">
                  {proj.pills.map((p) => (
                    <Pill key={p} sm>
                      {p}
                    </Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Projects
