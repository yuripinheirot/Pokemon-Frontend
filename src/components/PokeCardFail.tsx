import { Grid, CardMedia, Typography, SxProps } from '@mui/material'
import pokemonFailImage from '../assets/pokemon-fail.svg'

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

const imageStyle: SxProps = {
  objectFit: 'contain',
  height: 180,
}
