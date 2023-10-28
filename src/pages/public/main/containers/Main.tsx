import { Box, Grid, SxProps } from '@mui/material'
import { useEffect, useState } from 'react'
import { PokemonOffsetType } from '../types/pokemon.type'
import { MainStore } from '../stores/main.store'
import PokeGrid from '../components/PokeGrid'

export const MainContainer = () => {
  const [pokemon, setPokemon] = useState<PokemonOffsetType>()

  useEffect(() => {
    MainStore.getPokemonPaginated({ limit: '10', offset: '10' }).then(
      setPokemon
    )
  }, [])

  return (
    <Box
      id='MainContainer'
      sx={mainContainerStyle}
    >
      <Grid
        container
        gap={1}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid item>{pokemon && <PokeGrid data={pokemon} />}</Grid>
      </Grid>
    </Box>
  )
}

const mainContainerStyle: SxProps = {
  paddingX: 10,
  paddingY: 4,
}
