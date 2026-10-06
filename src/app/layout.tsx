import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Balaji M — Senior Data Engineer & Full-Stack Freelancer',
  description: 'Senior Data Engineer with 5+ years building scalable data platforms on Azure, AWS, and Databricks. Available for full-stack freelance projects.',
  openGraph: {
    title: 'Balaji M — Senior Data Engineer & Full-Stack Freelancer',
    description: 'Senior Data Engineer with 5+ years building scalable data platforms on Azure, AWS, and Databricks.',
    url: 'https://balajim.dev',
    siteName: 'Balaji M',
    type: 'website',
  },
  metadataBase: new URL('https://balajim.dev'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
