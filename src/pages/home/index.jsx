import './style.css'
import {ProductTiles} from '../../components/productTiles'

export const HomePage = () => {
	return (
		<>
			<div className="home__wrapper">
				<div className='home__grid'>
					<ProductTiles />
				</div>
			</div>
		</>
	)
}
