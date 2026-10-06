import { certifications } from '@/data/portfolio'

const issuerColor: Record<string, string> = {
  Databricks: 'text-orange-500',
  'Amazon Web Services': 'text-yellow-500',
  Snowflake: 'text-blue-400',
  'Microsoft / Koenig': 'text-blue-500',
}

export default function Certifications() {
  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-8 text-center">Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center flex-shrink-0 text-lg">
                🏅
              </div>
              <div>
                <p className="font-medium text-sm text-[var(--text)]">{cert.name}</p>
                <p className={`text-xs mt-0.5 ${issuerColor[cert.issuer] ?? 'text-[var(--text-muted)]'}`}>
                  {cert.issuer}{cert.year ? ` · ${cert.year}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
