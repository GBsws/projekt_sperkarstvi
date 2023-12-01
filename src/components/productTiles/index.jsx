//import { useParams } from "react-router-dom";
import { ProductTile } from "../productTile"
import necklaceImg from "../../assets/img/nahrdel0385.jpg"
import earringImg from "../../assets/img/naus0169.jpg"
import wireWrappingImg from '../../assets/img/wire0157.jpg'
import czechStoneImg from '../../assets/img/ceske0089.jpg'
import icelandImg from '../../assets/img/isla0060.jpg'
import angelsImg from '../../assets/img/andele0208.jpg'
import wingsImg from '../../assets/img/okrid0080.jpg'
import moldaviteImg from '../../assets/img/vltavin0354.jpg'
import fossilImg from '../../assets/img/fosilie0306.jpg'
import preciousImg from '../../assets/img/drahe0363.jpg'
import fytomorphicImg from '../../assets/img/fytom0081.jpg'
import newsImg from '../../assets/img/novinky0055.jpg'

export const ProductTiles=()=>{
  const tiles =[
    {
        id:1,
        imgSrc: necklaceImg,
        title:"Náhrdelníky",
    },
    {
        id:2,
        imgSrc: earringImg,
        title:"Naušnice",
    },
    {
        id:3,
        imgSrc :wireWrappingImg,
        title:"Wire-wrapping",
    },
    {
        id:4,
        imgSrc: czechStoneImg,
        title:"České kameny",
    },
    {
        id:5,
        imgSrc: icelandImg,
        title:"Kousek Islandu",
    },
    {
        id:6,
        imgSrc: angelsImg,
        title:"Strážci a andělé",
    },
    {
        id:7,
        imgSrc: wingsImg,
        title:"Okřídlení",
    },
    {
        id:8,
        imgSrc :moldaviteImg,
        title:"Vltavíny",
    },
    {
        id:9,
        imgSrc: fossilImg,
        title:"Fosilie",
    },
    {
        id:10,
        imgSrc: preciousImg,
        title:"Drahé kovy",
    },
    {
        id:11,
        imgSrc: fytomorphicImg,
        title:"Fytomorfní",
    },
    {
        id:12,
        imgSrc: newsImg,
        title:"Novinky",
    },
]
return(
  tiles.map((tile)=>{
      return <ProductTile key={tile.id} imgSrc={tile.imgSrc} title={tile.title}/>})
   )
}



{/* // export const productTiles=()=>{
//     const {ProductId} =useParams();
//     const productData =tiles.find((tile)=>tile.id===(ProductId));
//     const {material}= product
//    return(
//     <div>
//         <h3>
//            Obrázek: {productData.imgSrc} Název:({productData.title})
//         </h3>
//     </div>
//    )
// } */}
