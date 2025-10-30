import { NavLink, Outlet, useLoaderData } from "react-router";
import { BottomLeftComponent, BottomRightComponent, TopLeftComponent, TopRightComponent } from "~/components/pokedexComponents";
import { fetchPokemon } from "~/lib/pokedex/fetch";

export async function loader() {
    const data = await fetchPokemon()
    return data

}

export default async function PokedexLayout() {
    const data = useLoaderData<typeof loader>();

    return (
        <main className="!flex-row flex justify-center flex-1 mt-[10%] md:mt-[5%] h-dvh">

            <div className="flex-row justify-evenly w-full flex  m-4 md:justify-center">


                <aside className="flex flex-row !bg-pokedex-red-1 
            rounded-tl-4xl rounded-bl-4xl !p-0  border-l-2 border-l-red-200 w-1/2 h-3/4 md:w-1/4 ">
 <TopLeftComponent />
                    {/* <div>
                        <TopLeftComponent />
                        <div className="flex flex-col pl-2 mt-3">
                            <div className="w-92.5 rounded-bl-4xl border-r-4 border-pokedex-red-3 
                        border-l-4 border-b-4 border-t-0 ">
                                <Outlet />
                                <BottomLeftComponent />
                            </div>
                        </div>
                    </div> */}

                </aside>

                <aside className=" flex flex-col justify-end !bg-pokedex-red-4 
           w-1/2 h-3/4  md:w-1/4 ">

                    {/* <aside className=" flex flex-col justify-end w-1/2 h-9/12" > */}

                    <div className="flex flex-row !bg-pokedex-red-1 
                    rounded-tr-4xl rounded-br-4xl !p-0  border-b-4 border-r-4 border-red-300 w-full h-11/12  ">

                        {/* <TopRightComponent /> */}

                        {/* <div className=" bg-pokedex-red-1 p-1 h-133 rounded-br-4xl 
                    border-b-4 border-r-4 border-red-300 md:w-1/4 ">

                        <div className="bg-pokedex-red-1 pl-8 pr-8 pb-8 pt-6 border-r-4 border-pokedex-red-3 
                    border-l-4 border-b-4 border-t-4 m-2  md:w-1/4 h-135 relative bottom-9 rounded-br-3xl z-3">
                            <div className="w-full h-full flex flex-col gap-1 justify-center">

                                <div className="bg-amber-950 text-white h-30 overflow-y-scroll rounded-md border-2 border-red-950 mt-2 ">

                                    {data ? data.results.map(({ name }) => (
                                        <NavLink
                                            key={name}
                                            to={"/pokedex/" + name}
                                            className={({ isActive }) =>
                                                `flex flex-col p-2 capitalize ${isActive ? "bg-red-200 !text-black" : "!text-white"}`
                                            }> {name} </NavLink>)) : <p>Fetch failed</p>}
                                </div>

                                <BottomRightComponent />
                            </div>
                        </div>
                    </div> */}
                    </div>
                </aside>
            </div>
        </main>
    )

}