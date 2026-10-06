import { meta, socialLinks } from '@/data/portfolio'

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Email: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  GitHub: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-3">Get In Touch</h2>
          <p className="text-[var(--text-muted)]">
            Open to full-stack freelance projects, data engineering consulting, or just a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="font-semibold text-[var(--text)] mb-4">Connect with me</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg border border-[var(--border)] group-hover:border-[var(--accent)]/50 flex items-center justify-center transition-colors flex-shrink-0">
                      {socialIcons[link.platform] ?? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm">{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Based in <strong className="text-[var(--text)]">{meta.location}</strong>. Available for remote freelance work globally.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-[var(--text-muted)]">Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-semibold text-[var(--text)] mb-4">Send a message</h3>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium text-sm transition-colors"
              >
                Send Message
              </button>
              <p className="text-xs text-center text-[var(--text-muted)]">
                Or email directly at{' '}
                <a href={`mailto:${meta.email}`} className="text-[var(--accent)] hover:underline">
                  {meta.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
