import './style.css' 
import { PRODUCT_TYPE } from "../../constants"
import { ProductTile } from '../../components/productTile'
export const HomePage = () => {
  return (
    <div>
      {Object.values(PRODUCT_TYPE).map((type) => {
        return <ProductTile key={type} type={type} />
      })}
    </div>
  )
}