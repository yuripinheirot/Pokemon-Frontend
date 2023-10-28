import { Box, SxProps, Typography } from '@mui/material'
import { PokeCard } from '../components/PokeCard'
import { useEffect, useState } from 'react'
import { PokemonType } from '../types/pokemon.type'
import { MainStore } from '../stores/main.store'

export const Main = () => {
  const [pokemon, setPokemon] = useState<PokemonType>()

  useEffect(() => {
    MainStore.getPokemonByName('squirtle').then(setPokemon)
  }, [])

  return <Box sx={styleMain}>{pokemon && <PokeCard data={pokemon} />}</Box>
}

const styleMain: SxProps = {
  display: 'flex',
}
