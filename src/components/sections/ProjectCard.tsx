import type { Project } from '@/types'

interface Props {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured }: Props) {
  return (
    <div
      className={`group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--accent)]/50 transition-all duration-300 flex flex-col ${
        featured ? 'hover:shadow-lg hover:shadow-indigo-500/10' : ''
      }`}
    >
      {project.client && (
        <p className="text-xs text-[var(--accent)] font-medium mb-2 uppercase tracking-wider">
          {project.client}
        </p>
      )}

      <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mb-4 space-y-1.5">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
              <span className="text-green-500 mt-0.5 flex-shrink-0">→</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 6 && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]">
            +{project.techStack.length - 6} more
          </span>
        )}
      </div>

      {(project.liveUrl || project.repoUrl) && (
        <div className="flex gap-3 mt-4 pt-4 border-t border-[var(--border)]">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs text-[var(--accent)] hover:underline flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs text-[var(--accent)] hover:underline flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Source
            </a>
          )}
        </div>
      )}
    </div>
  )
}
