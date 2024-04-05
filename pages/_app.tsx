import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()
  const isRestrictedRoute = router.pathname.startsWith('/support')

  return (
    <div>
      <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <SessionProvider session={session}>
        {!isRestrictedRoute && <Head />}
        {!isRestrictedRoute && <br />}
        {!isRestrictedRoute && <br />}
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </div>
  )
}