import type { PokedexResponse } from "~/types/pokedex";

export async function fetchPokemon(): Promise<PokedexResponse | undefined> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  if (!response.ok) {
    return undefined
  }

  const data = await response.json()
 
  return data

  

}