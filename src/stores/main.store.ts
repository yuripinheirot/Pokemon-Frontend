import { queryPaginatedParams } from 'types/params.type'
import { httpClient } from '../utils/http-client.util'
import { PokemonPaginatedType, PokemonType } from '../types/pokemon.type'

export class MainStore {
  static async getPokemonByNameOrId(pokemon: string | number) {
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
