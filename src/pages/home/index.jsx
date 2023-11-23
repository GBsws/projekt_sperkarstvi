import { ProductTypeTile } from "../..productTypeTile";
import { PRODUCT_TYPE } from "../../constants"

export const HomePage = () => {
  return (
    <div>
      {Object.values(PRODUCT_TYPE).map((type) => {
        return <ProductTypeTile key={type} type={type} />
      })}
    </div>
  )
}