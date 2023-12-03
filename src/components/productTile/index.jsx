import './style.css'
import {Link} from 'react-router-dom'

export const ProductTile = ({imgSrc, title, filters}) => {
    return (
        <Link className='product-tile__title' to={`/vyrobky?${Object.entries(filters).map(([key, values]) => `${key}=${values.join(',')}`)}`}>
            <img className='product-tile__image' src={imgSrc} alt={title} />
            <p >{title}</p>
        </Link>
    )
}
