import '../styles/globals.css'
// import {DataProvider} from '../store/GlobalState'
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
