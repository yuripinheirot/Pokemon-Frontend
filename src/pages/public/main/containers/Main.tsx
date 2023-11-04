import { Box, Fade, Grid, Pagination, SxProps } from '@mui/material'
import { useState } from 'react'
import { PokemonPaginatedType } from '../../../../types/pokemon.type'
import { getPokemonPaginated } from '../../../../stores/main.store'
import PokeGrid from '../../../../components/PokeGrid'
import { PokeGridSkeleton } from '../../../../components/PokeGridSkeleton'
import { useQuery } from 'react-query'
import { designConstants } from 'constants/design.constants'

export const MainContainer = () => {
  const [page, setPage] = useState<number>(1)
  const limit = 12

  const { isLoading, data } = useQuery<PokemonPaginatedType>({
    queryKey: ['pokemonPaginated', limit, page],
    queryFn: () => getPokemonPaginated({ limit, page }),
  })

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  const PaginationComponent = () => {
    return (
      <Pagination
        count={data?.totalPages || 100}
        color='primary'
        page={page}
        onChange={handleChangePage}
        shape='rounded'
      />
    )
  }

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
            {!isLoading && data ? (
              <PokeGrid data={data.results.map((d) => d.name)} />
            ) : (
              <Fade
                in={isLoading}
                timeout={designConstants.skeletonTimeout}
              >
                <div>
                  <PokeGridSkeleton count={limit} />
                </div>
              </Fade>
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
  maxWidth: 1200,
}
