import { Box, Grid, SxProps } from '@mui/material'
import PokeGrid from '../../../../components/PokeGrid'
import { useContext } from 'react'
import { PokedexContext } from 'contexts/PokedexProvider'
import PokedexEmpty from '../components/PokedexEmpty'

const PokedexContainer = () => {
  const { pokedex } = useContext(PokedexContext)

  return (
    <Box
      id='PokedexContainer'
      sx={pokedexContainerStyle}
    >
      <Box
        id='mainContainerView'
        sx={pokedexContainerView}
      >
        <Grid
          container
          gap={3}
        >
          <Grid
            item
            xs={12}
          >
            {pokedex.length ? <PokeGrid data={pokedex} /> : <PokedexEmpty />}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

const pokedexContainerStyle: SxProps = {
  paddingX: 10,
  paddingY: 4,
  display: 'flex',
  justifyContent: 'center',
}

const pokedexContainerView: SxProps = {
  maxWidth: 1200,
}

export default PokedexContainer
