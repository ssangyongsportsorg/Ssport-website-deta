import dynamic from 'next/dynamic'
import { RootProvider } from 'next-docs-ui/provider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import 'next-docs-ui/style.css'
import '@/styles/globals.css'
import Footer from '@/pages/components/footer'

export default function RootLayout({ children }) {
  const CrispWithNoSSR = dynamic(
    () => import('./components/crisp')
  )

  return (
    <html lang="zh-tw">
    <CrispWithNoSSR />
    <body>
<RootProvider>        {children}</RootProvider>
    </body>
          <Footer />   

    </html>
  )
}
