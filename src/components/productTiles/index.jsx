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
        imgSrc:necklaceImg,
        title:"Náhrdelníky",
        typ:"nahrdelnik",
    },
    {
        id:2,
        imgSrc:earringImg,
        title:"Naušnice",
        typ:"naušnice",
    },
    {
        id:3,
        imgSrc:wireWrappingImg,
        title:"Wire-wrapping",
        method:"wire-wrapping",
    },
    {
        id:4,
        imgSrc:czechStoneImg,
        title:"České kameny",
        collection:"Země česká",
    },
    {
        id:5,
        imgSrc:icelandImg,
        title:"Kousek Islandu",
        collection:"Kousek Islandu",
    },
    {
        id:6,
        imgSrc: angelsImg,
        title:"Strážci a andělé",
        collection:"Strážci a andělé",
    },
    {
        id:7,
        imgSrc: wingsImg,
        title:"Okřídlení",
        collection:"Okřídlení"
    },
    {
        id:8,
        imgSrc :moldaviteImg,
        title:"Vltavíny",
        stone:"vltavín"
    },
    {
        id:9,
        imgSrc: fossilImg,
        title:"Fosilie",
        stone:"fosilie"
    },
    {
        id:10,
        imgSrc: preciousImg,
        title:"Drahé kovy",
        material:"zlato",
    },
    {
        id:11,
        imgSrc: fytomorphicImg,
        title:"Fytomorfní",
        motive:"fytomorfní",
    },
    {
        id:12,
        imgSrc: newsImg,
        title:"Novinky",
    },
]
return(
  tiles.map((tile)=>{
      return <ProductTile key={tile.id} {...tile}/>})
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
