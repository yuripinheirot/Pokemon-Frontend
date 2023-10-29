export type PokemonType = {
  id: number
  name: string
  description: string
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
  }
}

export type PokemonOffsetApiType = {
  name: string
  url: string
}

export type PokemonOffsetType = {
  count: number
  next: string
  previous: string
  results: PokemonOffsetApiType[]
}
