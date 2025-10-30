import { KeyButton } from "~/components/buttons/pokedexButtons";

export function BlueKeys() {
    return (
        <main className="mt-7 mb-2 !p-0 w-full ">
            <div className="flex flex-row">
                <KeyButton bgColor="bg-blue-400" borderColor="border-blue-700" roundedSide="rounded-tl-md" />
                {Array(3).fill(true).map((_, i) => <KeyButton bgColor="bg-blue-400" borderColor="border-blue-700" key={i} />)}
                <KeyButton bgColor="bg-blue-400" borderColor="border-blue-700" roundedSide="rounded-tr-md" />
            </div>
            <div className="flex flex-row">
                <KeyButton bgColor="bg-blue-400" borderColor="border-blue-700" roundedSide="rounded-bl-md" />
                {Array(3).fill(true).map((_, i) => <KeyButton bgColor="bg-blue-400" borderColor="border-blue-700" key={i} />)}
                <KeyButton bgColor="bg-blue-400" borderColor="border-blue-700" roundedSide="rounded-br-md" />
            </div>
        </main>
    )
}