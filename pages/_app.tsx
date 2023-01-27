import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Titillium_Web, Oxygen} from '@next/font/google'

const titillium = Titillium_Web({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-titillium'
})

const oxygen = Oxygen({
  weight:['400', '700'],
  subsets:['latin'],
  variable: '--font-oxygen'
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${oxygen.variable} ${titillium.variable} font-sans dark:bg-zinc-900 w-full px-20 max-w-screen-2xl`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
