import {
  Box,
  Button,
  CardMedia,
  Fade,
  Grid,
  Paper,
  SxProps,
  Typography,
} from '@mui/material'
import { PokemonType } from '../types/pokemon.type'
import { MainStore } from '../stores/main.store'
import pokemonLogo from '../assets/pokemon.svg'
import { useQuery } from 'react-query'
import { PokeCardSkeleton } from './PokeSkeleton'
import { designConstants } from 'constants/design.constants'
import { useKeycloak } from '@react-keycloak/web'
import { PokedexContext } from 'contexts/PokedexProvider'
import { useContext } from 'react'

type Props = {
  pokemonName: string | undefined
}

export const PokeCard = ({ pokemonName }: Props) => {
  const { data, error } = useQuery<PokemonType>({
    queryKey: ['pokeCard', pokemonName],
    queryFn: async () => MainStore.getPokemonByNameOrId(pokemonName!),
  })
  const { keycloak } = useKeycloak()
  const { pokedex } = useContext(PokedexContext)
  const addedOnPokedex = pokedex.includes(pokemonName!)

  return data && !error ? (
    <Fade
      in={!!data}
      timeout={designConstants.skeletonTimeout}
    >
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
              image={data.sprites.front_default || (pokemonLogo as any)}
              sx={imageStyle}
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
              noWrap
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
                {data.description || 'A powerful pokemon!'}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Box sx={boxButtonStyle}>
              {keycloak.authenticated && (
                <Button
                  color={addedOnPokedex ? 'error' : 'primary'}
                  size='medium'
                  fullWidth
                >
                  {addedOnPokedex ? 'REMOVE' : 'ADD'}
                </Button>
              )}
              <Button
                color='primary'
                size='small'
                fullWidth
                variant='contained'
              >
                Details
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  ) : (
    <PokeCardSkeleton failed={!!error} />
  )
}

const paperCardStyle: SxProps = {
  padding: '20px',
  width: 200,
  height: 300,
}

const imageStyle: SxProps = {
  objectFit: 'contain',
  height: 120,
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
