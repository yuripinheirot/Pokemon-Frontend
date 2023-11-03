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
import { getPokemonByNameOrId } from '../stores/main.store'
import pokemonLogo from '../assets/pokemon.svg'
import { useQuery } from 'react-query'
import { PokeCardSkeleton } from './PokeSkeleton'
import { designConstants } from 'constants/design.constants'
import { useKeycloak } from '@react-keycloak/web'
import { PokedexContext } from 'contexts/PokedexProvider'
import { useContext } from 'react'
import Carousel from 'react-material-ui-carousel'

type Props = {
  pokemonName: string | undefined
}

export const PokeCard = ({ pokemonName }: Props) => {
  const { data, error } = useQuery<PokemonType>({
    queryKey: ['pokeCard', pokemonName],
    queryFn: async () => getPokemonByNameOrId(pokemonName!),
  })
  const { keycloak } = useKeycloak()
  const { pokedex } = useContext(PokedexContext)
  const addedOnPokedex = pokedex.includes(pokemonName!)

  const getPokemonImages = (data: PokemonType) => {
    if (!data) return null

    const spriteOrder: Array<keyof PokemonType['sprites']> = [
      'front_default',
      'back_default',
    ]

    const spritesOrdered = spriteOrder
      .filter((key) => !!data.sprites[key])
      .map((key) => (
        <img
          key={key}
          src={data.sprites[key]!}
          alt='pokemon_image'
          style={imageStyle}
        />
      ))

    return spritesOrdered.length ? (
      spritesOrdered
    ) : (
      <img
        src={pokemonLogo as any}
        alt='pokemon_image'
        style={imageStyle}
      />
    )
  }

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
            display={'flex'}
          >
            <Carousel
              animation='slide'
              indicators={false}
              duration={300}
              navButtonsAlwaysVisible={false}
              navButtonsAlwaysInvisible={false}
              autoPlay={false}
              sx={carrouselStyle}
            >
              {getPokemonImages(data)}
            </Carousel>
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
const carrouselStyle: SxProps = {
  height: 130,
  width: '100%',
}
const imageStyle: React.CSSProperties = {
  height: carrouselStyle.height as number,
  width: '100%',
  objectFit: 'contain',
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
