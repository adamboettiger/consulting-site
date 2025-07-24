import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Adam Boettiger | Fractional CMO',
  description: 'Helping startups scale marketing for ARR and funding',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="relative bg-white text-gray-900">
        <Navbar />
        <main className="pt-20">{children}</main>
        <BackToTop />
      </body>
    </html>
  )
}
