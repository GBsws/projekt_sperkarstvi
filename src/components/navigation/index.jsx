import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav>
            <NavLink to={'/'}>Domu</NavLink>
            <NavLink to={'/o-mne'}>O mne</NavLink>
            <NavLink to={'/vyrobky'}>Vyrobky</NavLink>
            <NavLink to={'/kontakty'}>Kontakty</NavLink>
            <a href='https://fler.cz'>E-ship</a>
        </nav>
    )
}