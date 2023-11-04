import { Grid, Paper, TextField } from '@mui/material'
import PokeGrid from '../../../../components/PokeGrid'
import { useContext, useState } from 'react'
import { PokedexContext } from 'contexts/PokedexProvider'
import PokedexEmpty from '../components/PokedexEmpty'
import BoxContainer from 'components/BoxContainer'

const PokedexContainer = () => {
  const { pokedex } = useContext(PokedexContext)
  const [search, setSearch] = useState('')

  const pokedexFiltered = pokedex.filter((pokemon) =>
    pokemon.toLowerCase().includes(search.toLowerCase())
  )

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
        >
          {pokedex.length ? (
            <PokeGrid data={pokedexFiltered} />
          ) : (
            <PokedexEmpty />
          )}
        </Grid>
      </Grid>
    </BoxContainer>
  )
}

export default PokedexContainer
