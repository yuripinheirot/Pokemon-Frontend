import { PokemonOffsetType } from '../types/pokemon.type'
import { Box, Grid, SxProps } from '@mui/material'
import { PokeCard } from './PokeCard'

export type Props = {
  data: PokemonOffsetType
}

const PokeGrid = ({ data }: Props) => {
  return (
    <Box id='PokeGrid'>
      <Grid
        container
        gap={1}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {data.results.map((item) => (
          <Grid
            item
            key={item.id}
          >
            <PokeCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PokeGrid
