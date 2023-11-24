//import { ProductTypeTile } from "../..productTypeTile";
import { PRODUCT_TYPE } from "../../constants"
import { ProductTypeTile} from "../../components/productTypeTile"

export const HomePage = () => {
  return (
    <div>
      {Object.values(PRODUCT_TYPE).map((type) => {
        return <ProductTypeTile key={type} type={type} />
      })}
    </div>
  )
}