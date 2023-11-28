import { useParams } from "react-router-dom";

  const tiles =[
    {
        id:1,
        imgSrc:'../../assets/img/nahrdel0385.JPG',
        title:"Náhrdelníky",
    },
    {
        id:2,
        imgSrc:'../../assets/img/naus0169.JPG',
        title:"Naušnice",
    },
    {
        id:3,
        imgSrc:'../../assets/img/wire0157.jpg',
        title:"Wire-wrapping",
    },
    {
        id:4,
        imgSrc:"../../assets/img/ceske0089.jpg",
        title:"České kameny",
    },
    {
        id:5,
        imgSrc:"../../assets/img/isla0060.jpg",
        title:"Kousek Islandu",
    },
    {
        id:6,
        imgSrc:"../../assets/img/andele0208.JPG",
        title:"Strážci a andělé",
    },
    {
        id:7,
        imgSrc:"../../assets/img/okrid0080.jpg",
        title:"Okřídlení",
    },
    {
        id:8,
        imgSrc:"../../assets/img/vltavin0354.JPG",
        title:"Vltavíny",
    },
    {
        id:9,
        imgSrc:"../../assets/img/fosilie0306.JPG",
        title:"Fosilie",
    },
    {
        id:10,
        imgSrc:"../../assets/img/drahe0363.JPG",
        title:"Drahé kovy",
    },
    {
        id:11,
        imgSrc:"../../assets/img/fytom0081.jpg",
        title:"Fytomorfní",
    },
    {
        id:12,
        imgSrc:"../../assets/img/novinky0055.jpg",
        title:"Novinky",
    },
]

export const productTiles=()=>{
    const {ProductId} =useParams();
    const productData =tiles.find((tile)=>tile.id===(ProductId));
    // const {material}= product
   return(
    <div>
        <h3>
           Obrázek: {productData.imgSrc} Název:({productData.title})
        </h3>
    </div>
   )
}