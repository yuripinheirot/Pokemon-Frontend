import { httpClient } from '../../../../utils/http-client.util'
import { PokemonType } from '../types/pokemon.type'

export class MainStore {
  static async getPokemonByName(pokemon: string) {
    try {
      const { data } = await httpClient.get<PokemonType>(`/pokemon/${pokemon}`)

      return data
    } catch (error) {
      // if (error instanceof AxiosError) {
      //   throw new AxiosError(error)
      // }
      throw error
    }
  }
}
