import '../styles/globals.css'

import {ContextProvider} from '../context/common.context';
import { AnimatePresence } from 'framer-motion'

import { Provider } from 'next-auth/client'


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <ContextProvider>
        <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} />
        </AnimatePresence>
      </ContextProvider>
    </Provider>
  )
}

export default MyApp
