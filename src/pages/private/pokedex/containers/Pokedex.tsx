import { Box, Grid, SxProps } from '@mui/material'
import { useQuery } from 'react-query'
import { getPokedex } from '../stores/pokedex.store'
import PokeGrid from '../../../../components/PokeGrid'
import { PokedexType } from '../types/pokedex.type'
import { LoadingPage } from 'components/LoadingPage'

const PokedexContainer = () => {
  const { data, isLoading } = useQuery<PokedexType>(['pokedex'], getPokedex)

  return !isLoading ? (
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
            {data && <PokeGrid data={data.pokedex} />}
          </Grid>
        </Grid>
      </Box>
    </Box>
  ) : (
    <LoadingPage />
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
