import '../styles/globals.css
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
   const router = useRouter();

  // Integrate nprogress
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
      
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div
    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    aria-hidden="true"
  >
    <div
      className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
    />
  
  
        <SessionProvider session={session}>
          <Head />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
    
</div></div>

    </div>
  );
}
