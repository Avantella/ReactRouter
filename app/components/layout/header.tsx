import { NavLink } from "react-router";

export default function Header() {
    return (
        <header className="flex justify-between p-4">
            <NavLink to="/" className="!text-fontenehuset-orange">
                <p >logo</p>
            </NavLink>
            <nav className="flex gap-2">
                <NavLink to="/about" className="!text-white">About</NavLink>
                <NavLink to="/contact" className="!text-white">Contact</NavLink>
                <NavLink to="/pokedex" className="!text-pink-200">Pokedex</NavLink>
                <NavLink to="/weather" className="!text-white">Weather</NavLink>
                <NavLink to="/newsletter" className="!text-yellow-200">News</NavLink>
            </nav>
        </header>
    )
}