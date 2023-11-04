import { Header } from './components/Header'
import { Box, SxProps } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { PagesRoutes } from './pages/Routes'
import { useKeycloak } from '@react-keycloak/web'
import { LoadingPage } from './components/LoadingPage'
import { AppProviders } from './contexts'

const App = () => {
  const { initialized } = useKeycloak()

  return (
    <AppProviders>
      <BrowserRouter>
        <Box
          className='App'
          sx={appStyle}
        >
          <Header />
          <Box
            id='AppViewer'
            sx={appViewerStyle}
          >
            {initialized ? <PagesRoutes /> : <LoadingPage />}
          </Box>
        </Box>
      </BrowserRouter>
    </AppProviders>
  )
}

const appStyle: SxProps = {
  bgcolor: 'background.default',
  minHeight: '100vh',
}

const appViewerStyle: SxProps = {
  display: 'flex',
  justifyContent: 'center',
}

export default App
