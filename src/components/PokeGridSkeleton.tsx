import { Box, Grid } from '@mui/material'
import { PokeCardSkeleton } from './PokeSkeleton'

export const PokeGridSkeleton = ({ count }: { count: number }) => {
  return (
    <Box id='PokeGrid'>
      <Grid
        container
        gap={3}
        alignItems={'center'}
        justifyContent={'center'}
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
