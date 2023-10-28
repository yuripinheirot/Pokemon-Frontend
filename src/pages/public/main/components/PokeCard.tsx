import {
  Box,
  Button,
  CardMedia,
  Grid,
  Paper,
  SxProps,
  Typography,
} from '@mui/material'
import { PokemonType } from '../types/pokemon.type'

type Props = {
  data: PokemonType
}

export const PokeCard = ({ data }: Props) => {
  return (
    <Paper sx={paperCardStyle}>
      <Grid
        container
        gap={1}
      >
        <Grid
          item
          xs={12}
        >
          <CardMedia
            component='img'
            height={120}
            image={data.sprites.front_default || undefined}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            variant='subtitle1'
            textAlign='center'
            sx={titleStyle}
          >
            {data.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign='center'
            sx={descriptionStyle}
          >
            {data.description}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box sx={boxButtonStyle}>
            <Button
              color='primary'
              variant='outlined'
              size='small'
            >
              Details
            </Button>

            <Button
              color='primary'
              variant='contained'
              size='small'
            >
              ADD
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

const paperCardStyle: SxProps = {
  padding: '20px',
  width: 160,
}

const titleStyle: SxProps = {
  textTransform: 'capitalize',
}
const descriptionStyle: SxProps = {
  fontSize: 12,
  textAlign: 'justify',
}

const boxButtonStyle: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 2,
}
