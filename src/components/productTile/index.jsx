import './style.css'
import {Link} from 'react-router-dom'

export const ProductTile = ({
	type,
	imgSrc,
	title,
	material,
	method,
	location,
	treatment,
	motive,
	collection,
	stone,
}) => {
	return (
		<Link
			to={`/vyrobky?type=${type},material=${material},method=${method},location=${location},treatment${treatment},motive=${motive},collection=${collection},stone=${stone}`}
		>
			<img className='product-tile__image' src={imgSrc} alt={title} />
			<p className='product-tile__title'>{title}</p>
		</Link>
	)
}
