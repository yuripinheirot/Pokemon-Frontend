import { queryPaginatedParams } from '@src/types/params.type'
import { httpClient } from '../../../../utils/http-client.util'
import { PokemonPaginatedType, PokemonType } from '../types/pokemon.type'

export class MainStore {
  static async getPokemonByName(pokemon: string) {
    const { data } = await httpClient.get<PokemonType>(`/pokemon/${pokemon}`)

    return data
  }

  static async getPokemonPaginated(paginateParams: queryPaginatedParams) {
    const offset = (paginateParams.page - 1) * paginateParams.limit
    const { data } = await httpClient.get<PokemonPaginatedType>(
      `/pokemon?limit=${paginateParams.limit}&offset=${offset}`
    )

    return data
  }
}
