import { useLoaderData } from "react-router"; import { WeatherCard } from "~/components/ui/card/weather/weatherCard";
import type { ForecastFeature } from "~/types/weather";

export async function loader() {
    const response = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.395&lon=5.305")

    if (!response.ok) {
        throw new Response("Unable to fetch forecast", {
            status: response.status,
            statusText: response.statusText
        });
    }
    const data: ForecastFeature = await response.json()

    if (!data) {
        throw new Response("Fetch success, but unable to read json", {
            status: response.status,
            statusText: response.statusText
        });
    }

    return data
}

export default function WeatherIndex() {
    const forecast = useLoaderData<typeof loader>()

    return (
        <main >
            <h1>Weather Forecast</h1>
            <WeatherCard forecast={forecast} />
            <pre>{JSON.stringify(forecast, null, 2)}</pre>
        </main>
    )
}
