import './style.css'
import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="footer">
            <nav className="footer__navbar">
            <NavLink className="link" to='/vlastnosti-materialu'>Vlastnosti materialu</NavLink>
            <NavLink to='/prodejni-akce'>Prodejni akce a trhy</NavLink>
            <NavLink to='/objednani-a-dodani'>Objednání a dodávka zboží</NavLink>
            <NavLink to='/dilna'>Šperkařská dílna</NavLink>
            <NavLink to='/kontakty'>Kontaktní údaje</NavLink>
            </nav>
        </div>
    )
}