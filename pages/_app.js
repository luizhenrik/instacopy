import '../styles/globals.css'

import {ContextProvider} from '../context/common.context'; 

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
