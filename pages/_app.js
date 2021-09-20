import '../styles/globals.css'

import {ContextProvider} from '../context/common.context';
import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </ContextProvider>
  )
}

export default MyApp
