import { PokemonPaginatedType } from '../types/pokemon.type'
import { Box, Grid } from '@mui/material'
import { PokeCard } from './PokeCard'

export type Props = {
  data: PokemonPaginatedType
}

const PokeGrid = ({ data }: Props) => {
  return (
    <Box id='PokeGrid'>
      <Grid
        container
        gap={3}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {data.results.map((item) => (
          <Grid
            item
            key={item.name}
          >
            <PokeCard pokemonName={item.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PokeGrid
