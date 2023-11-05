import { Grid, Paper, TextField, Typography } from '@mui/material'
import PokeGrid from '../../../../components/PokeGrid'
import { useContext, useState } from 'react'
import { PokedexContext } from 'contexts/PokedexProvider'
import BoxContainer from 'components/BoxContainer'

const PokedexContainer = () => {
  const { pokedex } = useContext(PokedexContext)
  const [search, setSearch] = useState('')

  const pokedexFiltered = pokedex.filter((pokemon) =>
    pokemon.toLowerCase().includes(search.toLowerCase())
  )

  const renderPokeContent = () => {
    if (!pokedex.length) {
      return (
        <Typography
          variant='h5'
          color='grey'
          padding={20}
        >
          Your pokedex is empty
        </Typography>
      )
    }

    if (!pokedexFiltered.length) {
      return (
        <Typography
          variant='h5'
          color='grey'
          paddingY={20}
        >
          Pokemon not found
        </Typography>
      )
    }

    return <PokeGrid data={pokedexFiltered} />
  }

  return (
    <BoxContainer id='PokedexContainer'>
      <Grid
        container
        gap={3}
      >
        <Grid
          item
          xs={12}
        >
          <Paper sx={{ padding: 2 }}>
            <TextField
              label='Search by name'
              fullWidth
              variant='outlined'
              onChange={(e) => setSearch(e.target.value)}
            />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {renderPokeContent()}
        </Grid>
      </Grid>
    </BoxContainer>
  )
}

export default PokedexContainer
