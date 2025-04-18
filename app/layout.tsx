import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import BackToTop from '@/components/BackToTop'
import { Suspense } from 'react'
import StagingBanner from '@/components/StagingBanner'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dronify - Professional Drone Services',
  description: 'Experience cutting-edge aerial technology and professional drone services for photography, surveying, and inspection needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        <StagingBanner />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
} 