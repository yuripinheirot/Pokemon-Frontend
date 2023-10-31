import { Box, Grid, Pagination, SxProps } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { PokemonPaginatedType } from '../types/pokemon.type'
import { MainStore } from '../stores/main.store'
import PokeGrid from '../components/PokeGrid'
import { PokeGridSkeleton } from '../components/PokeSkeletons'

export const MainContainer = () => {
  const [pokemonPaginated, setPokemonPaginated] =
    useState<PokemonPaginatedType>()
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  const limit = 12

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  const fetchData = useCallback(() => {
    setLoading(true)

    MainStore.getPokemonPaginated({ limit, page })
      .then(setPokemonPaginated)
      .finally(() => setLoading(false))
  }, [page])

  const PaginationComponent = () => {
    return (
      <Pagination
        count={pokemonPaginated?.totalPages || 10}
        color='primary'
        page={page}
        onChange={handleChangePage}
        shape='rounded'
      />
    )
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

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
            {!loading && pokemonPaginated ? (
              <PokeGrid data={pokemonPaginated} />
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
