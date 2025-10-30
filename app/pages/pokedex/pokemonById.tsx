import type { Pokemon } from "~/types/pokedex";
import type { Route } from "./+types/pokemonById";
import OutletLayout from "./outletLayout";
import { useLoaderData } from "react-router";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)

    if (!response.ok) {
        console.log("fetch failed for pokemon " + params.name)
    }

    const data: Pokemon = await response.json()

    return data;
}

export default function PokemonById() {
    const pokemon = useLoaderData<typeof clientLoader>()

    return (
        <OutletLayout {...pokemon} />
    )
}

