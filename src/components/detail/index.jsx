import { useParams } from "react-router-dom";

export const Detail=()=>{
    const {ProductId} =useParams()
    const Product =data.find((item)=>item.id===ProductId)
    const {material}= product
   return(
    <div></div>
   )
}