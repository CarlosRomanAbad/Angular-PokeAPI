export interface PokemonResponse {
    count: number
    next: string
    previous: any
    results: Pokemon[]
}
  
export interface Pokemon {
    name: string
    url: string
}
  
