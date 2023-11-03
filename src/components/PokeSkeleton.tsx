import { Box, Fade, Grid, Paper, Skeleton, SxProps } from '@mui/material'
import { PokeCardFail } from './PokeCardFail'
import { designConstants } from 'constants/design.constants'

type PokeCardSkeletonProps = {
  failed?: boolean
}

export const PokeCardSkeleton = ({ failed }: PokeCardSkeletonProps) => {
  return (
    <Paper sx={paperCardStyle}>
      {!failed ? (
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
              animation={designConstants.skeletonAnimation}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Skeleton
              variant='text'
              sx={{ fontSize: '3rem' }}
              animation={designConstants.skeletonAnimation}
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
                animation={designConstants.skeletonAnimation}
              />
              <Skeleton
                variant='text'
                sx={{ fontSize: '1rem' }}
                animation={designConstants.skeletonAnimation}
              />
              <Skeleton
                variant='text'
                sx={{ fontSize: '1rem' }}
                animation={designConstants.skeletonAnimation}
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
                animation={designConstants.skeletonAnimation}
              />

              <Skeleton
                variant='rounded'
                width={90}
                height={40}
                animation={designConstants.skeletonAnimation}
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Fade
          in={failed}
          timeout={designConstants.skeletonTimeout}
        >
          <div>
            <PokeCardFail />
          </div>
        </Fade>
      )}
    </Paper>
  )
}

const paperCardStyle: SxProps = {
  padding: '20px',
  width: 200,
  height: 300,
}
const boxDescriptionStyle: SxProps = {
  height: 70,
}
const boxButtonStyle: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 2,
}
