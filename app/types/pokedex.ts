export interface PokedexResponse {
    count: number
    next: string | null
    previous: string | null
    results: {
        name: string
        url: string
    }[]
}

export interface Pokemon {
    name?: string
    sprites?: {
        front_default: string | null
    }
    stats?: {
        base_stat: number
        stat: {
            name: string
        }

    }[]
  
    abilities?: [
        {
            ability: {
                name: string
            },
            is_hidden: false
        }
    ]
    base_experience?: number

}