import { meta } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} {meta.name}. All rights reserved.
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          Built with Next.js & Tailwind CSS · Deployed on Cloudflare Pages
        </p>
      </div>
    </footer>
  )
}
