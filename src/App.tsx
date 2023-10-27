import { Header } from './components/Header'
import { Box, SxProps } from '@mui/material'
import { ThemeProviderStyle } from './components/ThemeProvider'

const App = () => {
  return (
    <ThemeProviderStyle>
      <Box
        className='App'
        sx={appStyle}
      >
        <Header />
        <Box
          id='AppViewer'
          sx={appViewerStyle}
        >
          Main
        </Box>
      </Box>
    </ThemeProviderStyle>
  )
}

const appStyle: SxProps = {
  bgcolor: 'background.default',
  height: '100vh',
}
const appViewerStyle: SxProps = {
  overflow: 'auto',
  flexGrow: 1,
}

export default App
