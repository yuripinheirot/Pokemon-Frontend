import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, IconButton, SxProps } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { ColorModeContext, colorHeaderFooter } from './ThemeProvider'

export const Header = () => {
  const colorMode = React.useContext(ColorModeContext)

  return (
    <Box sx={boxStyle}>
      <Toolbar sx={toolbarStyle}>
        <Typography
          variant='h5'
          fontWeight={600}
          component='div'
          color='#fff'
        >
          POKEDEX
        </Typography>
        <IconButton
          sx={iconButtonStyle}
          onClick={colorMode.toggleColorMode}
        >
          {colorMode.themeMode() === 'light' ? (
            <DarkModeIcon sx={iconStyle} />
          ) : (
            <LightModeIcon sx={iconStyle} />
          )}
        </IconButton>
      </Toolbar>
    </Box>
  )
}

const boxStyle: SxProps = {
  width: '100%',
  bgcolor: colorHeaderFooter,
}
const toolbarStyle: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: colorHeaderFooter,
}
const iconButtonStyle: SxProps = {
  position: 'absolute',
  right: 10,
}
const iconStyle: SxProps = {
  color: '#f2f2f2',
}
