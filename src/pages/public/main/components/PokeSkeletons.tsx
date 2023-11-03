import {
  Box,
  CardMedia,
  Fade,
  Grid,
  Paper,
  Skeleton,
  SxProps,
  Typography,
} from '@mui/material'
import pokemonFailImage from '../../../../assets/pokemon-fail.svg'

type PokeCardSkeletonProps = {
  failed?: boolean
}

export const PokeCardFail = () => {
  return (
    <Grid
      container
      gap={3}
    >
      <Grid
        item
        xs={12}
      >
        <CardMedia
          component='img'
          image={pokemonFailImage as any}
          sx={imageStyle}
        />
      </Grid>
      <Grid
        item
        xs={12}
        display={'flex'}
        marginTop={3}
      >
        <Typography
          variant='overline'
          textAlign='center'
          width={'100%'}
        >
          Fail to load pokemon :(
        </Typography>
      </Grid>
    </Grid>
  )
}

export const PokeCardSkeleton = ({ failed }: PokeCardSkeletonProps) => {
  const animation = 'wave'
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
      ) : (
        <Fade
          in={failed}
          timeout={600}
        >
          <div>
            <PokeCardFail />
          </div>
        </Fade>
      )}
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

const imageStyle: SxProps = {
  objectFit: 'contain',
  height: 180,
}
