import {Link} from 'react-router-dom'

export const RenderData = ({data}) => {
      return data.map((item)=>{
      console.log('co je item',item)
		{return (<Link to={`/vyrobek/${item.fields.cislo_fotky}`}>
             <img src={`https://res.cloudinary.com/daj0gsgx1/image/upload/v1701597652/Web_sperky_foto/${item.fields.cislo_fotky}`} alt=''/>
		</Link>)}
   } )
}  
	

