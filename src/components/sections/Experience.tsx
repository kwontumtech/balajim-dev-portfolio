import { experience, education } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-12 text-center">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)] md:left-8" />

          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.id} className="relative pl-12 md:pl-20">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6 top-1.5 w-3 h-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <div>
                    <span className="font-semibold text-[var(--text)]">{job.role}</span>
                    <span className="text-[var(--text-muted)]"> @ {job.company}</span>
                  </div>
                  <span className="text-sm text-[var(--text-muted)]">{job.period}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-4">{job.location}</p>

                <div className="space-y-6">
                  {job.projects.map((proj, pi) => (
                    <div key={pi} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <p className="font-medium text-sm text-[var(--text)]">{proj.name}</p>
                        {proj.client && (
                          <span className="text-xs text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">
                            {proj.client}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-1.5 mb-3">
                        {proj.bullets.map((b, bi) => (
                          <li key={bi} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                            <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">·</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      {proj.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {proj.techStack.map((t) => (
                            <span key={t} className="px-1.5 py-0.5 text-xs rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="relative pl-12 md:pl-20">
              <div className="absolute left-2.5 md:left-6 top-1.5 w-3 h-3 rounded-full border-2 border-purple-400 bg-[var(--bg)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <div>
                  <span className="font-semibold text-[var(--text)]">{education.degree}</span>
                  <span className="text-[var(--text-muted)]"> · {education.institution}</span>
                </div>
                <span className="text-sm text-[var(--text-muted)]">Class of {education.year}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">{education.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
