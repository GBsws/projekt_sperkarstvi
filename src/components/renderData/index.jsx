import {Link} from 'react-router-dom'
import './style.css'

export const RenderData = ({data}) => {
    return data.map((item)=>{ 
      if(!item.fields.cislo_fotky) return null
		{return (<Link  to={`/vyrobek/${item.fields.cislo_fotky}`}>
             <img className="renderData__image" src={`https://res.cloudinary.com/daj0gsgx1/image/upload/v1701597652/Web_sperky_foto/${item.fields.cislo_fotky}`} alt=''/>
		</Link>)}
   } )
}  
	

