import { skillGroups } from '@/data/portfolio'
import type { Skill } from '@/types'

const levelColor: Record<Skill['level'], string> = {
  expert: 'bg-indigo-500',
  proficient: 'bg-blue-400',
  familiar: 'bg-slate-400',
}

const levelLabel: Record<Skill['level'], string> = {
  expert: 'Expert',
  proficient: 'Proficient',
  familiar: 'Familiar',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-3">Skills & Technologies</h2>
          <p className="text-[var(--text-muted)]">
            From raw data ingestion to production web apps
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500" /> Expert</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400" /> Proficient</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400" /> Familiar</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <h3 className="font-semibold text-[var(--text)] mb-4">{group.category}</h3>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-2">
                    <span className="text-sm text-[var(--text-muted)]">{skill.name}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`w-2 h-2 rounded-full ${levelColor[skill.level]}`} />
                      <span className="text-xs text-[var(--text-muted)] hidden sm:inline">{levelLabel[skill.level]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
