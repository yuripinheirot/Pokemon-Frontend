import { Box, Grid, SxProps, TextField } from '@mui/material'
import PokeGrid from '../../../../components/PokeGrid'
import { useContext } from 'react'
import { PokedexContext } from 'contexts/PokedexProvider'
import PokedexEmpty from '../components/PokedexEmpty'
import BoxContainer from 'components/BoxContainer'

const PokedexContainer = () => {
  const { pokedex } = useContext(PokedexContext)

  return (
    <BoxContainer id='PokedexContainer'>
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
            <TextField />
          </Grid>
          <Grid
            item
            xs={12}
          >
            {pokedex.length ? <PokeGrid data={pokedex} /> : <PokedexEmpty />}
          </Grid>
        </Grid>
      </Box>
    </BoxContainer>
  )
}

const pokedexContainerView: SxProps = {
  maxWidth: 1200,
}

export default PokedexContainer
