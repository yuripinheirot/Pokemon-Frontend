import React, { useContext } from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Button, IconButton, SxProps } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import pokemonLogo from '../assets/pokemon.svg'
import { useNavigate } from 'react-router-dom'

import { ColorModeContext, colorHeaderFooter } from '../contexts/ThemeProvider'
import { useKeycloak } from '@react-keycloak/web'
import { designConstants } from 'constants/design.constants'

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

        <Box sx={itemsHeaderStyle}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {colorMode.themeMode() === 'light' ? (
              <DarkModeIcon sx={iconStyle} />
            ) : (
              <LightModeIcon sx={iconStyle} />
            )}
          </IconButton>

          {keycloak.authenticated ? (
            <Box sx={actionsHeaderStyle}>
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
            </Box>
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
  justifyContent: 'space-between',
  maxWidth: designConstants.widthPage,
  margin: '0px auto',
}
const itemsHeaderStyle: SxProps = {
  display: 'flex',
  gap: 3,
}
const actionsHeaderStyle: SxProps = {
  display: 'flex',
  gap: itemsHeaderStyle.gap as number,
}
const iconStyle: SxProps = {
  color: '#f2f2f2',
}
const logoStyle: React.CSSProperties = {
  height: 40,
  cursor: 'pointer',
  padding: 10,
}
