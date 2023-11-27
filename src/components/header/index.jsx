import './style.css'
import { Navigation } from "../navigation"

export const Header = () => {
    return (
        <div>
            <div className="header__banner">
                <div className="header__back">
                <h1 className="header__title">Jitka Pfau ~ autorské šperky</h1>
                </div>
            </div>
            <Navigation />
        </div>
    )
}
