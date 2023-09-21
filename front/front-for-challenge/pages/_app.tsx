import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import '@/styles/index.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
