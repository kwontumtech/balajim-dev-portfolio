import { meta } from '@/data/portfolio'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--bg)]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Gradient blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 dark:bg-indigo-400/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] text-xs text-[var(--text-muted)] mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for freelance projects
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-4 tracking-tight">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            {meta.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-[var(--text-muted)] mb-2">
          {meta.title}
        </p>
        <p className="text-lg text-[var(--accent)] mb-6 font-medium">
          {meta.subtitle}
        </p>
        <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
          {meta.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-secondary)] font-medium transition-colors"
          >
            Hire Me
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors underline underline-offset-4"
          >
            {meta.email}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] animate-bounce">
        <span className="text-xs">scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
