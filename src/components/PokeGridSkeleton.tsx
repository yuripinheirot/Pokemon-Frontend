import { Box, Grid } from '@mui/material'
import { PokeCardSkeleton } from './PokeSkeleton'
import { designConstants } from 'constants/design.constants'

export const PokeGridSkeleton = ({ count }: { count: number }) => {
  return (
    <Box id='PokeGrid'>
      <Grid
        container
        gap={designConstants.pokeGrid.gap}
        justifyContent={designConstants.pokeGrid.justifyContent}
        alignItems={designConstants.pokeGrid.alignItems}
      >
        {Array.from({ length: count }).map((item, index) => (
          <Grid
            item
            key={index}
          >
            <PokeCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
