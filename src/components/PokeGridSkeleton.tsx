import { Box, Grid, useMediaQuery } from '@mui/material'
import { PokeCardSkeleton } from './PokeSkeleton'
import { designConstants } from 'constants/design.constants'

export const PokeGridSkeleton = ({ count }: { count: number }) => {
  const isMobilePage = useMediaQuery(designConstants.mediaQueryWidthPageMobile)

  return (
    <Box id='PokeGrid'>
      <Grid
        container
        gap={designConstants.pokeGrid.gap}
        justifyContent={
          isMobilePage ? 'center' : designConstants.pokeGrid.justifyContent
        }
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
