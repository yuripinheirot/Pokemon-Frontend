import { Header } from './components/Header'
import { Box, SxProps } from '@mui/material'
import { ThemeProviderStyle } from './components/ThemeProvider'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { MainRoutes } from './pages/public/main/Routes'

const App = () => {
  return (
    <ThemeProviderStyle>
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
            <Routes>
              <Route
                path='/*'
                element={<MainRoutes />}
              />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProviderStyle>
  )
}

const appStyle: SxProps = {
  bgcolor: 'background.default',
  minHeight: '100vh',
}
const appViewerStyle: SxProps = {
  overflow: 'auto',
  flexGrow: 1,
}

export default App
