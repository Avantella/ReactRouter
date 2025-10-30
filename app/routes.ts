import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("pages/home.tsx"),
    route("about", "pages/about/page.tsx"),
    route("contact", "pages/contact/page.tsx"),
    ...prefix("pokedex", [
        layout("pages/pokedex/layout.tsx", [
            index("pages/pokedex/page.tsx"),
            route(":name", "pages/pokedex/pokemonById.tsx"),            
        ]),
    ]),
    route("weather","pages/weather/page.tsx"),
    route("newsletter", "pages/newsletter/NewsletterPage.tsx"),
    route("*", "./not-found.tsx")
] satisfies RouteConfig;
