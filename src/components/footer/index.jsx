import "./style.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer__navbar">
          <NavLink className="footer__link" to="/vlastnosti-materialu">
            Vlastnosti materialu
            </NavLink>
          <NavLink className="footer__link" to="/prodejni-akce">
            Prodejní akce a trhy
          </NavLink>
          <NavLink className="footer__link" to="/objednani-a-dodani">
            Objednání a dodávka zboží
          </NavLink>
          <NavLink className="footer__link" to="/dilna">
            Šperkařská dílna
          </NavLink>
        <NavLink className="footer__link" to="/kontakty">
          Kontaktní údaje
        </NavLink>
      </nav>
    </div>
  );
};
