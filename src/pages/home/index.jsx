import './style.css' 
import { PRODUCT_TYPE } from "../../constants"
import { ProductTile } from '../../components/productTile'
import { ProductTiles } from '../../components/productTiles'
//import { ProductDetailPage } from '../product-detail'
export const HomePage = () => {
  return (
    <>
    <div>
      {Object.values(PRODUCT_TYPE).map((type) => {
        return <ProductTile key={type} type={type} />
      })}
    </div>
    <div>
      <ProductTiles />
    </div>
    </>
  )
}
{/* <div>
      {Object.values(PRODUCT_TYPE).map((type) => {
        return <ProductTile key={type} type={type} />
      })}
    </div> */}