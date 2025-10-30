import type { ForecastFeature } from "~/types/weather";
import { WeatherDay } from "./weatherDay";

export function WeatherCard({ forecast }: { forecast: ForecastFeature }) {
    const forecastFiltered = forecast.properties.timeseries.filter((_, i) => i % 24 === 1)
    return (
        <div className="grid grid-cols-5 p-4 bg-sky-100 text-black w-full items-center">
            <span>lat: {forecast.geometry.coordinates[0]} lon:
                {forecast.geometry.coordinates[1]}
            </span>
            {forecastFiltered.map((item) => (
                <WeatherDay key={item.time} forecast={item} />
            ))}
        </div>
    )
}