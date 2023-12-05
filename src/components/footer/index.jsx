import './style.css'
import {NavLink} from 'react-router-dom'

export const Footer = () => {
	return (
		<div className='footer'>
			<nav className='footer__navbar'>
				<div>
					<NavLink className='footer__link footer__link1' to='/vlastnosti-materialu'>
						Vlastnosti materiálu
					</NavLink>
					<NavLink className=' footer__link footer__link1' to='/prodejni-akce'>
						Prodejní akce a trhy
					</NavLink>
				</div>
				<div>
					<NavLink className='footer__link footer__link2' to='/objednani-a-dodani'>
						Objednání a dodávka zboží
					</NavLink>
					<NavLink className='footer__link footer__link2' to='/dilna'>
						Šperkařská dílna
					</NavLink>
				</div>
				<div>
					<NavLink className='footer__link footer__link3' to='/kontakty'>
						Kontaktní údaje
					</NavLink>
					<NavLink className='footer__link footer__link3' to='/kontakty'>
						........
					</NavLink>
				</div>
			</nav>
		</div>
	)
}
