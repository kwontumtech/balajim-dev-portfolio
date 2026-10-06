import { projects } from '@/data/portfolio'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-3">Featured Projects</h2>
          <p className="text-[var(--text-muted)]">
            Enterprise data platforms and full-stack applications I&apos;ve built
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {others.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
