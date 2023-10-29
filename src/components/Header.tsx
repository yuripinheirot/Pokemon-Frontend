import React, { useContext } from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, IconButton, SxProps } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import pokemonLogo from '../assets/pokemon.svg'
import { useNavigate } from 'react-router-dom'

import { ColorModeContext, colorHeaderFooter } from './ThemeProvider'

export const Header = () => {
  const colorMode = useContext(ColorModeContext)
  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/?page=1')
  }

  return (
    <Box sx={boxStyle}>
      <Toolbar sx={toolbarStyle}>
        <img
          src={pokemonLogo as any}
          style={logoStyle}
          alt='logo'
          onClick={goToMain}
        />
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
const logoStyle: React.CSSProperties = {
  height: 40,
  cursor: 'pointer',
  padding: 10,
}
