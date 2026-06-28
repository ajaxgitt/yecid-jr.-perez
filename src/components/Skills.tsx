import { skillGroups } from "@/constants"
import Section from "./Section"
import SectionLabel from "./SectionLabel"
import { Code2 } from "lucide-react"

const Skills = () => {
  return (
    <Section id="habilidades">
      <SectionLabel icon={<Code2 size={14} />}>
        Habilidades técnicas
      </SectionLabel>
      <div className="flex flex-col gap-4">
        {skillGroups.map(({ cat, skills }) => (
          <div key={cat}>
            <p className="text-[11px] text-slate-500 mb-2">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, index) => {
                return (
                  <span
                    key={index}
                    className="flex items-center justify-center gap-2 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs text-slate-300 px-3 py-1.5"
                  >
                    <s.icon/>
                    {s.language}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
