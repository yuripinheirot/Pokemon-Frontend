import { Paper, Typography, SxProps } from '@mui/material'
import React from 'react'

const PokedexEmpty = () => {
  return (
    <Paper
      sx={paperEmpty}
      elevation={0}
    >
      <Typography variant='h5'>Your pokedex is empty.</Typography>
    </Paper>
  )
}

export default PokedexEmpty

const paperEmpty: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 600,
  height: 400,
}
