import '../styles/globals.css'
import Layout from '../components/Layout'
import Providers from '../provider'
import DarkModeBtt from '../components/DarkModeBtt'
import { Box } from '@mui/material'

function MyApp({ Component, pageProps }) {

  return(
    <Providers>
      <Layout>
        <Box sx={{width: "100%", height: "100%", backgroundColor: "backColor"}} >
          <Component {...pageProps} />
        </Box>
      </Layout>
    </Providers>
  )

}

export default MyApp
