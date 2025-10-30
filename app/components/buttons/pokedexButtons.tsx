export function XLButton() {
    return (
        <div className="flex items-center h-20">
            <RoundButton width="w-17" height="h-17" bgColor="bg-blue-500" borderColor="border-white" borderWidth="border-4" />
        </div>
    )
}

export function LargeButton() {
    return (
        <RoundButton width="w-11" height="h-11" bgColor="bg-gray-600" borderColor="border-gray-700" borderWidth="border-3" />
    )
}

type MediumButtonProps = {
    bgColor: string
    borderColor: string
}
export function MediumButton({ bgColor, borderColor }: MediumButtonProps) {
    return (
        <RoundButton width="w-8" height="h-8" bgColor={bgColor} borderColor={borderColor} borderWidth="border-3" />
    )
}

export function SmallButtons() {
    return (
        <div className="flex flex-row m-3 gap-4 w-full items-center justify-center">
            {Array(2).fill(true).map(() => <RoundButton width="w-6" height="h-6" bgColor="bg-red-500" borderColor="border-red-700" borderWidth="border-3" />)}
        </div>
    )
}

export function XSButtons() {
    return (
        <div className="flex flex-row w-full gap-1">
            <RoundButton width="w-4" height="h-4" bgColor="bg-red-700" borderColor="border-gray-500" borderWidth="border-2" />
            <RoundButton width="w-4" height="h-4" bgColor="bg-yellow-300" borderColor="border-gray-500" borderWidth="border-2" />
            <RoundButton width="w-4" height="h-4" bgColor="bg-green-500" borderColor="border-gray-500" borderWidth="border-2" />
        </div>
    )
}

export function XXSButtons() {
    return (
        <div className="flex flex-row gap-2">
            {Array(2).fill(true).map((_, i) => <RoundButton width="w-2.5" height="h-2.5" bgColor="bg-black" borderColor="border-none" />)}
        </div>
    )
}


type RoundButtonProps = {
    width: string
    height: string
    bgColor: string
    borderColor?: string
    borderWidth?: string
}

export function RoundButton({ width, height, bgColor, borderColor, borderWidth }: RoundButtonProps) {
    return (
        <div className={`${width} ${height} ${bgColor} ${borderColor} ${borderWidth} rounded-full shadow-inner `}></div>
    )
}

type FlatButtonProps = {
    bgColor: string
    borderColor: string
    width: string
    height: string
}

export function FlatButton({ bgColor, borderColor, width, height }: FlatButtonProps) {
    return (
        <div className={`${bgColor} ${borderColor} ${width} ${height} border-2 rounded-full shadow-inner`}></div>
    )
}

export function LargeAndFlatBtns() {
    return (
        <div className="flex flex-row gap-2 pl-10 items-center">
            <LargeButton />
            <FlatButton bgColor="bg-red-800" borderColor="border-red-900" width="w-12" height="h-3.5" />
            <FlatButton bgColor="bg-blue-400" borderColor="border-blue-800" width="w-12" height="h-3.5" />
        </div>
    )
}

export function JoyStickButton() {
    return (      
            <div className="p-joystick-wrap">
                <div className="p-joystick"></div>
            </div>  
    )
}

export function FlatBrownButtons() {
    return (
        <div className="flex flex-row w-fill gap-2 justify-end">
            {Array(2).fill(true).map(() => <FlatButton bgColor="bg-amber-900" borderColor="border-amber-950" width="w-14" height="h-2.5" />)}
        </div>
    )
}

type KeyButtonProps = {
    roundedSide?: string
    bgColor: string
    borderColor: string
}

export function KeyButton({ roundedSide, bgColor, borderColor }: KeyButtonProps) {
    return (
        <div className={`${roundedSide} ${bgColor} ${borderColor} w-15.5 h-12 border-2 shadow-inner`}></div>
    )

}
