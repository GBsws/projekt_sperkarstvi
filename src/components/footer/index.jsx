import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <div>
            <nav>
            <NavLink to='/vlastnosti-materialu'>Vlastnosti materialu</NavLink>
            <NavLink to='/prodejni-akce'>Prodejni akce a trhy</NavLink>
            </nav>
        </div>
    )
}