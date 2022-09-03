import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../styles/globals.css'
 

type NextPageWithLayout = NextPage

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}

export default MyApp
