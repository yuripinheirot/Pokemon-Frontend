import { Paper } from '@mui/material'
import { useKeycloak } from '@react-keycloak/web'
import React from 'react'

const PokedexContainer = () => {
  const { keycloak, initialized } = useKeycloak()

  return <Paper>PokedexContainer</Paper>
}

export default PokedexContainer
