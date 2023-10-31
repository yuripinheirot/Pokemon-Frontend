import { Box, CircularProgress, SxProps } from '@mui/material'

export const LoadingPage = () => {
  return (
    <Box sx={boxStyle}>
      <CircularProgress />
    </Box>
  )
}

const boxStyle: SxProps = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
