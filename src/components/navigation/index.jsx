import './style.css'
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className="navigation__list">
            <NavLink className="navigation__link" to={'/'}>Domu</NavLink>
            <NavLink className="navigation__link" to={'/o-mne'}>O mně</NavLink>
            <NavLink className="navigation__link" to={'/vyrobky'}>Vyrobky</NavLink>
            <NavLink className="navigation__link" to={'/kontakty'}>Kontakty</NavLink>
            <a className="navigation__link" href='https://fler.cz'>E-shop</a>
        </nav>
    )
}