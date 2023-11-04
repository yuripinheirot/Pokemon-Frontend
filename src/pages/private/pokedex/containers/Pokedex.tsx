import { Box, Grid, Paper, SxProps, Typography } from '@mui/material'
import PokeGrid from '../../../../components/PokeGrid'
import { LoadingPage } from 'components/LoadingPage'
import { useContext } from 'react'
import { PokedexContext } from 'contexts/PokedexProvider'

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
            {pokedex.length ? (
              <PokeGrid data={pokedex} />
            ) : (
              <Paper sx={paperEmpty}>
                <Typography variant='h5'>Your pokedex is empty.</Typography>
              </Paper>
            )}
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
const paperEmpty: SxProps = {
  padding: 6,
}

export default PokedexContainer
