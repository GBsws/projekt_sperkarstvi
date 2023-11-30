import './style.css' 
import { PRODUCT_TYPE } from "../../constants"
import { ProductTile } from '../../components/productTile'
import { ProductTiles } from '../../components/productTiles'
export const HomePage = () => {
  return (
    <>
    <div className="home__grid">
      {Object.values(PRODUCT_TYPE).map((type) => {
        return <ProductTile key={type} type={type} />
      })}
    </div>
    <div className="home__photo">
      <ProductTiles />
    </div>
    </>
  )
}
