import '../styles/globals.css'

import {ContextProvider} from '../context/common.context';
import { library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
library.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
 

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
