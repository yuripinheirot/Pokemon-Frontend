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
          <Box sx={boxDescriptionStyle}>
            <Typography
              textAlign='center'
              sx={descriptionStyle}
            >
              {data.description}
            </Typography>
          </Box>
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
              fullWidth
            >
              Details
            </Button>

            <Button
              color='primary'
              variant='contained'
              size='medium'
              fullWidth
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
  width: 200,
}

const titleStyle: SxProps = {
  textTransform: 'capitalize',
}

const boxDescriptionStyle: SxProps = {
  height: 70,
}
const descriptionStyle: SxProps = {
  fontSize: 12,
  textAlign: 'justify',
  overflowY: 'auto',
  height: '100%',
  paddingX: '10px',
}

const boxButtonStyle: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 2,
  gap: 2,
}
