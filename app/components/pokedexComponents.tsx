import { FlatBrownButtons, JoyStickButton, KeyButton, LargeAndFlatBtns, MediumButton, XLButton, XSButtons, XXSButtons } from "./buttons/pokedexButtons"
import { BlueKeys } from "./ui/card/pokedex/blueKeysCard"

export function WhiteKeys() {
    return (
        <div className="flex flex-row w-fill justify-start">
            <KeyButton bgColor="bg-white" borderColor="border-gray-500" roundedSide="rounded-l-md" />
            <KeyButton bgColor="bg-white" borderColor="border-gray-500" roundedSide="rounded-r-md" />
        </div>
    )
}

export function GreenDisplay() {
    return (
        <div className=" h-15 w-30 bg-pokedex-green-1 rounded-md shadow-inner border-4 border-pokedex-green-2"></div>
    )
}

export function BrownDisplays() {
    return (
        <div className="flex flex-row w-fill justify-between mt-10">
            {Array(2).fill(true).map((_, i) => <div className="w-32 shadow-inner h-11 bg-amber-950 rounded-md border-2 border-black"></div>)}
        </div>
    )
}

export function TopLeftComponent() {
    return (
        <div className="h-30 flex row justify-between ">
            <div className="flex-col">
                < div className="flex flex-row w-70 gap-4 h-30 bg-pokedex-red-2 clip-cut-bottom-right rounded-tl-4xl p-4 border-b-3  border-b-red-400 border-l-4 border-l-red-200 " >
                    <XLButton />
                    <XSButtons />
                </div >

                <div className="w-41 h-1.5 border-b-4 border-pokedex-red-3 m-2 "></div>
                <div className="relative left-43 bottom-22.5 w-27 h-26 bg-pokedex-red-3 clip-cut-top-left"></div>
                <div className="relative left-43 bottom-47.5 w-27 h-26 bg-pokedex-red-1 clip-cut-top-left"></div>
                <div className="w-25 h-26 relative left-69.5 bottom-74 border-t-4 border-pokedex-red-3 border-r-4"></div>
            </div>

            <div className="justify-end w-50 flex col " >
                <div className="w-30  h-10 border-b-3  border-red-300 bg-pokedex-red-2"></div>

                <div className="w-26">
                    <div className="w-15 h-10 border-red-300 border-r-6 bg-pokedex-red-2 "></div>
                    <div className="w-15 h-20.5 bg-pokedex-red-2 border-b-pokedex-red-4 border-b-3 border-r-red-300 border-l-pokedex-red-3 border-l-7 border-r-6"></div>
                    <div className=" w-15 h-117.5 bg-pokedex-red-2 border-l-7 border-r-6 border-l-pokedex-red-3 border-r-red-300"></div>
                    <div className="w-15 h-20.5 bg-pokedex-red-2 border-t-pokedex-red-4 border-t-3 border-r-red-300 border-l-pokedex-red-3 border-l-7 border-r-6"></div>
                </div>
            </div>
        </div >
    )
}

export function TopRightComponent() {
    return (
        <div className="flex row h-20 items-end w-100">
            <div className="flex row h-20 items-end w-full">
                <div className="bg-pokedex-red-1 w-56 h-28 clip-cut-top-right"></div>
                <div className="w-66 h-10  bg-pokedex-red-1 border-r-4 border-red-300 z-1"></div>
            </div>
            <div>
                <div className="bg-pokedex-red-3 right-97 relative top-6 w-45 h-28 clip-cut-top-right-2 z-2 "></div>
            </div>

            <div>
                <div className="bg-pokedex-red-1 relative right-141 top-7.5 w-44 h-28 clip-cut-top-right-2 z-4 "></div>

            </div>

        </div>
    )
}

export function BottomLeftComponent() {
    return (
        <div className="flex flex-col !p-0 w-full ">
            <LargeAndFlatBtns />
            <div className="flex flex-row gap-2 pl-11 pr-4 w-full pt-5 ">
                <XXSButtons />
                <GreenDisplay />
                <JoyStickButton />
            </div>
        </div>
    )
}

export function BottomRightComponent() {
    return (
        <div>
            <BlueKeys />
            <FlatBrownButtons />
            <div className="flex row w-full justify-between items-end h-17 ">
                <WhiteKeys />
                <MediumButton bgColor="bg-yellow-300" borderColor="border-yellow-400" />
            </div>
            <BrownDisplays />
        </div>
    )
}
