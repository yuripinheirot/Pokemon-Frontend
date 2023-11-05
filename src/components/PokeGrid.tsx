import { Box, Grid, useMediaQuery } from '@mui/material'
import { PokeCard } from './PokeCard'
import { designConstants } from 'constants/design.constants'

export type Props = {
  data: string[]
}

const PokeGrid = ({ data }: Props) => {
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
