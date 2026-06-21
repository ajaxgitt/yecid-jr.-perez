import { GraduationCap, Languages, Newspaper } from "lucide-react"
import Section from "./Section"
import SectionLabel from "./SectionLabel"

const Education = () => {
  return (
    <Section id="educación" className="h-screen">
      <SectionLabel icon={<GraduationCap size={14} />}>Educación</SectionLabel>
      <div className="bg-black border border-slate-700/50 rounded-xl p-5 mb-5">
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <div>
            <p className="text-sm font-medium text-slate-200">
              Ingeniería en Sistemas
            </p>
            <p className="text-xs text-blue-400 mt-1">
              Universidad Franz Tamayo — UNIFRANZ
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Santa Cruz de la Sierra, Bolivia · 8vo semestre en curso
            </p>
          </div>
          <span className="text-xs text-slate-500 whitespace-nowrap">
            2022 - presente
          </span>
        </div>
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/40">
          <Newspaper size={13} className="text-slate-500 shrink-0" />

          
          <p className="text-xs text-slate-500 leading-relaxed">
            Prototipo de dron con Arduino presentado en feria tecnológica
            universitaria ·{" "}
            
            <a
              href="https://eldeber.com.bo/te-puede-interesar/estudiante-de-unifranz-crea-drones-para-desarrollar-su-proposito_310267/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Cubierto por El Deber, enero 2023
            </a>
          </p>
        </div>
      </div>

      <div className="bg-black border border-slate-700/50 rounded-xl p-5 mb-5">
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <div>
            <p className="text-sm font-medium text-slate-200">
              Bachiller en Humanidades
            </p>
            <p className="text-xs text-blue-400 mt-1">
              Unidad Educativa Adventista Backer
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Cobija Pando, Bolivia
            </p>
          </div>
          <span className="text-xs text-slate-500 whitespace-nowrap">
            2016
          </span>
        </div>
      </div>

      <SectionLabel icon={<Languages size={14} />}>Idiomas</SectionLabel>
      <div className="flex gap-8">
        <div>
          <p className="text-sm font-medium text-slate-200">Español</p>
          <p className="text-xs text-slate-500 mt-0.5">Nativo</p>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-200">Inglés</p>
          <p className="text-xs text-slate-500 mt-0.5">
            Básico — lectura técnica
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Education