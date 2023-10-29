import { Box, Grid, Pagination, SxProps } from '@mui/material'
import { useEffect, useState } from 'react'
import { PokemonOffsetType } from '../types/pokemon.type'
import { MainStore } from '../stores/main.store'
import PokeGrid from '../components/PokeGrid'
import { PokeGridSkeleton } from '../components/PokeSkeletons'
import { useSearchParams } from 'react-router-dom'

export const MainContainer = () => {
  const [pokemon, setPokemon] = useState<PokemonOffsetType>()
  const [page, setPage] = useState<number>(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const limit = 12

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
    setSearchParams({ page: String(value) })
  }

  const PaginationComponent = () => {
    return (
      <Pagination
        count={pokemon?.count || limit}
        color='primary'
        page={page}
        onChange={handleChangePage}
        shape='rounded'
      />
    )
  }

  useEffect(() => {
    MainStore.getPokemonPaginated({ limit, page }).then(setPokemon)
  }, [page])

  useEffect(() => {
    const page = searchParams.get('page') || 1
    setPage(+page)
  }, [searchParams, setSearchParams])

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
