import { Box, Grid, Pagination, SxProps } from '@mui/material'
import { useEffect, useState } from 'react'
import { PokemonOffsetType } from '../types/pokemon.type'
import { MainStore } from '../stores/main.store'
import PokeGrid from '../components/PokeGrid'
import { PokeGridSkeleton } from '../components/PokeCardSkeleton'

export const MainContainer = () => {
  const [pokemon, setPokemon] = useState<PokemonOffsetType>()
  const [currentPage, setCurrentPage] = useState<number>(1)

  const limit = 12
  const offset = 1

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value)
  }

  const PaginationComponent = () => {
    return (
      <Pagination
        count={pokemon?.count || limit}
        color='primary'
        page={currentPage}
        onChange={handleChangePage}
        shape='rounded'
      />
    )
  }

  useEffect(() => {
    MainStore.getPokemonPaginated({ limit, offset }).then(setPokemon)
  }, [])

  return (
    <Box
      id='MainContainer'
      sx={mainContainerStyle}
    >
      <Box
        id='mainContainerView'
        sx={mainContainerView}
      >
        <Grid
          container
          gap={3}
        >
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'center'}
          >
            <PaginationComponent />
          </Grid>
          <Grid
            item
            xs={12}
          >
            {pokemon ? (
              <PokeGrid data={pokemon} />
            ) : (
              <PokeGridSkeleton count={limit} />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'center'}
          >
            <PaginationComponent />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

const mainContainerStyle: SxProps = {
  paddingX: 10,
  paddingY: 4,
  display: 'flex',
  justifyContent: 'center',
}

const mainContainerView: SxProps = {
  maxWidth: 1024,
}
