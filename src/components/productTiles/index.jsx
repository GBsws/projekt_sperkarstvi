//import { useParams } from "react-router-dom";
import './style.css'
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
import { FILTER_ID } from '../filterForm/data'

export const ProductTiles=()=>{
  const tiles =[
    {
        id:1,
        imgSrc:necklaceImg,
        title:"Náhrdelníky",
        [FILTER_ID.TYPE]:"nahrdelnik",
    },
    {
        id:2,
        imgSrc:earringImg,
        title:"Naušnice",
        [FILTER_ID.TYPE]:"naušnice",
    },
    {
        id:3,
        imgSrc:wireWrappingImg,
        title:"Wire-wrapping",
        [FILTER_ID.METHOD]:"wire-wrapping",
    },
    {
        id:4,
        imgSrc:czechStoneImg,
        title:"České kameny",
        [FILTER_ID.COLLECTION]:"Země česká",
    },
    {
        id:5,
        imgSrc:icelandImg,
        title:"Kousek Islandu",
        [FILTER_ID.COLLECTION]:"Kousek Islandu",
    },
    {
        id:6,
        imgSrc: angelsImg,
        title:"Strážci a andělé",
        [FILTER_ID.COLLECTION]:"Strážci a andělé",
    },
    {
        id:7,
        imgSrc: wingsImg,
        title:"Okřídlení",
        [FILTER_ID.COLLECTION]:"Okřídlení"
    },
    {
        id:8,
        imgSrc :moldaviteImg,
        title:"Vltavíny",
        [FILTER_ID.STONE]:"vltavín"
    },
    {
        id:9,
        imgSrc: fossilImg,
        title:"Fosilie",
        [FILTER_ID.STONE]:"fosilie"
    },
    {
        id:10,
        imgSrc: preciousImg,
        title:"Drahé kovy",
        [FILTER_ID.MATERIALS]:"zlato",
        [FILTER_ID.MATERIALS]:"stribro",
    },
    {
        id:11,
        imgSrc: fytomorphicImg,
        title:"Fytomorfní",
        [FILTER_ID.MOTIVE]:"fytomorfní",
    },
    // {
    //     id:12,
    //     imgSrc: newsImg,
    //     title:"Novinky",
    //     [FILTER_ID.METHOD]:""
    // },
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
