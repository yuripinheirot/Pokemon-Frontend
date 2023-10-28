import { queryPaginatedParams } from '@src/types/params.type'
import { httpClient } from '../../../../utils/http-client.util'
import { PokemonOffsetType, PokemonType } from '../types/pokemon.type'

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

  static async getPokemonPaginated(paginateParams: queryPaginatedParams) {
    try {
      const { data } = await httpClient.get<PokemonOffsetType>(
        `/pokemon?limit=${paginateParams.limit}&offset=${paginateParams.offset}`
      )

      return data
    } catch (error) {
      // if (error instanceof AxiosError) {
      //   throw new AxiosError(error)
      // }
      throw error
    }
  }
}
