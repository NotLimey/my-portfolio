import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import CursorTool from '../common/components/CursorTool'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CursorTool />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
