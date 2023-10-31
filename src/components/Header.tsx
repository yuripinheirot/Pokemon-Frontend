import React, { useContext } from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Button, IconButton, SxProps } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import pokemonLogo from '../assets/pokemon.svg'
import { useNavigate } from 'react-router-dom'

import { ColorModeContext, colorHeaderFooter } from './ThemeProvider'
import { useKeycloak } from '@react-keycloak/web'

export const Header = () => {
  const colorMode = useContext(ColorModeContext)
  const navigate = useNavigate()
  const { keycloak } = useKeycloak()

  return (
    <Box sx={boxStyle}>
      <Toolbar sx={toolbarStyle}>
        <img
          src={pokemonLogo as any}
          style={logoStyle}
          alt='logo'
          onClick={() => navigate('/')}
        />

        <Box sx={iconButtonStyle}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {colorMode.themeMode() === 'light' ? (
              <DarkModeIcon sx={iconStyle} />
            ) : (
              <LightModeIcon sx={iconStyle} />
            )}
          </IconButton>

          {keycloak.authenticated ? (
            <>
              <Button
                variant='outlined'
                onClick={() => navigate('/pokedex')}
              >
                Pokedex
              </Button>
              <Button
                variant='outlined'
                onClick={() => keycloak.logout()}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant='outlined'
              onClick={() => keycloak.login()}
            >
              Login
            </Button>
          )}
        </Box>
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
  justifyContent: 'center',
}
const iconButtonStyle: SxProps = {
  display: 'flex',
  position: 'absolute',
  right: 25,
  gap: 2,
}
const iconStyle: SxProps = {
  color: '#f2f2f2',
}
const logoStyle: React.CSSProperties = {
  height: 40,
  cursor: 'pointer',
  padding: 10,
}
