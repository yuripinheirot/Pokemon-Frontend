import { httpClient } from '../../../../utils/http-client.util'
import { PokedexType } from '../types/pokedex.type'

export const getPokedex = async () => {
  const { data } = await httpClient.get<PokedexType>(`/pokedex`)

  return data
}

export const addPokedex = async (pokemon: string) => {
  const { data } = await httpClient.post<PokedexType>(`/pokedex`, {
    pokemonName: pokemon,
  })

  return data
}
