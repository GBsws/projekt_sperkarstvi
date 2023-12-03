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
import { TYPE } from '../../constants'
import { METHOD } from '../../constants'
import { COLLECTION } from '../../constants'
import { STONE } from '../../constants'
import { MATERIALS } from '../../constants'
import  {MOTIVE} from '../../constants'
export const ProductTiles=()=>{
  const tiles =[
    {
        id: 1,
        imgSrc: necklaceImg,
        title: 'Náhrdelníky',
        filters: {
            [FILTER_ID.TYPE]: [TYPE.NAHRDELNIK],
        },
    },
    {
        id: 2,
        imgSrc: earringImg,
        title: 'Naušnice',
        filters: {
            [FILTER_ID.TYPE]: [TYPE.NAUSNICE],
        },
    },
    {
        id: 3,
        imgSrc: wireWrappingImg,
        title: 'Wire-wrapping',
        filters: {
            [FILTER_ID.METHOD]: [METHOD.WIRE_WRAPPING],
        },
    },
    {
        id: 4,
        imgSrc: czechStoneImg,
        title: 'České kameny',
        filters: {
            [FILTER_ID.COLLECTION]: [COLLECTION.ZEME_CESKA],
        },
    },
    {
        id: 5,
        imgSrc: icelandImg,
        title: 'Kousek Islandu',
        filters: {
            [FILTER_ID.COLLECTION]: [COLLECTION.ISLAND],
        },
    },
    {
        id: 6,
        imgSrc: angelsImg,
        title: 'Strážci a andělé',
        filters: {
            [FILTER_ID.COLLECTION]: [COLLECTION.ANDELE],
        },
    },
    {
        id: 7,
        imgSrc: wingsImg,
        title: 'Okřídlení',
        filters: {
            [FILTER_ID.COLLECTION]: [COLLECTION.OKRIDLENI],
        },
    },
    {
        id: 8,
        imgSrc: moldaviteImg,
        title: 'Vltavíny',
        filters: {
            [FILTER_ID.STONE]: [STONE.VLTAVIN],
        },
    },
    {
        id: 9,
        imgSrc: fossilImg,
        title: 'Fosilie',
        filters: {
            [FILTER_ID.STONE]: [STONE.FOSILIE],
        },
    },
    {
        id: 10,
        imgSrc: preciousImg,
        title: 'Drahé kovy',
        filters: {
            [FILTER_ID.MATERIALS]: [MATERIALS.ZLATO, MATERIALS.STRIBRO],
        },
    },
    {
        id: 11,
        imgSrc: fytomorphicImg,
        title: 'Fytomorfní',
        filters: {
            [FILTER_ID.MOTIVE]: [MOTIVE.FYTOMORFNI],
        },
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
