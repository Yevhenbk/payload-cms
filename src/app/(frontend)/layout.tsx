import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'PayloadCMS - Content Management',
    template: '%s | PayloadCMS',
  },
  description: 'Enterprise-grade content management system built with PayloadCMS and Next.js',
  keywords: ['PayloadCMS', 'CMS', 'Content Management', 'Next.js', 'React'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PayloadCMS',
    title: 'PayloadCMS - Content Management',
    description: 'Enterprise-grade content management system',
  },
}

/**
 * Root layout component with optimized font loading
 */
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
