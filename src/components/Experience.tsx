import { Pill } from "@/components/Pill"
import Section from "@/components/Section"
import SectionLabel from "@/components/SectionLabel"
import { experiences } from "@/constants"
import { Briefcase } from "lucide-react"

const Experience = () => {
  return (
    <Section id="experiencia">
      <SectionLabel icon={<Briefcase size={14} />}>Experiencia</SectionLabel>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div key={exp.role} className="pl-4 border-l border-slate-700/60">
            <div className="flex justify-between items-start gap-2 flex-wrap mb-1">
              <span className="text-sm font-medium text-slate-200">
                {exp.role}
              </span>
              <span className="text-xs text-slate-500 whitespace-nowrap">
                {exp.date}
              </span>
            </div>
            <p className="text-xs text-blue-400 mb-2">{exp.sector}</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              {exp.desc}
            </p>
            <div className="flex  flex-wrap gap-1.5">
              {exp.pills.map((p, index) => {
                return (
                  <Pill key={index} sm>
                    <div className="flex items-center gap-2">
                      <p.icon width="10" height="10" />
                      {p.language}
                    </div>
                  </Pill>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience
