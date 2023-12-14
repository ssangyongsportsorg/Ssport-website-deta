import '@/styles/globals.css'
import { useRouter } from "next/router";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // p
import { useEffect } from "react";
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';
NProgress.configure({ showSpinner: false });
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
   const router = useRouter();

  // Integrate nprogress
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // 检查是否是 RestrictedPage，如果是，则不使用 app.tsx
  if (Component.name === 'support') {
    return (
      <div>
        <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Component {...pageProps} />
      </div>
    );
  }

  
  return (
    <div>
      
        <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <SessionProvider session={session}>
          <Head />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
    
    </div>
  );
}
