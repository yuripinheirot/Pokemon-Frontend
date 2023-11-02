import { Header } from './components/Header'
import { Box, SxProps } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { PagesRoutes } from './pages/Routes'
import { useKeycloak } from '@react-keycloak/web'
import { LoadingPage } from './components/LoadingPage'
import { useContext } from 'react'
import HttpClientProvider from './components/HttpClientProvider'
import { ThemeProviderStyle } from './components/ThemeProvider'

const App = () => {
  const { keycloak, initialized } = useKeycloak()
  const httpClient = useContext(HttpClientProvider)

  httpClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${keycloak.token}`

  return (
    <HttpClientProvider.Provider value={httpClient}>
      <ThemeProviderStyle>
        <BrowserRouter>
          <Box
            className='App'
            sx={appStyle}
          >
            <Header />
            <Box id='AppViewer'>
              {initialized ? <PagesRoutes /> : <LoadingPage />}
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeProviderStyle>
    </HttpClientProvider.Provider>
  )
}

const appStyle: SxProps = {
  bgcolor: 'background.default',
  minHeight: '100vh',
}

export default App
