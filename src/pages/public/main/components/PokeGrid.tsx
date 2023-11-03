import { Box, Grid } from '@mui/material'
import { PokeCard } from './PokeCard'

export type Props = {
  data: string[]
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
        {data.map((item) => (
          <Grid
            item
            key={item}
          >
            <PokeCard pokemonName={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PokeGrid
