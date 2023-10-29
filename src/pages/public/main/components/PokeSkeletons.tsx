import { Box, Grid, Paper, Skeleton, SxProps } from '@mui/material'

export const PokeCardSkeleton = () => {
  const animation = 'wave'
  return (
    <Paper sx={paperCardStyle}>
      <Grid
        container
        gap={1}
      >
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'center'}
        >
          <Skeleton
            variant='circular'
            width={80}
            height={80}
            animation={animation}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Skeleton
            variant='text'
            sx={{ fontSize: '3rem' }}
            animation={animation}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box sx={boxDescriptionStyle}>
            <Skeleton
              variant='text'
              sx={{ fontSize: '1rem' }}
              animation={animation}
            />
            <Skeleton
              variant='text'
              sx={{ fontSize: '1rem' }}
              animation={animation}
            />
            <Skeleton
              variant='text'
              sx={{ fontSize: '1rem' }}
              animation={animation}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box sx={boxButtonStyle}>
            <Skeleton
              variant='rounded'
              width={90}
              height={40}
              animation={animation}
            />

            <Skeleton
              variant='rounded'
              width={90}
              height={40}
              animation={animation}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export const PokeGridSkeleton = ({ count }: { count: number }) => {
  return (
    <Box id='PokeGrid'>
      <Grid
        container
        gap={3}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {Array.from({ length: count }).map((item, index) => (
          <Grid
            item
            key={index}
          >
            <PokeCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const paperCardStyle: SxProps = {
  padding: '20px',
  width: 200,
}

const boxDescriptionStyle: SxProps = {
  height: 70,
}

const boxButtonStyle: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 2,
}
