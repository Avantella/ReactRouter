
import { SmallButtons, MediumButton } from "~/components/buttons/pokedexButtons";
import type { Pokemon } from "~/types/pokedex";

export default function OutletLayout({ name, sprites, stats, abilities, base_experience }: Pokemon) {
console.log("hello?" + abilities)
    return (
        <main className="!p-0 flex items-center">
            <div className="clip-cut-bottom-left flex flex-col !bg-white justify-center items-center rounded-2xl m-3 w-80 pr-10 pl-10 border-4 border-[#d12424]">
                <SmallButtons />
                <div className="!bg-amber-950 h-50 w-60 rounded-md flex justify-center items-center clip-cut-bottom-left-small clip-cut-bottom-left-small">
                    {sprites?.front_default
                        ? <img
                            src={sprites.front_default}
                            width={300}                          
                            alt="Pokemon image"
                            
                            onError={(e) => e.currentTarget.src = "/International_Pokémon_logo.svg"} />
                        : <img
                            src="/International_Pokémon_logo.svg"
                            width={210}
                            alt="Pokemon logo" />
                    }
                </div>
                <div className="flex flex-row justify-between w-full items-start pt-5 pb-5">
                    <MediumButton bgColor="bg-red-500" borderColor="border-red-700"/>
                    <div className=" !text-gray-500 text-xs text-end w-35  h-15 flex-wrap overflow-y-scroll pr-2">
                        <p className="font-bold underline capitalize">{name}</p>
                        {stats && stats.map(({ base_stat, stat }) =>
                            <span key={stat.name} className="capitalize">
                                <p>{stat.name}: {base_stat}</p>
                            </span>)}
                            
                            {
                                base_experience? <p>Exp: {base_experience}</p> : ""
                            }
                            
                            {abilities && abilities.map(({ability})=> <span key={ability.name}> <p className="capitalize">Ability: {ability.name} </p></span>)}
                           
                    </div>
                </div>
            </div>
        </main>
    )
}