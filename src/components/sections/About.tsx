import { about, meta } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-12 text-center">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-[var(--border)] flex items-center justify-center">
              <div className="text-7xl select-none">👨‍💻</div>
              <div className="absolute -bottom-4 -right-4 bg-[var(--accent)] text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                5+ Years Experience
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
              {meta.name} · {meta.title}
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
              {about.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]"
                >
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">✦</span>
                  <span className="text-sm text-[var(--text-muted)]">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {meta.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
