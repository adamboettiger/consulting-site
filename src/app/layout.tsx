import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Adam Boettiger | Fractional CMO',
  description: 'Strategic marketing leadership and advisory services helping startups scale marketing for ARR and funding. Expertise in GTM strategy, demand generation, and ABM.',
  keywords: 'Fractional CMO, Marketing Strategy, GTM Strategy, Demand Generation, ABM, Marketing Automation',
  authors: [{ name: 'Adam Boettiger' }],
  openGraph: {
    title: 'Adam Boettiger | Fractional CMO',
    description: 'Strategic marketing leadership helping startups scale for ARR and funding',
    url: 'https://adamboettiger.com',
    siteName: 'Adam Boettiger',
    images: [
      {
        url: '/hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Adam Boettiger - Fractional CMO',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Boettiger | Fractional CMO',
    description: 'Strategic marketing leadership helping startups scale for ARR and funding',
    images: ['/hero.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero.jpeg" as="image" />
      </head>
      <body className="relative bg-white text-gray-900">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <BackToTop />
      </body>
    </html>
  )
}
