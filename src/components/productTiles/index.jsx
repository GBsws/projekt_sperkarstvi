import { ProductTypeTile } from "../productTypeTile";
import { tiles } from "./data";
import imgSrc from '../../assets/img'

export const ProductTiles=()=>{
tiles.map((tile)=>{
  return(
    <ProductTypeTile key={tile.id} imgSrc={tile.imgSrc} title={tile.title}/>
  )
})}