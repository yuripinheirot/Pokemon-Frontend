import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, IconButton } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { ColorModeContext, colorHeaderFooter } from './ThemeProvider'

export const Header = () => {
  const colorMode = React.useContext(ColorModeContext)

  return (
    <Box
      sx={{
        height: 56,
        width: '100%',
        bgcolor: colorHeaderFooter,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 1,
          bgcolor: colorHeaderFooter,
        }}
      >
        <Typography
          variant='h5'
          fontWeight={600}
          component='div'
          color='#fff'
        >
          POKEDEX
        </Typography>
        <IconButton
          sx={{ position: 'absolute', right: 10 }}
          onClick={colorMode.toggleColorMode}
        >
          {colorMode.themeMode() === 'light' ? (
            <DarkModeIcon sx={{ color: '#f2f2f2' }} />
          ) : (
            <LightModeIcon sx={{ color: '#f2f2f2' }} />
          )}
        </IconButton>
      </Toolbar>
    </Box>
  )
}
